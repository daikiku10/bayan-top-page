export type Work = {
  id: string;
  title: string;
  description: string;
  url?: string;
  repoUrl?: string;
  thumbnailUrl?: string;
  tags: string[];
};

export type SocialLink = {
  label: string;
  url: string;
  icon: "github" | "twitter" | "zenn" | "linkedin";
};

export type ArchitectureNode = {
  id: string;
  label: string;
  detail?: string;
  /** 0-indexed column (left to right) in the diagram grid. */
  column: number;
  /** 0-indexed row within the column; defaults to 0. */
  row?: number;
};

export type ArchitectureEdge = {
  from: string;
  to: string;
};

export type Architecture = {
  /** Label for the frame surrounding the whole diagram (e.g. hosting environment). */
  container?: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
};

export type TagGroup = {
  label: string;
  items: string[];
};

export type Engagement = {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tags: TagGroup[];
  responsibilities?: TagGroup[];
  challenges?: TagGroup[];
  architecture?: Architecture;
};

export type Profile = {
  name: string;
  nameEn: string;
  tagline: string;
  bio: string;
  skills: string[];
  socialLinks: SocialLink[];
};
