import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function StatementImport() {
  return (
    <Card>
      <CardHeader>
        <div className="text-lg font-semibold">Import sao kê</div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm text-muted-foreground">
          Tải CSV sao kê ngân hàng để AI hỗ trợ khớp.
        </div>
        <input type="file" className="w-full text-sm" />
        <Button className="w-full">Tải lên</Button>
      </CardContent>
    </Card>
  );
}
