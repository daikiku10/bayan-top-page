import type { ArchitectureLayer } from "@/types";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ArchitectureDiagram({
  layers,
}: {
  layers: ArchitectureLayer[];
}) {
  return (
    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-stretch sm:gap-3">
      {layers.map((layer, index) => (
        <div key={layer.title} className="contents">
          <div className="flex-1 rounded-xl border border-orange-200 bg-orange-50/60 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
              {layer.title}
            </p>
            <ul className="flex flex-col gap-1">
              {layer.items.map((item) => (
                <li key={item} className="text-sm text-stone-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {index < layers.length - 1 && (
            <div className="flex items-center justify-center text-stone-300">
              <ArrowIcon className="rotate-90 sm:rotate-0" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
