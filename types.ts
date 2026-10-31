
export interface Users {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type FilterStatus = "all" | "active" | "archived";