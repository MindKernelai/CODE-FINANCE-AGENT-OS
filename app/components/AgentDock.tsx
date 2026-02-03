import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AgentDock() {
  return (
    <Card>
      <CardHeader>
        <div className="text-sm text-muted-foreground">AI Dock</div>
        <div className="text-lg font-semibold">Đã phát hiện 3 giao dịch thiếu chứng từ.</div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm">AI đang làm gì: Đối chiếu sao kê + kiểm tra chứng từ.</div>
        <div className="flex flex-wrap gap-2">
          <Badge>Khớp tiền với sao kê 82%</Badge>
          <Badge>Chứng từ 60%</Badge>
          <Badge>Duyệt 90%</Badge>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-muted p-3">
          <div>
            <div className="text-xs text-muted-foreground">Work Score</div>
            <div className="text-sm font-semibold">Đối soát 82% • Chứng từ 60% • Duyệt 90%</div>
          </div>
          <Button>➡️ Làm bước tiếp theo</Button>
        </div>
        <Button variant="ghost" className="w-full">
          Vì sao?
        </Button>
      </CardContent>
    </Card>
  );
}
