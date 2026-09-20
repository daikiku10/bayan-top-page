"use client";

import { useEffect, useRef, useState } from "react";
import type { ArchitectureEdge, ArchitectureNode } from "@/types";

type Rect = { x: number; y: number; width: number; height: number };

export default function ArchitectureDiagram({
  nodes,
  edges,
}: {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLDivElement>());
  const [rects, setRects] = useState<Record<string, Rect>>({});
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const nextRects: Record<string, Rect> = {};
      nodeRefs.current.forEach((el, id) => {
        const rect = el.getBoundingClientRect();
        nextRects[id] = {
          x: rect.left - containerRect.left,
          y: rect.top - containerRect.top,
          width: rect.width,
          height: rect.height,
        };
      });
      setRects(nextRects);
      setCanvasSize({
        width: container.scrollWidth,
        height: container.scrollHeight,
      });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    nodeRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [nodes]);

  const columnCount = Math.max(...nodes.map((n) => n.column)) + 1;
  const rowCount = Math.max(...nodes.map((n) => n.row ?? 0)) + 1;
  const nodeById = new Map(nodes.map((n) => [n.id, n]));

  return (
    <div ref={containerRef} className="relative">
      <svg
        className="pointer-events-none absolute left-0 top-0"
        width={canvasSize.width}
        height={canvasSize.height}
      >
        <defs>
          <marker
            id="architecture-arrowhead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10z" className="fill-stone-300" />
          </marker>
        </defs>
        {edges.map((edge) => {
          const from = rects[edge.from];
          const to = rects[edge.to];
          if (!from || !to) return null;

          const sameColumn =
            nodeById.get(edge.from)?.column === nodeById.get(edge.to)?.column;

          const start = sameColumn
            ? { x: from.x + from.width / 2, y: from.y + from.height }
            : { x: from.x + from.width, y: from.y + from.height / 2 };
          const end = sameColumn
            ? { x: to.x + to.width / 2, y: to.y }
            : { x: to.x, y: to.y + to.height / 2 };

          const midX = (start.x + end.x) / 2;
          const midY = (start.y + end.y) / 2;
          const path = sameColumn
            ? `M ${start.x} ${start.y} C ${start.x} ${midY}, ${end.x} ${midY}, ${end.x} ${end.y}`
            : `M ${start.x} ${start.y} C ${midX} ${start.y}, ${midX} ${end.y}, ${end.x} ${end.y}`;

          return (
            <path
              key={`${edge.from}-${edge.to}`}
              d={path}
              fill="none"
              className="stroke-stone-300"
              strokeWidth={1.5}
              markerEnd="url(#architecture-arrowhead)"
            />
          );
        })}
      </svg>

      <div
        className="grid gap-x-10 gap-y-6"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, minmax(140px, 1fr))`,
          gridTemplateRows: `repeat(${rowCount}, auto)`,
        }}
      >
        {nodes.map((node) => (
          <div
            key={node.id}
            ref={(el) => {
              if (el) nodeRefs.current.set(node.id, el);
              else nodeRefs.current.delete(node.id);
            }}
            className="relative z-10 self-center rounded-xl border border-orange-200 bg-orange-50/60 p-4"
            style={{
              gridColumn: node.column + 1,
              gridRow: (node.row ?? 0) + 1,
            }}
          >
            <p className="text-sm font-semibold text-stone-900">
              {node.label}
            </p>
            {node.detail && (
              <p className="mt-1 text-xs text-stone-500">{node.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
