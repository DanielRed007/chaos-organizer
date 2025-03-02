"use client"; // Since it’s a client component with interactivity

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ChaosModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  latestChaos: string;
}

export default function ChaosDialog({
  open,
  onOpenChange,
  latestChaos,
}: ChaosModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 border border-gray-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Chaos Added!
          </DialogTitle>
          <DialogDescription className="text-gray-200 mt-2">
            Your latest mess: <span className="italic">"{latestChaos}"</span> is
            now in the chaos pile. Ready to tame it?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-gray-700 text-gray-200"
          >
            Keep Dumping
          </Button>
          <Button asChild className="bg-purple-700 hover:bg-purple-800">
            <Link href="/organize">Organize Now</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
