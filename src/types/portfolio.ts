type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Portfolio = {
  id: number;
  title: string;
  paragraph: string;
  name: string;
  company: string;
  category: string;
  type: string;
  tech_stack: string[];
  image: string;
  // author: Author;
  // tags: string[];
  publishDate: string;
};
