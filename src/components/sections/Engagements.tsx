import { engagements } from "@/data/engagements";
import type { Engagement } from "@/types";

function EngagementCard({ engagement }: { engagement: Engagement }) {
  return (
    <div className="flex flex-col rounded-2xl border border-orange-200 bg-white p-6">
      <h3 className="mb-3 text-lg font-semibold text-stone-900">
        {engagement.title}
      </h3>
      <div className="mb-4 flex flex-col gap-1">
        <p className="text-sm text-stone-500">{engagement.period}</p>
        <p className="text-sm text-stone-500">{engagement.role}</p>
      </div>
      <p className="flex-1 text-sm leading-7 text-stone-600">
        {engagement.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {engagement.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Engagements() {
  return (
    <section id="engagements" className="py-20 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-stone-900">
          参画案件
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((engagement) => (
            <EngagementCard key={engagement.id} engagement={engagement} />
          ))}
        </div>
      </div>
    </section>
  );
}
