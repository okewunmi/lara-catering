import Link from "next/link";
import { LogoutButton } from "@/components/admin/logout-button";

const links = [
  { href: "/admin/dashboard", label: "Overview" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/services", label: "Services" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-6xl gap-8 px-6 py-10">
      <aside className="hidden w-48 shrink-0 md:block">
        <p className="font-display text-lg text-plum">Admin</p>
        <nav className="mt-6 flex flex-col gap-3 text-sm text-plum/70">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-plum">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <LogoutButton />
        </div>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
