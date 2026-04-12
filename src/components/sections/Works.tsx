import { ExternalLink } from "lucide-react";
import { works } from "@/data/works";
import type { Work } from "@/types";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={18}
      height={18}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function WorkCard({ work }: { work: Work }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex-1">
        <h3 className="mb-2 text-lg font-semibold text-stone-900">
          {work.title}
        </h3>
        <p className="text-sm leading-7 text-stone-600">{work.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 mb-5">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {work.repoUrl && (
          <a
            href={work.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub リポジトリ"
            className="text-stone-400 transition-colors duration-200 hover:text-stone-700"
          >
            <GitHubIcon />
          </a>
        )}
        {work.url && (
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="サイトを開く"
            className="text-stone-400 transition-colors duration-200 hover:text-sky-500"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section id="works" className="bg-white py-20 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-stone-900">
          Works
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
