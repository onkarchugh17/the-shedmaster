"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Warehouse,
  MessageSquare,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import Container from "../shared/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "Our Work", href: "/projects" },
  { name: "Why Us", href: "/#why-us" },
  { name: "Process", href: "/#our-process" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-white border-b border-gray-100 py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4734] rounded-lg"
            aria-label="The Shed Master - Home"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0D4734] text-white flex items-center justify-center shadow-sm group-hover:bg-[#083325] transition-colors">
              <Warehouse className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-gray-900 tracking-tight leading-none">
                The Shed Master
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-1">
                Industrial Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && !link.href.includes("#");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-150 relative py-1 ${
                    isActive
                      ? "text-[#0D4734] font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D4734] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Phone */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.phoneTel}`}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-[#0D4734] transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-[#F0F7F4] text-[#0D4734] flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{companyInfo.phoneFormatted}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-[#0D4734] text-white text-sm font-semibold hover:bg-[#083325] active:scale-[0.98] transition-all shadow-sm"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="hidden sm:inline-flex lg:hidden items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D4734] text-white text-xs font-medium"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D4734]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-[#F0F7F4] hover:text-[#0D4734] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <a
                href={`tel:${companyInfo.phoneTel}`}
                className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 font-medium hover:text-[#0D4734]"
              >
                <div className="w-8 h-8 rounded-full bg-[#F0F7F4] text-[#0D4734] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Call Kaushal Directly</div>
                  <div className="font-semibold">{companyInfo.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#0D4734] text-white text-sm font-medium hover:bg-[#083325] transition-colors"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
