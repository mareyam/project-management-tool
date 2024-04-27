import { create } from "zustand";

interface TagProps {
  tag: string;
  tagList: string[];


  setTag: (tag: string) => void;
  setTagList: (tags: string[]) => void;
 
}
export const useTagStore = create<TagProps>((set) => ({
  tag: "",
  tagList: [],
 
  setTag: (tag) => set({ tag }),
  setTagList: (tagList) => set({ tagList }),

}));
