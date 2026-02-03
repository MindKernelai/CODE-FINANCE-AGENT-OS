import { Card, CardContent, CardHeader } from "@/components/ui/card";

const items = [
  "Thiếu chứng từ: Cafe khách hàng 120k",
  "Chưa khớp sao kê: Chuyển khoản 5,200,000đ",
  "Chờ duyệt: Chi quảng cáo 2,000,000đ"
];

export function Worklist() {
  return (
    <Card>
      <CardHeader>
        <div className="text-lg font-semibold">Worklist</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="rounded-xl border border-border p-3">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
