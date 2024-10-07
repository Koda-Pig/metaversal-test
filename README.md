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

Users are fetched from [https://dummyjson.com/docs/users](https://dummyjson.com/docs/users).

Posts are fetched from [https://dummyjson.com/docs/posts](https://dummyjson.com/docs/posts).

## Deployment

This project is deployed on Netlify at [https://deluxe-douhua-435825.netlify.app/](https://deluxe-douhua-435825.netlify.app/).

## Caching

### HTTPS request caching

This project uses HTTP caching to cache the response from the server for 1 hour. The cache-control header is set to:

```
"public, max-age=3600, stale-while-revalidate=60 stale-if-error=60"
```

### Caching data in storage

Chose in-memory caching using `lru-cache` to cache data in storage as it fits this project's use case and requirements. The cached data benefits all users, it deals with shared, short-lived data, and the data is not sensitive. Doesn't matter that the cache doesn't persist across function/server restarts.

## Issues found in mockup

There are several issues in the [Figma mockup](https://www.figma.com/design/yKiOqBqcJVCuG42i6tmrkM/Front-End-Dev-Test?node-id=1133-16284&t=uJGmBShEkUrtbBrm-1). I have followed the mockup as closely as possible, but would like to point out the following:

1. Incorrect sequential order of headings. h3 is used first, followed by an h2. This is not semantically correct.
2. Suggested posts title text color is black. It shoud be either text primary or text secondary color as is used in the rest of the design.
3. I'm using Roboto Flex as the font defined in the mockup, but it looks different in my project. I think this may be due to the 'wdth' font variation setting in Figma, which I've tried to apply but don't seem to be working.

## Time spent:

03/10/2024 +- 3 hours
04/10/2024 +- 5 hours
05/10/2024 +- 4 hours
06/10/2024 +- 5 hours

## Comments and whining

- Why can't you use `auto-fill` for `grid-template-columns` in Tailwind? Waaaaaah!

```
grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
```

- I like the space-y utility in Tailwind. Does seem like a lot more code that just using `display:grid;gap:1rem` though.

```
.space-y-12 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(3rem* calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(3rem* var(--tw-space-y-reverse));
}
```

Nevermind I changed my mind about this. It's inconsistent. React or nextjs adds a <template> tag to the DOM and it messes up the spacing. I'm going back to using `grid gap-12`.

- Wild that this project uses (at least?) 3 different kinds of caching. SSG from Next.js, HTTP caching, and in-memory caching. I wonder at what point of adding different caching methods with all their cache validation and cache invalidation strategies, it becomes too much. Surely at some point just serving the data from the server is faster than all the cache validation and cache invalidation strategies. I guess it depends on the use case and what you're trying to achieve.

## Other improvements I'd like to do

- Add a read more to text-ellipses the post content; use line-clamp-3 class. There is actually styles for this in the components section.
- Add toggle for dark mode

## To do:

- Implement skeleton loaders - handle loading all before returning actual data
- Implement [react query](https://tanstack.com/query/latest/docs/framework/react/overview#enough-talk-show-me-some-code-already) instead of fetching data in useEffect in the RecentPosts component
- refactor RecentPosts - more useEffect than necessary.
- Check comopnents in figma to finalise designs
