import Link from "next/link";
import { Bot, ListChecks, ReceiptText } from "lucide-react";

const tabs = [
  { href: "/work", label: "Work", icon: Bot },
  { href: "/transactions", label: "Giao dịch", icon: ListChecks },
  { href: "/statements", label: "Sao kê", icon: ReceiptText }
];

export default function TabsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 pb-20">{children}</div>
      <nav className="safe-area fixed bottom-0 left-0 right-0 border-t bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-xl justify-around px-4 py-3">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center gap-1 text-xs text-muted-foreground"
            >
              <tab.icon className="h-5 w-5" />
              {tab.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
