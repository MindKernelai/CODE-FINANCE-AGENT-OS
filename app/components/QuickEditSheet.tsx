"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const schema = z.object({
  memo: z.string().min(1, "Nhập mô tả"),
  amount: z.coerce.number().positive("Số tiền phải > 0"),
  category: z.string().min(1, "Nhập danh mục")
});

type FormValues = z.infer<typeof schema>;

export function QuickEditSheet() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      memo: "Chi quảng cáo",
      amount: 2000000,
      category: "Marketing"
    }
  });

  const onSubmit = (values: FormValues) => {
    console.log("draft update", values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="flex-1">
          ✏️ Sửa nhanh
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sửa nhanh giao dịch</DialogTitle>
        </DialogHeader>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <Input placeholder="Mô tả" {...form.register("memo")} />
            {form.formState.errors.memo && (
              <p className="mt-1 text-xs text-red-500">
                {form.formState.errors.memo.message}
              </p>
            )}
          </div>
          <div>
            <Input type="number" placeholder="Số tiền" {...form.register("amount")} />
            {form.formState.errors.amount && (
              <p className="mt-1 text-xs text-red-500">
                {form.formState.errors.amount.message}
              </p>
            )}
          </div>
          <div>
            <Input placeholder="Danh mục" {...form.register("category")} />
            {form.formState.errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {form.formState.errors.category.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Lưu nháp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
