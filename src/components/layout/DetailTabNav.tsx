"use client";

import { useRouter } from "next/navigation";
import TabNav, { selectTab, type TabLabel } from "./TabNav";

/** Tab header for sub pages: picking a tab returns to the top page on that tab. */
export default function DetailTabNav({ active }: { active: TabLabel }) {
  const router = useRouter();

  return (
    <TabNav
      active={active}
      onSelect={(label) => {
        selectTab(label);
        router.push("/");
      }}
    />
  );
}
