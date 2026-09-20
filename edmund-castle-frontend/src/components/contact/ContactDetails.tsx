import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, CalendarDays, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SocialIcon } from "@/components/common/SocialIcon";
import type { ContactIcon, ContactRow } from "@/types/contact";
import "./ContactDetails.css";

const icons: Record<ContactIcon, ReactNode> = {
  email: <Mail size={26} strokeWidth={1.5} />,
  phone: <Phone size={26} strokeWidth={1.5} />,
  company: <MapPin size={26} strokeWidth={1.5} />,
  linkedin: <SocialIcon name="linkedin" size={24} />,
  whatsapp: <MessageCircle size={26} strokeWidth={1.5} />,
};

interface ContactDetailsProps {
  eyebrow: string;
  title: string;
  intro: string;
  rows: ContactRow[];
  meeting: { title: string; text: string; label: string; href: string };
  coverage: { title: string; text: string; regions: string[]; imageUrl?: string };
}

export function ContactDetails({
  eyebrow,
  title,
  intro,
  rows,
  meeting,
  coverage,
}: ContactDetailsProps) {
  const coverageStyle = coverage.imageUrl
    ? ({ "--coverage-image": `url("${coverage.imageUrl}")` } as CSSProperties)
    : undefined;

  return (
    <div className="contact-details">
      <SectionHeading eyebrow={eyebrow} title={title} id="contact-details-title" size="md" />
      <p className="contact-details__intro">{intro}</p>

      <dl className="contact-details__list">
        {rows.map((row) => (
          <div key={row.label} className="contact-details__row">
            <dt className="contact-details__label">
              <span className="contact-details__icon" aria-hidden="true">
                {icons[row.icon]}
              </span>
              {row.label}
            </dt>
            <dd className="contact-details__value">
              {row.lines.map((line) => {
                const className = line.muted
                  ? "contact-details__line contact-details__line--muted"
                  : "contact-details__line";

                if (!line.href) {
                  return (
                    <p key={line.text} className={className}>
                      {line.text}
                    </p>
                  );
                }

                const linkProps = line.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <p key={line.text} className={className}>
                    <a href={line.href} {...linkProps}>{line.text}</a>
                  </p>
                );
              })}
            </dd>
          </div>
        ))}
      </dl>

      <div className="contact-details__meeting">
        <CalendarDays
          className="contact-details__meeting-icon"
          size={34}
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <div>
          <h3 className="contact-details__meeting-title">{meeting.title}</h3>
          <p className="contact-details__meeting-text">{meeting.text}</p>
          <a className="text-link" href={meeting.href}>
            {meeting.label}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="contact-details__coverage" style={coverageStyle}>
        <span className="contact-details__pin" aria-hidden="true">
          <MapPin size={22} />
        </span>
        <div className="contact-details__coverage-card">
          <h3 className="contact-details__coverage-title">{coverage.title}</h3>
          <p className="contact-details__coverage-text">{coverage.text}</p>
          <ul className="contact-details__regions">
            {coverage.regions.map((region) => (
              <li key={region}>{region}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}