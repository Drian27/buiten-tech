import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
  title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 7,
    title: "Service",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Mobile Devolopment",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Web Devolopment",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Team",
    path: "/team",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
