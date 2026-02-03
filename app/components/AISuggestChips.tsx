"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDraftStore } from "@/store/useDraftStore";
import { QuickEditSheet } from "@/app/components/QuickEditSheet";

const typeLabels: Record<string, string> = {
  IN: "Thu",
  OUT: "Chi",
  ADVANCE: "Ứng",
  REFUND: "Hoàn",
  TRANSFER: "Chuyển"
};

export function AISuggestChips() {
  const draft = useDraftStore((state) => state.draft);

  if (!draft) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground">
        AI sẽ gợi ý chip sau khi bạn nhập nhanh một dòng.
      </div>
    );
  }

  return (
    <div className="space-y-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
      <div className="flex flex-wrap gap-2">
        <Badge>{typeLabels[draft.type ?? "OUT"]}</Badge>
        <Badge>{draft.amount?.toLocaleString("vi-VN")}đ</Badge>
        <Badge>{draft.channel}</Badge>
        <Badge>{draft.category}</Badge>
        <Badge>{draft.project}</Badge>
        <Badge>{draft.respWallet}</Badge>
        {draft.missingFields.map((field) => (
          <Badge key={field} className="border-red-200 bg-red-50 text-red-600">
            Thiếu {field}
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Button className="flex-1">✅ Ghi giao dịch</Button>
        <QuickEditSheet />
      </div>
    </div>
  );
}
