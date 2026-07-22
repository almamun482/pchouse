"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChevronRight, Home, LogOut, User as UserIcon } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function AccountPage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) router.replace("/account/login");
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="bg-white">
      <div className="border-b border-gray-100">
        <div className="container-x py-3 flex items-center gap-1.5 text-sm">
          <Link href="/" className="text-ink hover:text-brand">
            <Home size={15} />
          </Link>
          <ChevronRight size={13} className="text-gray-300" />
          <span className="text-muted">Account</span>
        </div>
      </div>

      <div className="container-x py-10 flex justify-center">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#050C2E" }}>
              <UserIcon size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-ink">{user.firstName} {user.lastName}</h1>
              <p className="text-sm text-muted">{user.email}</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-md divide-y divide-gray-100 mb-6">
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-muted">Phone</span>
              <span className="font-medium text-ink">{user.phone}</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-muted">Email</span>
              <span className="font-medium text-ink">{user.email}</span>
            </div>
          </div>

          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="w-full flex items-center justify-center gap-2 border-2 rounded-md py-3 text-sm font-bold"
            style={{ borderColor: "#050C2E", color: "#050C2E" }}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}