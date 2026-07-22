"use client";

import Link from "next/link";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";

export default function ForgottenPasswordPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-gray-100">
        <div className="container-x py-3 flex items-center gap-1.5 text-sm">
          <Link href="/" className="text-ink hover:text-brand">
            <Home size={15} />
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <Link href="/account/login" className="text-ink font-medium hover:text-brand">Account</Link>
          <ChevronRight size={13} className="text-gray-300" />
          <span className="text-muted">Forgotten Password</span>
        </div>
      </div>

      <div className="container-x py-10 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-ink mb-6">Forgot Your Password?</h1>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Enter Your Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter Your Phone"
                required
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>

            {/* Bot-verification placeholder — replace with a real Cloudflare Turnstile widget */}
            <div className="border border-gray-200 rounded-md px-4 py-3 flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium text-ink">Success!</span>
              </div>
              <div className="text-right leading-tight">
                <p className="text-xs font-bold text-ink tracking-wide">SECURITY CHECK</p>
                <p className="text-[10px] text-muted">Privacy · Help</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold rounded-md py-3 text-sm"
              style={{
                backgroundColor: "#050C2E",
                transition: "background-color 300ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FF8F5A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#050C2E")}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}