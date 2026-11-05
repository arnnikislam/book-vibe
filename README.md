# Book Vibe

Book Vibe is a React app for browsing a small book catalog, saving books to read
or to a wishlist, and viewing a page-count chart for saved reads.

**Live site:** [book-vibe-arnnik.netlify.app](https://book-vibe-arnnik.netlify.app/)

## Features

- Browse the book catalog and open individual book details.
- Save books to a read list or wishlist, with duplicate and success notifications.
- View saved books and sort them by rating, page count, or publication year.
- See a chart of page counts for books on the read list.
- Keep read-list and wishlist data in the browser's `localStorage`.

Saved lists are local to the current browser and are not synced between devices
or users.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home page and book catalog |
| `/books` | Read list and wishlist, with sorting |
| `/read-pages` | Page-count chart for books marked as read |
| `/bookDetails/:paramBookId` | Details and save actions for a book |

## Tech stack

- React 19 and React Router
- Vite
- Tailwind CSS and daisyUI
- React Icons, React Toastify, React Tabs, and Recharts
- Static catalog data in `public/booksData.json`

## Getting started

Requires Node.js and npm.

```sh
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Available scripts

```sh
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Deployment

The app is deployed on Netlify. The `public/_redirects` file routes requests
back to `index.html` so client-side routes can be served directly.
