import Link from "next/link";
import { Facebook } from "lucide-react";

export default function OrderSuccessPage() {
  const orderNumber = Math.floor(1000000 + Math.random() * 9000000);

  return (
    <div className="bg-[#F2F3F8] py-6">
      <div className="container-x">
        <div className="bg-[#DDEDEB] text-[#1C4A44] text-xs sm:text-sm rounded-lg px-4 py-3 mb-6 text-center leading-relaxed">
          If an item is unavailable due to a technical error, PC House BD reserves the right to cancel the order.
          Please do not proceed with any payment outside of our official customer support confirmation.
        </div>

        <div className="bg-white section-card p-8 md:p-12 text-center">
          <p className="font-bold text-ink mb-1">Order# {orderNumber}</p>
          <h1 className="text-xl font-bold text-ink mb-2">Thank you for your order!</h1>
          <p className="text-sm text-muted mb-4">We will contact you soon to verify the order.</p>

          <p className="text-sm text-muted mb-8">
            Should you have any questions about your order, feel free to call us on{" "}
            <span className="text-ink font-semibold">09617179141</span> (9 AM - 9 PM).
          </p>

          <p className="text-sm text-muted mb-4">
            Have a minute? Like us on{" "}
            <a href="https://www.facebook.com/officialpchousebd" className="text-brand hover:underline">Facebook</a> to keep you up to date with all our
            offers and announcements.
          </p>

          
           <a href="https://www.facebook.com/officialpchousebd"
            className="flex flex-col items-center gap-3 mb-8 hover:opacity-80 transition-opacity"
          >
            <div className="h-16 w-16 rounded-lg bg-[#3B5998] flex items-center justify-center">
              <Facebook size={34} className="text-white" fill="white" />
            </div>
            <span className="text-2xl font-extrabold text-[#3B5998] leading-tight">
              Find us on
              <br />
              Facebook
            </span>
          </a>

          <p className="text-xs text-muted leading-relaxed mb-6 border-t border-gray-100 pt-6">
            You may return a product if you find any manufacturing flaw in it. You have 24 hours after delivery to
            report the issue. If it does not reach our office within 24 hours it will be considered a warranty
            case. The product should be returned with its original box and included accessories, and claimed by
            visiting the relevant branch in person.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto text-center border border-gray-300 text-ink font-semibold rounded-md px-6 py-2.5 text-sm hover:border-brand transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href="/account/order_tracking"
              className="w-full sm:w-auto text-center text-white font-semibold rounded-md px-6 py-2.5 text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#050C2E" }}
            >
              Track Your Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}