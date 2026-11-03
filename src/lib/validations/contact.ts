import { z } from "zod";

export const businessTypeEnum = z.enum([
  "B2B",
  "B2C",
  "Importer",
  "Distributor",
  "Hospital",
  "Wholesaler",
  "Government Agency",
  "Other"
]);

export const productCategoryEnum = z.enum([
  "Generic Medicines",
  "Branded Medicines",
  "Surgical Products",
  "Medical Consumables",
  "Speciality Pharmaceuticals",
  "Oncology Products",
  "Medical Equipment",
  "Multiple Categories",
  "Other"
]);

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(120, "Company name cannot exceed 120 characters"),
  country: z
    .string()
    .min(2, "Please select or specify your country")
    .max(80, "Country name is too long"),
  email: z
    .string()
    .email("Please provide a valid business email address"),
  phone: z
    .string()
    .min(6, "Please provide a valid phone or WhatsApp number")
    .max(30, "Phone number is too long"),
  businessType: businessTypeEnum,
  productCategory: productCategoryEnum,
  requirements: z
    .string()
    .min(3, "Please specify the product names or therapeutic requirements")
    .max(1000, "Requirements text cannot exceed 1000 characters"),
  quantity: z
    .string()
    .min(1, "Please specify your estimated quantity or volume")
    .max(100, "Quantity description too long"),
  message: z
    .string()
    .max(2000, "Message cannot exceed 2000 characters")
    .optional()
    .or(z.literal("")),
  // Honeypot spam field (should always be empty)
  website_honeypot: z.string().optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

