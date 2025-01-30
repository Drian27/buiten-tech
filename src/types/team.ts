type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Team = {
  id: number;
  title: string;
  paragraph: string;
  linkedin: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
