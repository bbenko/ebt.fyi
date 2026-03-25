# ebt.fyi

This is the source code for [ebt.fyi](https://ebt.fyi), the website for the East Bay Tech meetup.

The site is built with Eleventy and deployed to GitHub Pages. Pull requests and issues are welcome if you want to help improve the site, fix content, or add future meetup pages.

## Run locally

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Eleventy serves the site locally during development and writes the production output to `_site/`.

## Contributing

If you want to help with a bug, content change, or cleanup:

1. Fork the repo or create a branch.
2. Run `npm install`.
3. Start the site with `npm run dev`.
4. Make your changes.
5. Run `npm run build` before opening a PR.

Issues and PRs are welcome.

## Adding a meetup

Add a new Markdown file in `src/meetups/`, for example `src/meetups/meetup-x.md`.

Each meetup file needs front matter plus Markdown body content:

```md
---
title: EBT x: title
meetupId: x
meetupDate: 2026-mm-dd
meetupTime: 4:00 PM
location: Lafayette, California
summary: One-sentence summary for the homepage.
---
## Discussion links

- [Example link](https://example.com)

  Short note about why it matters.
```

`meetupTime`, `agendaIntro`, `highlights`, and `sessionPlan` are optional fields used by the homepage and meetup detail page.

You can also add an optional `luma` object if a meetup should render a register button on its detail page:

```md
luma:
  eventId: evt-xxxxxxxxxxxxxxx
  eventUrl: https://luma.com/event/evt-xxxxxxxxxxxxxxx
```
