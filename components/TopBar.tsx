import { MapPin, User } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-brand-dark text-white/90 text-sm">
      <div className="container-x flex items-center justify-between py-2">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} />
          <span>Deliver to Bangladesh</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand">
            <span>$ USD</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand">
            <User size={14} />
            <span>
              Hello, <a href="/account/login" className="hover:text-brand">Sign in</a> /{" "}
              <a href="/account/register" className="hover:text-brand">Register</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
