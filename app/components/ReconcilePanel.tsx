import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const candidates = [
  {
    id: "ST-101",
    memo: "Chuyển khoản 5,200,000đ",
    date: "2024-07-19",
    confidence: 0.92
  },
  {
    id: "ST-102",
    memo: "Thu COD 1,300,000đ",
    date: "2024-07-18",
    confidence: 0.84
  }
];

export function ReconcilePanel() {
  return (
    <Card>
      <CardHeader>
        <div className="text-lg font-semibold">Khớp tiền với sao kê</div>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full">Khớp tất cả (>= 0.9)</Button>
        {candidates.map((item) => (
          <div key={item.id} className="rounded-2xl border border-border p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{item.memo}</div>
                <div className="text-xs text-muted-foreground">{item.date}</div>
              </div>
              <div className="text-sm font-semibold">{Math.round(item.confidence * 100)}%</div>
            </div>
            <Button variant="secondary" className="mt-3 w-full">
              Xác nhận khớp
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
