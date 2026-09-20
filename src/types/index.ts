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

export type ArchitectureLayer = {
  title: string;
  items: string[];
};

export type Engagement = {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  architecture?: ArchitectureLayer[];
};

export type Profile = {
  name: string;
  nameEn: string;
  tagline: string;
  bio: string;
  skills: string[];
  socialLinks: SocialLink[];
};
