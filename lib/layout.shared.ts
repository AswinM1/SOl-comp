import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Sol Components",
      url: "/",
    },

    links: [
      {
        text: "Home",
        url: "/",
      },
       {
        text: "Star on Github",
        url: "https://github.com/AswinM1/SOl-comp",
      },
    ]
    

   
  };
}