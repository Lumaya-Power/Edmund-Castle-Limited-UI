import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  company: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^[+()\d\s-]{7,20}$/.test(value), "Please enter a valid phone number"),
  location: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  services: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters)")
    .max(1000, "Please keep your message under 1000 characters"),
  consent: z.boolean().refine((value) => value === true, "Please agree so we can contact you"),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;