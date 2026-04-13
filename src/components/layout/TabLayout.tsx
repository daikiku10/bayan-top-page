"use client";

import { useState } from "react";
import About from "@/components/sections/About";
import Engagements from "@/components/sections/Engagements";
import Works from "@/components/sections/Works";

const tabs = [
  { label: "自己紹介", content: <About /> },
  { label: "参画案件", content: <Engagements /> },
  { label: "ポートフォリオ", content: <Works /> },
] as const;

type TabLabel = (typeof tabs)[number]["label"];

export default function TabLayout() {
  const [active, setActive] = useState<TabLabel>("自己紹介");

  const current = tabs.find((t) => t.label === active);

  return (
    <div>
      <nav className="sticky top-0 z-10 border-b border-orange-200 bg-[#fff8f3] px-6">
        <div className="mx-auto flex max-w-5xl gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActive(tab.label)}
              className={`py-4 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
                active === tab.label
                  ? "border-stone-900 text-stone-900"
                  : "border-transparent text-stone-400 hover:text-stone-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      <div>{current?.content}</div>
    </div>
  );
}
