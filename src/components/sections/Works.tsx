export default function Works() {
  return (
    <section id="works" className="py-20 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-stone-900">
          ポートフォリオ
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-orange-200 bg-white p-6">
            <div className="mb-3">
              <span className="mb-2 inline-block rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest text-sky-500">
                Coming Soon
              </span>
              <h3 className="text-lg font-semibold text-stone-900">
                猫ちゃん管理アプリ
              </h3>
            </div>
            <p className="text-sm leading-7 text-stone-500">
              現在開発中です。もうしばらくお待ちください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
