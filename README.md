<p align="center">
  <img src="public/logo.png" alt="Fox Tech Industries" width="120" />
</p>

<h1 align="center">Fox Tech Industries</h1>

<p align="center">
  The company website for <strong>Fox Tech Industries LLC</strong>, an independent software studio that builds tools to put control back in the hands of the people using them.
</p>

---

## About the company

Fox Tech Industries is a small studio, and we keep it small on purpose. Most of our work right now is Discord bots that server owners can rely on, but we aren't tied to Discord and will build wherever the tools are needed.

- **Users come first.** We charge only what it takes to keep the lights on. Every feature is available to every user. Paying gets you higher usage limits, not extra features.
- **Open source.** All product code is published under the Apache 2.0 license. You can read it, fork it or run your own version, including commercially. Keep the license and credit intact, and give your version its own name and branding.
- **Privacy by default.** If a tool doesn't need your data, it doesn't keep it. Sensitive data is encrypted at rest and keys are rotated regularly. Anyone, in any country, can request a full copy of the data we hold about them.
- **Few dependencies.** We write our own code wherever it's practical and add a library only when the problem calls for one, such as encryption.

### Products

| Product | What it does | Links |
| --- | --- | --- |
| **Fox Box Insurance (FBI)** | Backup and recovery bot for Discord servers. It takes automatic daily snapshots of channels, roles and bans, can restore a server from a snapshot with a full preview first, and makes tamper-evident message exports. Message history is encrypted at rest with AES-256, and any user can opt out of archiving. | [notfbi.dev](https://notfbi.dev/) · [Source](https://github.com/MusicMakerOwO/FoxBoxInsurance) |
| **Easy Invite Tracker** | Shows which invite each new member used and who created it, and logs invites as they are created and deleted. You set it up with one command, it has nothing else to configure, and it stores no message data. | [Source](https://github.com/MusicMakerOwO/EasyInviteTracker) |
| **Dossier** *(coming soon)* | Moderation logging bot. A single `/config` panel walks you through setup, events are grouped the way a moderator thinks about them, and log entries name who did what by reading the audit log. | — |

Dossier is built on [**SimplyJS**](https://github.com/MusicMakerOwO/SimplyJS), our founder's TypeScript-first Discord library. It covers the same ground as discord.js with a single runtime dependency and a core small enough to read through. Dossier also serves as its real-world test before the beta release.

## About this repository

This repository holds the source for the marketing site. It's a client-side **React 19 + TypeScript** single-page app built with **Vite 8**, and the blog is written in **MDX**. There is no backend.

### Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | Company, founder and other projects |
| `/mission` | Mission and philosophy |
| `/projects` | Product details and FAQs |
| `/contact` | Support channels |
| `/blogs` | Blog index |
| `/blogs/view-post/:id` | Single blog post |
| `/terms`, `/privacy`, `/refunds-policy` | Legal pages |

## Getting started

You need a recent version of Node.js (one supported by Vite 8) and npm.

```sh
npm install      # install dependencies
npm run dev      # start the dev server
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload. |
| `npm run build` | Type-check with `tsc -b`, then build to `dist/`. A type error fails the build. |
| `npm run preview` | Serve the built `dist/` locally. |
| `npm run lint` | Run ESLint. |

There is no test suite. Before committing, run `npm run build` and `npm run lint`.

## Project structure

```
.
├── public/                  # Static assets (logo, favicon), served from /
├── src/
│   ├── main.tsx             # Entry point: router, routes and shared layout
│   ├── index.css            # Global styles and CSS custom properties
│   ├── components/
│   │   ├── Header/          # Site header (has its own Header.css)
│   │   └── Footer/
│   └── pages/
│       ├── Home.tsx, About.tsx, Mission.tsx, Projects.tsx, Contact.tsx, NotFound.tsx
│       ├── LegalLayout.tsx  # Shared wrapper for Terms, Privacy and Refunds
│       ├── Terms.tsx, Privacy.tsx, Refunds.tsx
│       └── blogs/
│           ├── blogs.tsx    # Blog index
│           ├── view-post.tsx
│           └── content/     # Blog posts (.mdx)
├── vite.config.ts           # Vite, MDX and React Compiler config
└── CLAUDE.md                # Detailed architecture notes
```

## Working on the site

### Adding a page

1. Create the component in `src/pages/`.
2. Register its route in `src/main.tsx` under the `WithLayout` route, so the page gets the header and footer.

There is no `App.tsx`; all routing lives in `main.tsx`. Links with a hash, such as `/about#section`, scroll to the matching element even when they navigate to a different route.

### Writing a blog post

Add a `.mdx` file to `src/pages/blogs/content/`. You don't need to register it anywhere. The filename sets the URL: `my-post.mdx` is served at `/blogs/view-post/my-post`. Posts are listed newest first.

Every post needs this frontmatter:

```yaml
---
title: Post title
date: 2026-09-30
author: Fox Tech Industries
excerpt: One-line summary shown on the blog list.
tags: [announcement, fbi]
---
```

### Styling

- Most pages use inline `style={{...}}` objects that reference the CSS custom properties in `src/index.css`. These cover colours (`--ink`, `--bright`, `--muted`, `--slate`, `--ember`, `--line`, …) and fonts (`--sans` for Inter, `--serif` for DM Serif Display). Use these variables instead of hard-coded values.
- The blog pages have their own palette and fonts (Space Grotesk, Inter and Space Mono).
- Static assets go in `public/` and are referenced by absolute paths, such as `/logo.png`.

### Conventions

- **React Compiler** is enabled, so you usually don't need `useMemo` or `useCallback`.
- TypeScript runs with `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` and `erasableSyntaxOnly`. Import types with `import type`, and don't use `enum` or constructor parameter properties.

See [`CLAUDE.md`](CLAUDE.md) for more detailed architecture notes.

## Contact and support

- **Discord:** [discord.gg/9SR6fnbRuV](https://discord.gg/9SR6fnbRuV)
- **Email:** [support@notfbi.dev](mailto:support@notfbi.dev)
- **GitHub:** [github.com/MusicMakerOwO](https://github.com/MusicMakerOwO)

---

<p align="center">© Fox Tech Industries LLC</p>
