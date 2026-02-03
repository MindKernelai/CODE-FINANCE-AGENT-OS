import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const items = [
  { label: "Khớp tiền với sao kê 100%", done: false },
  { label: "Ảnh hoá đơn / ảnh chuyển khoản 100%", done: false },
  { label: "Duyệt 100% (không còn SUBMITTED)", done: true },
  { label: "Khóa tháng (không sửa được)", done: false }
];

export function VerifiedChecklist() {
  return (
    <Card>
      <CardHeader>
        <div className="text-lg font-semibold">Verified checklist</div>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={item.label} className="flex items-center justify-between">
              <span>{item.label}</span>
              <span>{item.done ? "✅" : "⬜️"}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full">Khóa tháng</Button>
      </CardContent>
    </Card>
  );
}
