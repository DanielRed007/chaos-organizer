"use client";

import { useState } from "react";
import { useChaos } from "@/context/ChaosContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ChaosDialog from "@/components/shared/chaos-dialog";

export default function ChaosPage() {
  const { addItem } = useChaos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [latestChaos, setLatestChaos] = useState(""); // Track the latest added item

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const content = (e.target as any).chaos.value;
    if (content.trim()) {
      await addItem(content);
      setLatestChaos(content); // Store the added chaos for the modal
      (e.target as any).chaos.value = "";
      setIsModalOpen(true);
      // setTimeout(() => setIsModalOpen(false), 2500); // Slightly longer for reading
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
        Dump Your Chaos
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-4"
      >
        <textarea
          name="chaos"
          className="w-full h-64 bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-y"
          placeholder="Throw your thoughts, links, whatever here..."
        />
        <Button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 self-end text-lg font-semibold"
        >
          Add to Chaos
        </Button>
      </form>

      <ChaosDialog
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        latestChaos={latestChaos}
      />
    </div>
  );
}
