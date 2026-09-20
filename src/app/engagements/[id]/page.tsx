import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { engagements } from "@/data/engagements";
import ArchitectureDiagram from "@/components/sections/ArchitectureDiagram";

export function generateStaticParams() {
  return engagements.map((engagement) => ({ id: engagement.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const engagement = engagements.find((e) => e.id === id);

  return {
    title: engagement
      ? `${engagement.title} | Daiki Kudo`
      : "案件が見つかりません",
  };
}

export default async function EngagementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const engagement = engagements.find((e) => e.id === id);

  if (!engagement) {
    notFound();
  }

  return (
    <main className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 transition-colors hover:text-stone-900"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            width={16}
            height={16}
            aria-hidden="true"
          >
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          参画案件一覧に戻る
        </Link>

        <h1 className="mb-3 text-3xl font-bold tracking-tight text-stone-900">
          {engagement.title}
        </h1>
        <div className="mb-8 flex flex-col gap-1">
          <p className="text-sm text-stone-500">{engagement.period}</p>
          <p className="text-sm text-stone-500">{engagement.role}</p>
        </div>

        <p className="mb-8 text-sm leading-7 text-stone-600">
          {engagement.description}
        </p>

        <div className="mb-10 flex flex-wrap gap-2">
          {engagement.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {engagement.architecture && (
          <section>
            <h2 className="mb-4 text-lg font-semibold text-stone-900">
              アーキテクチャ構成
            </h2>
            <ArchitectureDiagram
              nodes={engagement.architecture.nodes}
              edges={engagement.architecture.edges}
            />
          </section>
        )}
      </div>
    </main>
  );
}
