import { blog } from "@/types/blog";

const blogData: blog[] = [
  {
    id: 1,
    title: "haikal",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/ibukota.png",
    author: {
      name: "Ibu Kota Nusantara (IKN)",
      image: "/images/blog/.png",
      designation: "Ibu Kota Nusantara (IKN)",
    },
    tags: ["Backend"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Photobooth System",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/pipper.png",
    author: {
      name: "Pipper Photobooth",
      image: "/images/blog/author-02.png",
      designation: "PhotoBooth",
    },
    tags: ["Frontend", "UI/UX"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Banhub Website",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/banhub.png",
    author: {
      name: "Banhub Kalimantan",
      image: "/images/blog/author-03.png",
      designation: "Banhub Kalimantan",
    },
    tags: ["E-Commerce"],
    publishDate: "2023",
  },
];
export default blogData;
