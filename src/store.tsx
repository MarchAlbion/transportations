import { create } from "zustand";
import { Item } from "./types/types";
import { addItem, deleteItem, getAllItems, updateItem } from "./api/api";

type Store = {
  items: Item[];
  fetchItems: () => void;
  addItem: (item: Item) => void;
  updateItem: (item: Item) => void;
  deleteItem: (id: string) => void;
  itemToEdit: string | null;
  setItemToEdit: (itemToEdit: string | null) => void;
};

export const useItemsStore = create<Store>((set) => ({
  items: [],
  fetchItems: async () => {
    const items = await getAllItems();
    set({ items });
  },
  addItem: async (item) => {
    const newItem = await addItem(item);
    set((state) => ({
      items: [...state.items, newItem],
    }));
  },
  updateItem: async (item) => {
    const updatedItem = await updateItem(item);
    set((state) => ({
      items: state.items.map((i) => (i.id === item.id ? updatedItem : i)),
    }));
  },
  deleteItem: async (id) => {
    await deleteItem(id);
    console.log("Deleting item with ID:", id);
    set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
  },
  itemToEdit: null,
  setItemToEdit: (itemToEdit) => set({ itemToEdit }),
}));
