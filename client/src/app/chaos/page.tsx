"use client";

import supabase from "@/lib/supabase";

export default function ChaosPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const content = (e.target as any).chaos.value;
    await supabase.from("items").insert({ content });
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-3xl font-bold">Dump Your Chaos Here</h1>
      <textarea
        name="chaos"
        className="w-full h-40 border rounded"
        placeholder="Type, paste, whatever..."
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
        Add to Chaos
      </button>
    </form>
  );
}
