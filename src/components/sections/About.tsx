import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="bg-stone-50 py-20 px-6 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-stone-900">
          About
        </h2>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-base leading-8 text-stone-600">{profile.bio}</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-stone-400">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white border border-stone-200 px-3 py-1 text-sm font-medium text-stone-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
