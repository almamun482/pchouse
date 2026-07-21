import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = { title: "Contact - TechPikly" };

export default function ContactPage() {
  return (
    <div className="container-x py-12">
      <h1 className="text-3xl font-extrabold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <MapPin className="text-brand mt-1" size={20} />
            <p className="text-sm text-muted">Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-brand" size={20} />
            <p className="text-sm text-muted">+880 000-000000</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-brand" size={20} />
            <p className="text-sm text-muted">support@techpikly.com</p>
          </div>
        </div>
        <form className="space-y-4">
          <input className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-brand" placeholder="Your Name" />
          <input className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-brand" placeholder="Your Email" />
          <textarea className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm outline-none focus:border-brand" rows={5} placeholder="Message" />
          <button type="button" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}
