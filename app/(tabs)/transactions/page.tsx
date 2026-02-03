import { TransactionList } from "@/app/components/TransactionList";
import { Select } from "@/components/ui/select";

export default function TransactionsPage() {
  return (
    <main className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-6">
      <h1 className="text-2xl font-semibold">Giao dịch</h1>
      <div className="grid gap-3">
        <Select>
          <option>Tháng này</option>
          <option>Tháng trước</option>
        </Select>
        <Select>
          <option>Trạng thái dữ liệu</option>
          <option>DIRTY</option>
          <option>OK</option>
          <option>CLEAN</option>
        </Select>
        <Select>
          <option>Trạng thái duyệt</option>
          <option>NONE</option>
          <option>SUBMITTED</option>
          <option>APPROVED</option>
          <option>REJECTED</option>
        </Select>
        <Select>
          <option>Trạng thái đối soát</option>
          <option>UNMATCHED</option>
          <option>MATCHED</option>
          <option>PARTIAL</option>
        </Select>
      </div>
      <TransactionList />
    </main>
  );
}
