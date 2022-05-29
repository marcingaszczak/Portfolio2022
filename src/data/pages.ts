export enum Pages {
    Hello = 'Hello',
    Projects = 'Projects',
    // Contact = 'contact'
}

export type PageStructure = {
  label: string;
  url: string;
  title: string;
}

export const PageCopy: Record<string, PageStructure> = {
  [Pages.Hello]: {
    label: 'Hello',
    url: '/',
    title: 'Portfolio | Hello'
  },
  [Pages.Projects]: {
    label: 'Projects',
    url: '/projects',
    title: 'Portfolio | Projects'
  }
}