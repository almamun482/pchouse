"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [agreed, setAgreed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

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
          <span className="text-muted">Register</span>
        </div>
      </div>

      <div className="container-x py-10 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-ink mb-6">Register Account</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const result = register({ firstName, lastName, email, phone, password: "demo" });
              if (!result.success) {
                setError(result.error ?? "Something went wrong.");
                return;
              }
              router.push("/account");
            }}
            className="space-y-5"
          >
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="E-Mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Telephone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Telephone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-ink cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="accent-brand"
              />
              I have read and agree to the{" "}
              <Link href="/privacy-policy" className="text-brand hover:underline">
                Privacy Policy
              </Link>
            </label>

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
              disabled={!agreed}
              className="w-full text-white font-semibold rounded-md py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#050C2E",
                transition: "background-color 300ms ease",
              }}
              onMouseEnter={(e) => {
                if (agreed) e.currentTarget.style.backgroundColor = "#FF8F5A";
              }}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#050C2E")}
            >
              Continue
            </button>
          </form>

          <div className="relative text-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <span className="relative bg-white px-3 text-sm text-muted">Already have an account?</span>
          </div>

          <p className="text-sm text-ink text-center leading-relaxed">
            If you already have an account with us, please login at the{" "}
            <Link href="/account/login" className="text-brand hover:underline">
              login page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}