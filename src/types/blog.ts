type Author = {
  name: string;
  image: string;
  designation: string;
};

export type blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
