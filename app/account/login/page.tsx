"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
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
          <span className="text-muted">Login</span>
        </div>
      </div>

      <div className="container-x py-10 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-ink mb-6">Account Login</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const result = login(emailOrPhone, password);
              if (!result.success) {
                setError(result.error ?? "Login failed.");
                return;
              }
              router.push("/account");
            }}
            className="space-y-5"
          >
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
            )}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">Phone / E-Mail</label>
              <input
                type="text"
                placeholder="Phone / E-Mail"
                required
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-semibold text-ink">Password</label>
                <Link href="/account/forgotten" className="text-xs font-semibold text-brand hover:underline">
                  Forgotten Password?
                </Link>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              style={{ backgroundColor: "#050C2E" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transition = "background-color 300ms ease, transform 300ms ease, box-shadow 300ms ease";
                e.currentTarget.style.backgroundColor = "#FF8F5A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#050C2E";
              }}
            >
              Login
            </button>
          </form>

          <div className="relative text-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <span className="relative bg-white px-3 text-sm text-muted">Don&apos;t have an account?</span>
          </div>

          <Link
            href="/account/register"
            className="block text-center border-2 rounded-md py-3 text-sm font-bold"
            style={{
              borderColor: "#050C2E",
              color: "#050C2E",
              backgroundColor: "transparent",
              transition: "background-color 300ms ease, border-color 300ms ease, color 300ms ease, transform 300ms ease, box-shadow 300ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FF8F5A";
              e.currentTarget.style.borderColor = "#FF8F5A";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "#050C2E";
              e.currentTarget.style.color = "#050C2E";
            }}
          >
            Create Your Account
          </Link>
        </div>
      </div>
    </div>
  );
}