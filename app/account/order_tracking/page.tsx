"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Home, Package, CheckCircle2, Truck, Box } from "lucide-react";

type TrackResult = {
  orderId: string;
  status: number; // 0=placed, 1=processing, 2=shipped, 3=delivered
};

const steps = [
  { label: "Order Placed", icon: Package },
  { label: "Processing", icon: Box },
  { label: "Shipped", icon: Truck },
  { label: "Delivered", icon: CheckCircle2 },
];

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [contact, setContact] = useState("");
  const [result, setResult] = useState<TrackResult | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!orderId.trim() || !contact.trim()) {
      setError("Please enter both Order ID and your phone/email.");
      return;
    }

    // ⚠️ DEMO ONLY — replace with a real order-lookup API call
    setResult({ orderId: orderId.trim(), status: 2 });
  };

  return (
    <div className="bg-white">
      <div className="border-b border-gray-100">
        <div className="container-x py-3 flex items-center gap-1.5 text-sm">
          <Link href="/" className="text-ink hover:text-brand">
            <Home size={15} />
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <Link href="/account" className="text-ink font-medium hover:text-brand">Account</Link>
          <ChevronRight size={13} className="text-gray-300" />
          <span className="text-muted">Order Tracking</span>
        </div>
      </div>

      <div className="container-x py-10 flex justify-center">
        <div className="w-full max-w-lg">
          <h1 className="text-xl font-bold text-ink mb-6">Track Your Order</h1>

          <form onSubmit={handleSubmit} className="space-y-5 mb-8">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
            )}

            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Order ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 1020657"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Phone or Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Phone or Email used for the order"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold rounded-md py-3 text-sm"
              style={{ backgroundColor: "#050C2E", transition: "background-color 300ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FF8F5A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#050C2E")}
            >
              Track Order
            </button>
          </form>

          {result && (
            <div className="border border-gray-200 rounded-lg p-5">
              <p className="text-sm text-muted mb-4">
                Order <span className="font-semibold text-ink">#{result.orderId}</span> status:
              </p>

              <div className="flex items-center justify-between">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const done = i <= result.status;
                  return (
                    <div key={step.label} className="flex flex-col items-center flex-1 relative">
                      {i > 0 && (
                        <div
                          className={`absolute right-1/2 top-4 h-0.5 w-full -z-10 ${
                            i <= result.status ? "bg-brand" : "bg-gray-200"
                          }`}
                        />
                      )}
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center mb-2 ${
                          done ? "bg-brand text-white" : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <span className={`text-xs text-center ${done ? "text-ink font-medium" : "text-muted"}`}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-muted text-center mt-6">
                This is demo tracking data. Connect a real order-lookup API for live status.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}