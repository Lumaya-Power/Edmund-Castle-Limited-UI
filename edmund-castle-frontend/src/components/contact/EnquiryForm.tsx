import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import { useEnquiry } from "@/hooks/useEnquiry";
import { enquirySchema } from "@/schemas/enquirySchema";
import type { EnquiryFormValues } from "@/schemas/enquirySchema";
import type { EnquiryOptions } from "@/types/enquiry";
import "./EnquiryForm.css";

const MESSAGE_LIMIT = 1000;

const defaultValues: EnquiryFormValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  projectType: "",
  budget: "",
  services: "",
  message: "",
  consent: false,
};

type SelectName = "location" | "projectType" | "budget" | "services";

interface EnquiryFormProps {
  eyebrow: string;
  title: string;
  intro: string;
  options: EnquiryOptions;
  /** Shown if sending fails */
  fallbackEmail: string;
}

interface FieldShellProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  full?: boolean;
  children: ReactNode;
}

function FieldShell({ id, label, required, error, full, children }: FieldShellProps) {
  return (
    <div className={full ? "enquiry-form__field enquiry-form__field--full" : "enquiry-form__field"}>
      <label htmlFor={id} className="enquiry-form__label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="enquiry-form__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function EnquiryForm({ eyebrow, title, intro, options, fallbackEmail }: EnquiryFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues,
    mode: "onTouched",
  });

  const mutation = useEnquiry();
  const values = watch();

  const onSubmit = (data: EnquiryFormValues) => {
    mutation.mutate(data, { onSuccess: () => reset() });
  };

  const fieldProps = (name: keyof EnquiryFormValues) => ({
    id: name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    ...register(name),
  });

  const renderSelect = (name: SelectName, label: string, placeholder: string) => (
    <FieldShell id={name} label={label} error={errors[name]?.message}>
      <div className="enquiry-form__select">
        <select
          {...fieldProps(name)}
          className={values[name] ? "enquiry-form__control" : "enquiry-form__control is-placeholder"}
        >
          <option value="">{placeholder}</option>
          {options[name].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="enquiry-form__chevron" size={16} aria-hidden="true" />
      </div>
    </FieldShell>
  );

  if (mutation.isSuccess) {
    return (
      <div className="enquiry-form">
        <SectionHeading eyebrow="Thank you" title="Your enquiry has been sent" id="enquiry-title" size="md" />
        <p className="enquiry-form__intro" role="status">
          Thanks for getting in touch. A member of our team will reply within 1–2 working days.
        </p>
        <div className="enquiry-form__success-action">
          <Button variant="outline" arrow={false} onClick={() => mutation.reset()}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="enquiry-form">
      <SectionHeading eyebrow={eyebrow} title={title} id="enquiry-title" size="md" />
      <p className="enquiry-form__intro">{intro}</p>

      <form
        className="enquiry-form__form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-labelledby="enquiry-title"
      >
        <FieldShell id="fullName" label="Full Name" required error={errors.fullName?.message}>
          <input
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className="enquiry-form__control"
            {...fieldProps("fullName")}
          />
        </FieldShell>

        <FieldShell id="company" label="Company Name" error={errors.company?.message}>
          <input
            type="text"
            autoComplete="organization"
            placeholder="Your Company"
            className="enquiry-form__control"
            {...fieldProps("company")}
          />
        </FieldShell>

        <FieldShell id="email" label="Email Address" required error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="enquiry-form__control"
            {...fieldProps("email")}
          />
        </FieldShell>

        <FieldShell id="phone" label="Phone Number" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="+44 7700 900123"
            className="enquiry-form__control"
            {...fieldProps("phone")}
          />
        </FieldShell>

        {renderSelect("location", "Project Location", "Select location")}
        {renderSelect("projectType", "Project Type", "Select project type")}
        {renderSelect("budget", "Approximate Project Value", "Select range")}
        {renderSelect("services", "Services Required", "Select service(s)")}

        <FieldShell id="message" label="Your Message" required full error={errors.message?.message}>
          <textarea
            rows={5}
            maxLength={MESSAGE_LIMIT}
            placeholder="Tell us about your project, requirements and any specific questions..."
            className="enquiry-form__control enquiry-form__textarea"
            {...fieldProps("message")}
          />
          <p className="enquiry-form__count" aria-hidden="true">
            {values.message.length}/{MESSAGE_LIMIT}
          </p>
        </FieldShell>

        <div className="enquiry-form__field enquiry-form__field--full">
          <div className="enquiry-form__consent">
            <input type="checkbox" {...fieldProps("consent")} />
            <label htmlFor="consent">
              I agree to the <Link to="/legal#privacy">Privacy Policy</Link> and consent to{" "}
              {siteConfig.name} contacting me about my enquiry.
            </label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="enquiry-form__error" role="alert">
              {errors.consent.message}
            </p>
          )}
        </div>

        {mutation.isError && (
          <p className="enquiry-form__alert" role="alert">
            Sorry, we couldn&rsquo;t send your enquiry. Please try again, or email us at{" "}
            <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
          </p>
        )}

        <div className="enquiry-form__field--full">
          <Button type="submit" className="enquiry-form__submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Sending..." : "Submit Project Enquiry"}
          </Button>
        </div>
      </form>
    </div>
  );
}