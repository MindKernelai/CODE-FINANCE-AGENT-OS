import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "TXN-001",
    memo: "Chi quảng cáo",
    amount: "-2,000,000đ",
    status: "DIRTY",
    approval: "SUBMITTED",
    reconcile: "UNMATCHED"
  },
  {
    id: "TXN-002",
    memo: "Thu bán hàng",
    amount: "+7,500,000đ",
    status: "CLEAN",
    approval: "APPROVED",
    reconcile: "MATCHED"
  }
];

export function TransactionList() {
  return (
    <Card>
      <CardHeader>
        <div className="text-lg font-semibold">Danh sách giao dịch</div>
      </CardHeader>
      <CardContent className="space-y-3">
        {transactions.map((txn) => (
          <div key={txn.id} className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div className="font-medium">{txn.memo}</div>
              <div className="text-sm font-semibold">{txn.amount}</div>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge>{txn.status}</Badge>
              <Badge>{txn.approval}</Badge>
              <Badge>{txn.reconcile}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
