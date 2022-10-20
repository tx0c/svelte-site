## Writing a blog entry

Add a new markdown file into `routes/blog` will render as a new blog entry:

It always starts with a meta header, this will render as page meta header, shown as thumbnail information when shared on social media:

```md
---
title: "Matters Lab Selected to Pitch at FilVC Demo Day with 25 other Promising Web3 Startups"
date: "Sep 8, 2022"
author: Matters Lab
imgCover: >-
  https://host/path/to/cover-image.jpg ...
summary: >-
  FilVC is an invite-only Demo Day hosted by Fil-Singapore...
categories:
  - Web3
keywords:
  - social graph
  - Matters-Lab
  - FilVC
---

<the-original-markdown-content...>
```

after this meta header, add an empty new line, then the original markdown content;
and might need to change alt-text/fig-caption as follows:

```md
![alt text](https://host/path/to/img)

<figcaption>the image caption comes here...</figcaption>
```

Optionally, add this footer, here the `---` will render as horizontal line as separator:

```md
---

_Follow us on [Medium](https://matterslab.medium.com/) and [@MattersW3b](https://twitter.com/MattersW3b) and [@TheSpace2022](https://twitter.com/TheSpace2022) on Twitter for the latest news and insights on NFT and web3, or sign up for our email newsletter on [our website](https://matters-lab.io/)._
```

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
