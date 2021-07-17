export interface Action<T = any> {
  type: string;
  payload?: T;
}

export interface NavLink {
  title: string;
  path: string;
}

export type NavLinks = Array<NavLink>;

export interface ISkillCard {
  title: string;
  description: string;
  icon: any;
}

type ITheme = 'light' | 'dark';
export interface IProjectCard {
  title: string;
  url: string;
  img: string;
  theme?: ITheme;
}

export type ISkillCards = Array<ISkillCard>;
export type IProjectCards = Array<IProjectCard>;
