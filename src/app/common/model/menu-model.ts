export interface SidenavConfigChild {
    title: string;
    link: string | null;
  }
  
export interface MenuLayoutConfig {
    icon: string;
    title: string;
    link: string | null;
    open: boolean;
    children: SidenavConfigChild[];

}

export type TSidenavState = 'opened' | 'minimised' | 'closed';
