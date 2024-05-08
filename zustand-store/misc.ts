import { create } from "zustand";
interface MiscProps {
  selectedMenu: string;
  setSelectedMenu: (selectedMenu: string) => void;
}
export const useMiscStore = create<MiscProps>()((set) => ({
  selectedMenu: "",
  setSelectedMenu: (selectedMenu) => set({ selectedMenu }),
}));
