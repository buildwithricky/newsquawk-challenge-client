import { baseUrl } from "./utils";

export type Post = {
  timestamp: string;
  id: string;
  content: string;
  url:string
};

export const fetchLatestPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${baseUrl}/truths`);

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }

  const data: Post[] = await res.json();
  return data;
};