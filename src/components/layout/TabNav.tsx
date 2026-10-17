"use client";

import { useSyncExternalStore } from "react";

export const TAB_LABELS = ["自己紹介", "参画案件", "ポートフォリオ"] as const;

export type TabLabel = (typeof TAB_LABELS)[number];

const DEFAULT_TAB: TabLabel = "自己紹介";
const ACTIVE_TAB_STORAGE_KEY = "activeTab";
const listeners = new Set<() => void>();

function isTabLabel(value: string | null): value is TabLabel {
  return TAB_LABELS.some((label) => label === value);
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

export function selectTab(label: TabLabel) {
  try {
    window.sessionStorage.setItem(ACTIVE_TAB_STORAGE_KEY, label);
  } catch {
    // sessionStorage may be unavailable (e.g. private browsing); ignore.
  }
  listeners.forEach((listener) => listener());
}

export function useActiveTab(): TabLabel {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function TabNav({
  active,
  onSelect,
}: {
  active: TabLabel;
  onSelect: (label: TabLabel) => void;
}) {
  return (
    <nav className="sticky top-0 z-10 border-b border-orange-200 bg-[#fff8f3] px-6">
      <div className="mx-auto flex max-w-5xl gap-6">
        {TAB_LABELS.map((label) => (
          <button
            key={label}
            onClick={() => onSelect(label)}
            className={`py-4 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
              active === label
                ? "border-stone-900 text-stone-900"
                : "border-transparent text-stone-400 hover:text-stone-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
