import Link from "next/link";
import { Home as HomeIcon, ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container-x py-3 flex items-center gap-1.5 text-sm text-muted flex-wrap">
        <Link href="/" className="text-ink hover:text-brand">
          <HomeIcon size={15} />
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight size={13} className="text-gray-300" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}