"use client";

import About from "@/components/sections/About";
import Engagements from "@/components/sections/Engagements";
import Works from "@/components/sections/Works";
import TabNav, { selectTab, useActiveTab, type TabLabel } from "./TabNav";

const contents: Record<TabLabel, React.ReactNode> = {
  自己紹介: <About />,
  参画案件: <Engagements />,
  ポートフォリオ: <Works />,
};

export default function TabLayout() {
  const active = useActiveTab();

  return (
    <div>
      <TabNav active={active} onSelect={selectTab} />
      <div>{contents[active]}</div>
    </div>
  );
}
