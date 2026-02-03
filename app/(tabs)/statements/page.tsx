import { ReconcilePanel } from "@/app/components/ReconcilePanel";
import { StatementImport } from "@/app/components/StatementImport";

export default function StatementsPage() {
  return (
    <main className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-6">
      <h1 className="text-2xl font-semibold">Sao kê (Finance)</h1>
      <StatementImport />
      <ReconcilePanel />
    </main>
  );
}
