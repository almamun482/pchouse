"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const DRAFT_KEY = "pchouse_register_draft";

type Draft = { firstName: string; lastName: string; email: string; phone: string };

function NavyButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{ backgroundColor: "#050C2E", transition: "background-color 300ms ease" }}
      onMouseEnter={(e) => {
        if (!props.disabled) e.currentTarget.style.backgroundColor = "#FF8F5A";
      }}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#050C2E")}
      className={`w-full text-white font-semibold rounded-md py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}

function RegisterStep1() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(DRAFT_KEY);
      if (raw) {
        const draft: Draft = JSON.parse(raw);
        setFirstName(draft.firstName);
        setLastName(draft.lastName);
        setEmail(draft.email);
        setPhone(draft.phone);
      }
    } catch {
      // ignore malformed storage
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const draft: Draft = { firstName, lastName, email, phone };
    sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    router.push("/account/register?step=2");
  };

  return (
    <>
      <h1 className="text-xl font-bold text-ink mb-6">Register Account</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
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

        <NavyButton type="submit" disabled={!agreed}>
          Continue
        </NavyButton>
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
    </>
  );
}

function RegisterStep2() {
  const router = useRouter();
  const { register } = useAuth();
  const [draft, setDraft] = useState<Draft | null>(null);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(DRAFT_KEY);
      if (raw) {
        setDraft(JSON.parse(raw));
      } else {
        router.replace("/account/register");
      }
    } catch {
      router.replace("/account/register");
    }
  }, [router]);

  // ⚠️ DEMO ONLY — remove DEMO_OTP and the check below once real SMS/OTP is connected
  const DEMO_OTP = "1234";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError("Please enter the OTP sent to your phone.");
      return;
    }
    if (otp.trim() !== DEMO_OTP) {
      setError(`Invalid OTP. (Demo OTP is ${DEMO_OTP})`);
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!draft) return;

    const result = register({ ...draft, password });
    if (!result.success) {
      setError(result.error ?? "Something went wrong.");
      return;
    }
    sessionStorage.removeItem(DRAFT_KEY);
    router.push("/account");
  };

  if (!draft) return null;

  return (
    <>
      <h1 className="text-xl font-bold text-ink mb-2">OTP Verification</h1>
      <p className="text-sm text-ink mb-6">
        We&apos;ve send a verification code to your phone - {draft.phone}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
        )}

        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">
            OTP <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="OTP"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
          />
          {/* ⚠️ DEMO ONLY — remove this hint line once real SMS/OTP is connected */}
          <p className="text-xs text-amber-600 mt-1">Demo mode: enter {DEMO_OTP} as the OTP.</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">
            Password Confirm <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Password Confirm"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
          />
        </div>

        <NavyButton type="submit">Continue</NavyButton>

        <button
          type="button"
          onClick={() => router.push("/account/register")}
          className="block w-full text-center border-2 rounded-md py-3 text-sm font-bold"
          style={{ borderColor: "#050C2E", color: "#050C2E" }}
        >
          Back
        </button>
      </form>
    </>
  );
}

function RegisterStepSwitcher() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  return step === "2" ? <RegisterStep2 /> : <RegisterStep1 />;
}

export default function RegisterPage() {
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
          <Suspense fallback={null}>
            <RegisterStepSwitcher />
          </Suspense>
        </div>
      </div>
    </div>
  );
}