"use client";

import { useChaos } from "@/context/ChaosContext";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

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
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : {};
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-4 mb-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 cursor-move hover:bg-gray-700 transition-colors"
    >
      {content}
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
