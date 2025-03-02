"use client";

import { useChaos } from "@/context/ChaosContext";

export default function ChaosPage() {
  const { addItem } = useChaos();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const content = (e.target as any).chaos.value;
    if (content.trim()) {
      await addItem(content);
      (e.target as any).chaos.value = "";
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
        <button
          type="submit"
          className="px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-lg text-lg font-semibold transition-colors self-end"
        >
          Add to Chaos
        </button>
      </form>
    </div>
  );
}
