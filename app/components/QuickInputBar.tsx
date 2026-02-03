"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useDraftStore } from "@/store/useDraftStore";

const wallets = ["Ví vận hành", "Ví marketing", "Tài khoản ngân hàng", "Shopee Pay"]; 

export function QuickInputBar() {
  const [value, setValue] = useState("");
  const [wallet, setWallet] = useState(wallets[0]);
  const setDraft = useDraftStore((state) => state.setDraft);

  const handleParse = () => {
    if (!value.trim()) return;
    setDraft({
      description: value,
      amount: 350000,
      type: "OUT",
      channel: "MB Bank",
      category: "Vận hành",
      project: "Brand A",
      respWallet: wallet,
      missingFields: ["receipt"]
    });
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Nhập nhanh 1 dòng..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Select value={wallet} onChange={(event) => setWallet(event.target.value)}>
          {wallets.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>
      <Button className="w-full" onClick={handleParse}>
        AI phân tích giao dịch
      </Button>
    </div>
  );
}
