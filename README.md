# Metaversal test project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Data source

This project uses dummy data from [dummyjson.com](https://dummyjson.com/).

## Deployment

This project is deployed on Netlify at [https://deluxe-douhua-435825.netlify.app/](https://deluxe-douhua-435825.netlify.app/).

## Issues found in mockup

There are several issues in the [Figma mockup](https://www.figma.com/design/yKiOqBqcJVCuG42i6tmrkM/Front-End-Dev-Test?node-id=1133-16284&t=uJGmBShEkUrtbBrm-1). I have followed the mockup as closely as possible, but would like to point out the following:

1. Incorrect sequential order of headings. h3 is used first, followed by an h2. This is not semantically correct.
2. Suggested posts title text color is black. It shoud be either text primary or text secondary color as is used in the rest of the design.
3. I'm using Roboto Flex as the font defined in the mockup, but it looks different in my project. I think this may be due to the 'wdth' font variation setting in Figma, which I've tried to apply but don't seem to be working.

## Time spent:

03/10/2024 +- 3 hours
