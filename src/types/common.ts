export interface Action<T = any> {
  type: string;
  payload?: T;
}

export interface NavLink {
  title: string;
  path: string;
}

export type NavLinks = Array<NavLink>;

export interface SkillCard {
  title: string;
  description: string;
  icon: any;
}
export type SkillCards = Array<SkillCard>;
