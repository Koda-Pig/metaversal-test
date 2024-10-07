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

There are some issues in the [Figma mockup](https://www.figma.com/design/yKiOqBqcJVCuG42i6tmrkM/Front-End-Dev-Test?node-id=1133-16284&t=uJGmBShEkUrtbBrm-1). I have followed the mockup as closely as possible, but would like to point out the following:

1. Incorrect sequential order of headings. h3 is used first, followed by an h2. This is not semantically correct.
2. Suggested posts title text color is black. It shoud be either text primary or text secondary color as is used in the rest of the design.
3. I'm using Roboto Flex as the font defined in the mockup, but it looks different in my project. I think this may be due to the 'wdth' font variation setting in Figma, which I've tried to apply but don't seem to be working.

## Time spent:

03/10/2024 +- 3 hours
04/10/2024 +- 5 hours
05/10/2024 +- 4 hours
06/10/2024 +- 5 hours

## Other improvements I'd like to do

- Add a read more to text-ellipses the post content; use line-clamp-3 class. There is actually styles for this in the components section.
- Add toggle for dark mode

## To do:

- Regarding loading, this requirement:
  ```
  If sections finish loading at different times, generally we want to avoid sections from shifting as they load in. Consider showing the skeletons until all sections finish loading.
  ```
  I've done this to an extent. SuggestedPosts, WhoToFollow, and UserProfile are all server components wrapped in `<Suspense>` boundaries so I await all of them to finish loading before I replace their skeleton counterparts. RecentPosts component on the other hand is a client side component that fetches data on mount. Wrapping it in a `<Suspense>` boundary won't do anything. It needs to be a client side component in order to detect when the user has scrolled to the bottom of the page to fetch more posts. It handles it's own loading states and returns skeleton versions of posts while it is loading.
- Implement [react query](https://tanstack.com/query/latest/docs/framework/react/overview#enough-talk-show-me-some-code-already) instead of fetching data in useEffect in the RecentPosts component
- refactor RecentPosts - more useEffect than necessary.
- Check components in figma to finalise designs
