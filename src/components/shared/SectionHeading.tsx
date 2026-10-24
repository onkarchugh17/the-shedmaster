import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  description,
  actionText,
  actionHref,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`mb-8 sm:mb-12 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : ""
      } ${className}`}
    >
      <div
        className={`flex flex-col sm:flex-row sm:items-end ${
          align === "center" ? "sm:justify-center" : "sm:justify-between"
        } gap-4`}
      >
        <div className={align === "center" ? "mx-auto" : "max-w-2xl"}>
          {tag && (
            <div
              className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2.5 ${
                isDark ? "text-emerald-400" : "text-[#0D4734]"
              }`}
            >
              <span
                className={`h-0.5 w-6 inline-block rounded-full ${
                  isDark ? "bg-emerald-400" : "bg-[#0D4734]"
                }`}
              />
              <span>{tag}</span>
            </div>
          )}
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-2.5 text-sm sm:text-base leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {actionText && actionHref && align !== "center" && (
          <Link
            href={actionHref}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 shrink-0 ${
              isDark
                ? "text-emerald-400 hover:text-emerald-300"
                : "text-[#0D4734] hover:text-[#083325]"
            }`}
          >
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
