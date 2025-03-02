"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import supabase from "@/lib/supabase";

interface ChaosItem {
  id: string;
  content: string;
}

interface ChaosContextType {
  items: ChaosItem[];
  addItem: (content: string) => Promise<void>;
  updateItems: (newItems: ChaosItem[]) => void; // New function for updates
}

const ChaosContext = createContext<ChaosContextType | undefined>(undefined);

export function ChaosProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ChaosItem[]>([]);

  useEffect(() => {
    async function fetchItems() {
      const { data } = await supabase.from("items").select("id, content");
      if (data) {
        setItems(
          data.map((item: any) => ({
            id: item.id.toString(),
            content: item.content,
          }))
        );
      }
    }
    fetchItems();
  }, []);

  const addItem = async (content: string) => {
    const { data, error } = await supabase
      .from("items")
      .insert({ content })
      .select("id, content")
      .single();

    if (error) {
      console.error("Error adding item:", error);
      return;
    }

    if (data) {
      setItems((prev) => [
        ...prev,
        { id: data.id.toString(), content: data.content },
      ]);
    }
  };

  const updateItems = (newItems: ChaosItem[]) => {
    setItems(newItems); // Update the state with the new order
    // TODO: Optionally persist to Supabase here
  };

  return (
    <ChaosContext.Provider value={{ items, addItem, updateItems }}>
      {children}
    </ChaosContext.Provider>
  );
}

export function useChaos() {
  const context = useContext(ChaosContext);
  if (!context) {
    throw new Error("useChaos must be used within a ChaosProvider");
  }
  return context;
}
