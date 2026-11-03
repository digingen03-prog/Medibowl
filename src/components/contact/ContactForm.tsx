"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
  businessTypeEnum,
  productCategoryEnum,
} from "@/lib/validations/contact";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
  ShieldCheck,
  Building2,
  Globe2,
} from "lucide-react";

interface ContactFormProps {
  initialCategory?: string;
  initialBusinessType?: string;
  title?: string;
  subtitle?: string;
}

export function ContactForm({
  initialCategory,
  initialBusinessType,
  title = "Request a Quotation & Sourcing Enquiry",
  subtitle = "Submit your pharmaceutical or healthcare product requirements. Our international trade desk will analyze availability, pricing, and documentation within 24 hours.",
}: ContactFormProps) {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successInfo, setSuccessInfo] = useState<{ message: string; id?: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      country: "",
      email: "",
      phone: "",
      businessType: (initialBusinessType as any) || "B2B",
      productCategory: (initialCategory as any) || "Generic Medicines",
      requirements: "",
      quantity: "",
      message: "",
      website_honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmissionStatus("success");
      setSuccessInfo({
        message: result.message || "Quotation request successfully submitted.",
        id: result.messageId,
      });
      reset();
    } catch (err: any) {
      setSubmissionStatus("error");
      setErrorMessage(
        err.message ||
          "Unable to send your request at this time. Please reach our direct line or WhatsApp."
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-card overflow-hidden">
      {/* Header Accent */}
      <div className="bg-[#032666] px-6 sm:px-8 py-6 text-white border-b-4 border-[#D4AF37]">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
          <FileText className="w-4 h-4" />
          <span>Official RFQ & Procurement Form</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {/* Success State */}
        {submissionStatus === "success" && (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 mb-6 animate-in fade-in">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-base text-emerald-800">
                  Enquiry Transmitted Successfully
                </h4>
                <p className="text-sm text-emerald-700 mt-1 leading-relaxed">
                  {successInfo?.message}
                </p>
                {successInfo?.id && (
                  <p className="text-xs text-emerald-600 mt-2 font-mono">
                    Reference ID: {successInfo.id}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setSubmissionStatus("idle")}
                  className="mt-4 px-4 py-1.5 bg-emerald-600 text-white rounded text-xs font-bold hover:bg-emerald-700 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {submissionStatus === "error" && (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-rose-800">Submission Notice</h5>
              <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {/* Honeypot hidden input */}
          <input
            type="text"
            {...register("website_honeypot")}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Row 1: Full Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Dr. / Mr. / Ms. John Doe"
                {...register("fullName")}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all ${
                  errors.fullName ? "border-rose-500 ring-1 ring-rose-500" : "border-[#E2E8F0]"
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Company / Institution Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Global Health Distributors Ltd"
                {...register("companyName")}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all ${
                  errors.companyName ? "border-rose-500 ring-1 ring-rose-500" : "border-[#E2E8F0]"
                }`}
              />
              {errors.companyName && (
                <p className="text-xs text-rose-600 mt-1">{errors.companyName.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Country, Business Email, Contact Phone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Country / Destination <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Philippines, UAE, Kenya"
                {...register("country")}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all ${
                  errors.country ? "border-rose-500 ring-1 ring-rose-500" : "border-[#E2E8F0]"
                }`}
              />
              {errors.country && (
                <p className="text-xs text-rose-600 mt-1">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Business Email <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                placeholder="procurement@company.com"
                {...register("email")}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all ${
                  errors.email ? "border-rose-500 ring-1 ring-rose-500" : "border-[#E2E8F0]"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Contact Number / WhatsApp <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 8900"
                {...register("phone")}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all ${
                  errors.phone ? "border-rose-500 ring-1 ring-rose-500" : "border-[#E2E8F0]"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-rose-600 mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Row 3: Business Type & Product Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Business Type <span className="text-rose-600">*</span>
              </label>
              <select
                {...register("businessType")}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all"
              >
                {businessTypeEnum.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <p className="text-xs text-rose-600 mt-1">{errors.businessType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Product Category <span className="text-rose-600">*</span>
              </label>
              <select
                {...register("productCategory")}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all"
              >
                {productCategoryEnum.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.productCategory && (
                <p className="text-xs text-rose-600 mt-1">{errors.productCategory.message}</p>
              )}
            </div>
          </div>

          {/* Row 4: Product Requirements & Required Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Product Name / Requirements / Generic Molecule <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Ciprofloxacin 500mg, IV Infusion Sets 20 drops/ml, ICU Beds"
                {...register("requirements")}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all ${
                  errors.requirements ? "border-rose-500 ring-1 ring-rose-500" : "border-[#E2E8F0]"
                }`}
              />
              {errors.requirements && (
                <p className="text-xs text-rose-600 mt-1">{errors.requirements.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
                Required Quantity / Volume <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 50,000 packs / 1x 20ft FCL"
                {...register("quantity")}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm rounded-lg border bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all ${
                  errors.quantity ? "border-rose-500 ring-1 ring-rose-500" : "border-[#E2E8F0]"
                }`}
              />
              {errors.quantity && (
                <p className="text-xs text-rose-600 mt-1">{errors.quantity.message}</p>
              )}
            </div>
          </div>

          {/* Row 5: Additional Specifications / Message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5">
              Additional Technical Specifications / INCOTERMS / Target Port (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Specify target packaging, regulatory requirements (CoA, FSC, GMP), preferred INCOTERMS (CIF/FOB), or delivery timeframe..."
              {...register("message")}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#E2E8F0] bg-[#F7F9FA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#032666] transition-all"
            />
            {errors.message && (
              <p className="text-xs text-rose-600 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Security & Regulatory Note */}
          <div className="flex items-start gap-2 p-3 bg-[#F7F9FA] rounded-lg border border-[#E2E8F0] text-[11px] text-[#5E6C84]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <p>
              Your enquiry details are handled under strict corporate confidentiality. All pharmaceutical supplies remain subject to destination regulatory approvals and verified institutional licenses.
            </p>
          </div>

          {/* Submit CTA Button */}
          <button
            type="submit"
            disabled={submissionStatus === "loading"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E7C15B] text-[#032666] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
          >
            {submissionStatus === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

