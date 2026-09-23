"use client";

import { useEffect, useRef, useState } from "react";
import type { ArchitectureEdge, ArchitectureGroup, ArchitectureNode } from "@/types";

type Rect = { x: number; y: number; width: number; height: number };

const GROUP_PADDING_X = 14;
const GROUP_PADDING_TOP = 28;
const GROUP_PADDING_BOTTOM = 16;

export default function ArchitectureDiagram({
  nodes,
  edges,
  container,
  groups,
}: {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  container?: string;
  groups?: ArchitectureGroup[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLDivElement>());
  const [rects, setRects] = useState<Record<string, Rect>>({});
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) return;

    const measure = () => {
      const containerRect = containerEl.getBoundingClientRect();
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
        width: containerEl.scrollWidth,
        height: containerEl.scrollHeight,
      });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(containerEl);
    nodeRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [nodes]);

  const columnCount = Math.max(...nodes.map((n) => n.column)) + 1;
  const rowCount = Math.max(...nodes.map((n) => n.row ?? 0)) + 1;
  const nodeById = new Map(nodes.map((n) => [n.id, n]));

  const diagram = (
    <div
      ref={containerRef}
      className={`relative ${groups && groups.length > 0 ? "px-6 pt-10 pb-6" : ""}`}
    >
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

      {groups?.map((group) => {
        const groupRects = group.nodeIds
          .map((id) => rects[id])
          .filter((r): r is Rect => Boolean(r));
        if (groupRects.length === 0) return null;

        const allRects = Object.values(rects);
        const left = Math.min(...groupRects.map((r) => r.x)) - GROUP_PADDING_X;
        const top =
          Math.min(...allRects.map((r) => r.y)) - GROUP_PADDING_TOP;
        const right =
          Math.max(...groupRects.map((r) => r.x + r.width)) + GROUP_PADDING_X;
        const bottom =
          Math.max(...allRects.map((r) => r.y + r.height)) +
          GROUP_PADDING_BOTTOM;

        return (
          <div
            key={group.label}
            className="absolute rounded-2xl border border-dashed border-stone-300"
            style={{
              left,
              top,
              width: right - left,
              height: bottom - top,
            }}
          >
            <span className="absolute -top-3 left-4 rounded-full bg-[var(--background)] px-2.5 py-0.5 text-xs font-medium text-stone-500">
              {group.label}
            </span>
          </div>
        );
      })}

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

  if (!container) return <div className="overflow-x-auto">{diagram}</div>;

  return (
    <div className="relative rounded-2xl border border-dashed border-stone-300 p-6 pt-8">
      <span className="absolute -top-3 left-4 rounded-full bg-[var(--background)] px-2.5 py-0.5 text-xs font-medium text-stone-500">
        {container}
      </span>
      <div className="overflow-x-auto">{diagram}</div>
    </div>
  );
}
