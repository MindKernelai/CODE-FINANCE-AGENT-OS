import { create } from "zustand";

export type DraftTransaction = {
  description: string;
  amount?: number;
  type?: string;
  channel?: string;
  category?: string;
  project?: string;
  respWallet?: string;
  missingFields: string[];
};

type DraftState = {
  draft: DraftTransaction | null;
  setDraft: (draft: DraftTransaction | null) => void;
};

export const useDraftStore = create<DraftState>((set) => ({
  draft: null,
  setDraft: (draft) => set({ draft })
}));
