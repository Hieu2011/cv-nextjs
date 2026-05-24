export type MenuItem = {
  title: string;
  href?: string;
  children?: MenuItem[];
};

export const menuConfig: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    children: [
      { title: "Electronics", href: "/products/electronics" },
      { title: "Clothing", href: "/products/clothing" },
      {
        title: "Accessories",
        children: [
          { title: "Bags", href: "/products/accessories/bags" },
          { title: "Watches", href: "/products/accessories/watches" },
          { title: "Jewelry", href: "/products/accessories/jewelry" },
        ],
      },
    ],
  },
  {
    title: "Services",
    children: [
      { title: "Consulting", href: "/services/consulting" },
      { title: "Development", href: "/services/development" },
      { title: "Support", href: "/services/support" },
    ],
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];
