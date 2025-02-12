---
title: "Building My Portfolio"
excerpt: "See the magic behind this website, what technologies are used and a better alternative."
coverImage: "/assets/blog/building-my-portfolio/cover.jpg"
date: "2025-02-12T20:54:02Z"
author:
  name: Aung Min Khant
  picture: "/assets/author/amk.jpeg"
ogImage:
  url: "/assets/blog/building-my-portfolio/cover.jpg"
---
## The Tech Stack

This website is built with [Next.js](https://nextjs.org/) and the blog posts are written entirely in [markdown](https://en.wikipedia.org/wiki/Markdown) .md files that are stored server-side. The markdown files are then retrieved and converted to HTML using the [remark](https://github.com/remarkjs/remark) library.

Before we start, I just wanna add that Next.js is not the ideal solution for such a fairly simple static blog site. A more efficient solution would be to use something like [Astro](https://astro.build/).

For styling, I'm using [Neobrutalism](https://www.neobrutalism.dev/) which is a library of neobrutalism-styled components based on [shadcn/ui](https://ui.shadcn.com/) with [Tailwind CSS](https://tailwindcss.com/). I think that about covers the technologies used.


![Building my Portfolio Step One](/assets/blog/building-my-portfolio/step-1.png)

![Building my Portfolio Step Two](/assets/blog/building-my-portfolio/step-2.png)

One last thing, dark mode is implemented with [next-themes](https://www.npmjs.com/package/next-themes). We define CSS variables for colors for both normal, and dark mode when data-theme attribute is set to "dark". A Click on the dark mode button will set the data-theme="dark" in the html tag and color changes happen depending on the attribute. Look into [this tutorial](https://ui.shadcn.com/docs/dark-mode/next) for more information.
P.S. This website may look terrible on dark mode. It's very difficult to style a neobrutalism-themed website in dark mode.


Alright, that's it for this post. If I have time in the future, I will replicate this project in Astro. 