'use client';

import { useChaos } from '@/context/ChaosContext';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import supabase from '@/lib/supabase';

function DraggableItem({
  id,
  content,
  index,
}: {
  id: string;
  content: string;
  index: number;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const { updateItems, items } = useChaos();

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : {};

  const handleDelete = async () => {
    const { error } = await supabase.from('items').delete().eq('id', id);
    if (error) {
      console.error('Error deleting item:', error);
      return;
    }
    const newItems = items.filter((item) => item.id !== id);
    updateItems(newItems);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-4 mb-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 cursor-move hover:bg-gray-700 transition-colors flex justify-between items-center"
    >
      <span {...listeners} className="flex-1">
        {content}
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-1 h-auto w-auto text-gray-400 hover:text-purple-400">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 border-gray-700 text-gray-200">
          <DropdownMenuItem
            onClick={handleDelete}
            className="hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function DroppableArea({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg"
    >
      {children}
    </div>
  );
}

export default function OrganizePage() {
  const { items, updateItems } = useChaos();

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, movedItem);

    updateItems(newItems);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
        Organize Your Chaos
      </h1>
      <DndContext onDragEnd={handleDragEnd}>
        <DroppableArea id="droppable">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center">
              No chaos to organize yet. Add some!
            </p>
          ) : (
            items.map((item, index) => (
              <DraggableItem
                key={item.id}
                id={item.id}
                content={item.content}
                index={index}
              />
            ))
          )}
        </DroppableArea>
      </DndContext>
    </div>
  );
}