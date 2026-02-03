import { AgentDock } from "@/app/components/AgentDock";
import { AISuggestChips } from "@/app/components/AISuggestChips";
import { QuickInputBar } from "@/app/components/QuickInputBar";
import { VerifiedChecklist } from "@/app/components/VerifiedChecklist";
import { Worklist } from "@/app/components/Worklist";

export default function WorkPage() {
  return (
    <main className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-6">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Work (🤖 AI)</h1>
        <QuickInputBar />
        <AISuggestChips />
      </section>
      <AgentDock />
      <Worklist />
      <VerifiedChecklist />
    </main>
  );
}
