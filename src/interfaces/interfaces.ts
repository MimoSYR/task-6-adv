export interface HeaderProps {
  logo: string;
  links: Array<string>;
  theme: string;
  toggleTheme: () => void;
}

export interface PostSection {
  id: number;
  title: string;
  image: string;
  paragraph: string;
}

export interface Post {
  id: number;
  title: string;
  author: string;
  image: string;
  paragraph: string;
  categories: string[];
  sections: Array<PostSection>;
}

// store
export interface PostsState {
  allPosts: Post[];
  pagination: {
    currentPage: number;
    postsPerPage: number;
  }
  recentPostsIds: number[];
}

export interface PostProps {
  id: number;
  image: string;
  author: string;
  title: string;
  paragraph: string;
  categories: string[];
  style?: string;
  pagination? : boolean;
  grid? : boolean;
  imgStyle? : string;
}

export interface PaginationProps {
  totalPosts: number;
  currentPage: number;
  postsPerPage: number;
}