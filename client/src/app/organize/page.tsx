"use client";

import { useChaos } from "@/context/ChaosContext";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

// Draggable Item Component (unchanged)
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
      className="p-2 mb-2 bg-gray-100 rounded cursor-move"
    >
      {content}
    </div>
  );
}

// Droppable Area Component (unchanged)
function DroppableArea({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className="p-4">
      {children}
    </div>
  );
}

// Main Page
export default function OrganizePage() {
  const { items, updateItems } = useChaos(); // Use updateItems from context

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, movedItem);

    updateItems(newItems); // Update context with reordered items
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <h1 className="text-3xl font-bold p-4">Organize Your Chaos</h1>
      <DroppableArea id="droppable">
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            content={item.content}
            index={index}
          />
        ))}
      </DroppableArea>
    </DndContext>
  );
}
