"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

interface ContactFormProps {
  initialService?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  initialService = "",
  className = "",
  title = "Request a Free Quote",
  subtitle = "Fill in your project requirements and our team will get back to you with a tailored estimate.",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService || "",
    location: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [leadId, setLeadId] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setLeadId(data.data?.leadId || "TSM-CONFIRMED");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please call Kaushal at 9211050139.");
      }
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 text-center ${className}`}>
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#0D4734] mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Enquiry Received Successfully!
        </h3>
        <p className="text-xs text-gray-400 font-mono mb-4">
          Reference ID: {leadId}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          Thank you <span className="font-semibold text-gray-900">{formData.name}</span>. Owner Kaushal and our engineering team have received your request for{" "}
          <span className="font-semibold text-[#0D4734]">{formData.service || "industrial shed services"}</span>. We will review your details and contact you shortly at{" "}
          <span className="font-medium text-gray-900">{formData.phone}</span>.
        </p>

        <div className="space-y-3">
          <a
            href={`https://wa.me/919211050139?text=Hello%20Kaushal%2C%20I%20just%20submitted%20an%20enquiry%20(${leadId})%20for%20${encodeURIComponent(formData.service || "Shed Services")}%20on%20The%20Shed%20Master%20website.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Fast-Track on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                location: "",
                message: "",
              });
            }}
            className="text-xs text-gray-500 hover:text-gray-800 underline transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 text-left ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1.5 text-xs sm:text-sm text-gray-500 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-700 mb-1"
            >
              Your Name <span className="text-emerald-700">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D4734] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-medium text-gray-700 mb-1"
            >
              Phone Number <span className="text-emerald-700">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 98765 43210"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D4734] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700 mb-1"
            >
              Email Address <span className="text-emerald-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D4734] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-xs font-medium text-gray-700 mb-1"
            >
              Select Service <span className="text-emerald-700">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D4734] focus:border-transparent transition-all bg-white"
            >
              <option value="">Choose a service...</option>
              <option value="PEB Shed">Pre-Engineered Building (PEB) Shed</option>
              <option value="Conventional Shed">Conventional Steel Shed</option>
              <option value="Fire Pipeline Work">Fire Pipeline & Hydrant Work</option>
              <option value="Structural Fabrication">Heavy Structural Fabrication</option>
              <option value="Complete Turnkey Factory">Complete Turnkey Factory / Warehouse</option>
              <option value="Consultation">General Enquiry / Consultation</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Project Location / City (Optional)
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Bhiwadi, Pune, Indore, Noida, or Manesar"
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D4734] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Your Message / Shed Dimensions (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your plot size, clear height, crane requirements, or specific fire NOC needs..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D4734] focus:border-transparent transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 px-6 rounded-xl bg-[#0D4734] hover:bg-[#083325] active:scale-[0.99] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Your Enquiry...</span>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] text-gray-400 text-center">
          We respect your privacy. No spam. You will be connected directly with Kaushal at The Shed Master.
        </p>
      </form>
    </div>
  );
}
