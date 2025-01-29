import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "IKN Apps",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Bayu Faturahman",
      image: "/images/blog/author-01.png",
      designation: "Mobile Developer",
    },
    tags: ["Mobile"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "PT Hino Web",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Agil Nurdiasyah",
      image: "/images/blog/author-02.png",
      designation: "Back-end Developer",
    },
    tags: ["Data"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Joins",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Haikal",
      image: "/images/blog/author-03.png",
      designation: "Fullstack Developer",
    },
    tags: ["FE-BE"],
    publishDate: "2025",
  },
];
export default blogData;
