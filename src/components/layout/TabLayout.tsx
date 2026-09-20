"use client";

import { useSyncExternalStore } from "react";
import About from "@/components/sections/About";
import Engagements from "@/components/sections/Engagements";
import Works from "@/components/sections/Works";

const tabs = [
  { label: "自己紹介", content: <About /> },
  { label: "参画案件", content: <Engagements /> },
  { label: "ポートフォリオ", content: <Works /> },
] as const;

type TabLabel = (typeof tabs)[number]["label"];

const DEFAULT_TAB: TabLabel = "自己紹介";
const ACTIVE_TAB_STORAGE_KEY = "activeTab";
const listeners = new Set<() => void>();

function isTabLabel(value: string | null): value is TabLabel {
  return tabs.some((t) => t.label === value);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): TabLabel {
  try {
    const saved = window.sessionStorage.getItem(ACTIVE_TAB_STORAGE_KEY);
    return isTabLabel(saved) ? saved : DEFAULT_TAB;
  } catch {
    return DEFAULT_TAB;
  }
}

function getServerSnapshot(): TabLabel {
  return DEFAULT_TAB;
}

function selectTab(label: TabLabel) {
  try {
    window.sessionStorage.setItem(ACTIVE_TAB_STORAGE_KEY, label);
  } catch {
    // sessionStorage may be unavailable (e.g. private browsing); ignore.
  }
  listeners.forEach((listener) => listener());
}

export default function TabLayout() {
  const active = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const current = tabs.find((t) => t.label === active);

  return (
    <div>
      <nav className="sticky top-0 z-10 border-b border-orange-200 bg-[#fff8f3] px-6">
        <div className="mx-auto flex max-w-5xl gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => selectTab(tab.label)}
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
