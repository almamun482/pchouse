"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CreditCard, Truck, Package, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import DistrictSelect from "@/components/shared/DistrictSelect";

function formatTaka(n: number) {
  return n.toLocaleString("en-IN");
}

const deliveryOptions = [
  { id: "home", label: "Home Delivery", fee: 110 },
  { id: "pickup", label: "Store Pickup", fee: 0 },
  { id: "express", label: "Request Express", fee: 200 },
];

const paymentOptions = [
  { id: "cod", label: "Cash on Delivery" },
  { id: "online", label: "Online Payment" },
  { id: "pos", label: "POS on Delivery" },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearCart } = useCart();
  const [delivery, setDelivery] = useState("home");
  const [district, setDistrict] = useState("Dhaka");
  const [payment, setPayment] = useState("cod");
  const [coupon, setCoupon] = useState("");
  const [agreed, setAgreed] = useState(true);

  const deliveryFee = deliveryOptions.find((d) => d.id === delivery)?.fee ?? 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-[#F2F3F8] min-h-screen py-6">
      <div className="container-x">
        <h1 className="text-2xl font-bold text-ink mb-4">Checkout</h1>

        <div className="bg-[#DDEDEB] text-[#1C4A44] text-xs sm:text-sm rounded-lg px-4 py-3 mb-6 leading-relaxed">
          For your security, we do not store your card details. All transactions are protected, and we never
          request payment information outside of our official checkout process.
        </div>

        {items.length === 0 ? (
          <div className="bg-white section-card py-16 flex flex-col items-center gap-4">
            <Package size={48} className="text-gray-300" />
            <p className="text-muted">Your cart is empty.</p>
            <Link href="/" className="btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <form
                id="checkout-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  clearCart();
                  router.push("/checkout/success");
                }}
                className="bg-white section-card p-5"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Package size={18} className="text-brand" />
                  <h2 className="font-bold text-ink">Shipping &amp; Billing</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input required type="text" placeholder="First Name" className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input required type="text" placeholder="Last Name" className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-muted mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input required type="text" placeholder="Address" className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">
                      Upazila/Thana <span className="text-red-500">*</span>
                    </label>
                    <input required type="text" placeholder="Upazila/Thana" className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">
                      District <span className="text-red-500">*</span>
                    </label>
                    <DistrictSelect value={district} onChange={setDistrict} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <input required type="tel" placeholder="Telephone" className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted mb-1">Email</label>
                    <input type="email" placeholder="E-Mail" className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted mb-1">Comment</label>
                  <textarea
                    rows={3}
                    placeholder="Any special requirement/instruction for us?"
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm outline-none focus:border-brand"
                  />
                </div>
              </form>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white section-card p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <CreditCard size={18} className="text-brand" />
                    <h2 className="font-bold text-ink">Payment Method</h2>
                  </div>
                  <p className="text-xs text-muted mb-3">Select a payment method</p>
                  <div className="space-y-2 mb-4">
                    {paymentOptions.map((opt) => (
                      <label key={opt.id} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={payment === opt.id}
                          onChange={() => setPayment(opt.id)}
                          className="accent-brand"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-muted mb-2">We Accept:</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {["VISA", "Mastercard", "bKash", "Nagad", "Rocket"].map((p) => (
                      <span key={p} className="h-6 px-2 rounded bg-gray-100 text-[10px] font-bold flex items-center justify-center text-ink">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white section-card p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Truck size={18} className="text-brand" />
                    <h2 className="font-bold text-ink">Delivery Method</h2>
                  </div>
                  <p className="text-xs text-muted mb-3">Select a delivery method</p>
                  <div className="space-y-2">
                    {deliveryOptions.map((opt) => (
                      <label key={opt.id} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="radio"
                          name="delivery"
                          checked={delivery === opt.id}
                          onChange={() => setDelivery(opt.id)}
                          className="accent-[#3749BB]"
                        />
                        {opt.label} - {formatTaka(opt.fee)}৳
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white section-card p-5">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <Package size={18} className="text-brand" />
                  <h2 className="font-bold text-ink">Products</h2>
                </div>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.slug + (item.color ?? "")} className="flex items-center justify-between text-sm">
                      <span className="text-ink">
                        {item.qty} x {item.name}
                        {item.color && <span className="text-muted"> ({item.color})</span>}
                      </span>
                      <span className="font-semibold text-ink shrink-0 ml-4">{formatTaka(item.price * item.qty)}৳</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white section-card p-5 h-fit sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck size={18} className="text-brand" />
                  <h2 className="font-bold text-ink">Order Summary</h2>
                </div>

                <div className="bg-[#F5F5F7] rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-ink mb-1">Get Some Extra</p>
                  <p className="text-xs text-muted mb-3">Use coupon/voucher/star points</p>
                  <div className="flex items-center gap-2 mb-3">
                    <button className="text-xs font-semibold text-white rounded-full px-3 py-1.5" style={{ backgroundColor: "#050C2E" }}>
                      🎟 Coupon
                    </button>
                    <button className="text-xs font-semibold text-ink border border-gray-300 rounded-full px-3 py-1.5">
                      🎁 Gift Voucher
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Promo / Coupon Code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="flex-1 min-w-0 border border-gray-200 rounded-md px-3 py-2 text-sm outline-none bg-white"
                    />
                    <button className="text-xs font-semibold text-white rounded-md px-4 py-2" style={{ backgroundColor: "#050C2E" }}>
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex justify-between text-sm py-1.5">
                  <span className="text-muted">Sub-Total:</span>
                  <span className="text-ink">{formatTaka(subtotal)}৳</span>
                </div>
                <div className="flex justify-between text-sm py-1.5">
                  <span className="text-muted">Home Delivery:</span>
                  <span className="text-ink">{formatTaka(deliveryFee)}৳</span>
                </div>
                <div className="border-t border-gray-100 my-2" />
                <div className="flex justify-between font-bold py-1.5">
                  <span className="text-ink">Total:</span>
                  <span style={{ color: "#EF4A23" }}>{formatTaka(total)}৳</span>
                </div>

                <label className="flex items-start gap-2 text-xs text-muted mt-4 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 accent-brand"
                  />
                  <span>
                    I have read and agree to the{" "}
                    <span className="text-brand">Terms and Conditions, Privacy Policy and Refund and Return Policy</span>
                  </span>
                </label>

                <button
                  type="submit"
                  form="checkout-form"
                  disabled={!agreed}
                  className="w-full text-white font-semibold rounded-md py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  style={{ backgroundColor: "#050C2E" }}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}