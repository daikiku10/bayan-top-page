import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-white px-6">
      <div className="mx-auto max-w-4xl w-full py-20 text-center sm:text-left">
        <p className="mb-3 text-sm font-medium tracking-widest text-sky-500 uppercase">
          {profile.tagline}
        </p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
          {profile.nameEn}
          <span className="block text-3xl font-medium text-stone-500 sm:text-4xl mt-2">
            {profile.name}
          </span>
        </h1>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-stone-600">
          {profile.bio}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#works"
            className="inline-flex h-12 items-center justify-center rounded-full bg-sky-500 px-8 text-sm font-medium text-white transition-colors duration-200 hover:bg-sky-600"
          >
            Works を見る
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-stone-200 px-8 text-sm font-medium text-stone-700 transition-colors duration-200 hover:bg-stone-50"
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
}
