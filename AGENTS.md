# Flexwind Froggy — Agent Guide

## Project purpose

This is a small, static browser game for learning Tailwind CSS Flexbox.

## Current product status and priorities

The Tailwind teaching experience is mostly complete. Treat it as established
product behavior: make focused improvements without reopening the earlier
CSS-to-Tailwind migration unless a change genuinely requires it.

Current work is primarily about:

- small gameplay, UI, accessibility, and reliability improvements;
- technical and on-page SEO;
- retaining learners through a clear, fast, low-friction experience; and
- preparing and maintaining the site for Google AdSense approval.

Protect the game’s learning flow, fast static delivery, and existing visual
identity while making these changes.

## Runtime and architecture

This is a static, browser-executed application. There is no Node server,
framework entry point, or TypeScript compilation step.

The browser loads `index.html`, which loads scripts in this order:

1. `node_modules/jquery/dist/jquery.min.js`
2. `js/levels.js`
3. `js/docs.js`
4. `js/messages.js`
5. `js/game.js`

Execution begins at the bottom of `js/game.js`:

```js
$(document).ready(function() {
  game.start();
});
```

`package.json` is primarily used for dependencies. Its `main` field does not
launch the website. The application depends on browser globals such as
`window`, `document`, and `localStorage`.

## Important files

- `index.html` — page structure, editor, controls, and game board containers.
- `js/game.js` — initialization, event handlers, level rendering, Tailwind
  utility application, answer checking, persistence, translations, and level
  changes.
- `js/levels.js` — level definitions. Each level includes a name, instructions,
  board string, target utilities, and editable-code framing.
- `js/tailwind-utilities.js` — supported Tailwind utility definitions and their
  Flexbox behavior used by the game.
- `js/docs.js` — localized Tailwind Flexbox utility help shown in tooltips.
- `js/messages.js` — localized interface labels and messages.
- `css/style.css` — layout, pond artwork, frogs, lilypads, tooltips, animations,
  and state classes.
- `package.json` — jQuery and Animate.css dependencies; there is currently no
  application build script.

## Core game flow

```text
game.start()
  -> setHandlers()
  -> loadMenu()
  -> loadLevel(levels[game.level])
  -> applyStyles()
  -> compare()
  -> next level or retry
```

`loadLevel()` creates frogs and lilypads from the level’s `board` string.
`applyStyles()` parses the player’s supported Tailwind utility input and applies
its Flexbox styles to the board. `compare()` measures frog and lilypad
positions and checks that matching colors occupy the same coordinates.

## SEO, retention, and AdSense guidance

- Keep page content useful and original. Changes to titles, descriptions,
  headings, explanatory copy, and internal links should accurately describe the
  game and help a learner understand what it teaches.
- Preserve semantic HTML, a single clear page topic, accessible labels, and
  keyboard-friendly controls. Do not trade usability or performance for search
  keywords.
- Keep the static page quick to load. Avoid adding frameworks, trackers,
  render-blocking assets, or a build pipeline for minor changes.
- Treat ads as secondary to learning: do not let placements obscure the editor,
  controls, board, instructions, navigation, or mobile content. Avoid deceptive
  layouts, forced interactions, and other patterns that could harm users or
  violate ad policies.
- When adding AdSense or analytics snippets, load them only as needed, preserve
  the game when third-party scripts fail, and document any consent, privacy, or
  policy requirements introduced by the change.
- For retention changes, prefer improvements that help users make progress:
  clear next actions, useful feedback, saved progress, approachable difficulty,
  and unobtrusive return cues. Keep progress storage backward-compatible where
  practical.

## Working conventions

- Prefer small, understandable vanilla JavaScript changes that fit the existing
  architecture.
- Preserve the script load order unless converting the project deliberately to
  modules or a bundler.
- Keep level content data-driven rather than hard-coding level-specific logic in
  `game.js`.
- Keep localization in `messages.js`, `docs.js`, and the level instruction data;
  do not add English-only UI text in event handlers.
- Treat `localStorage` progress compatibility as a consideration when changing
  levels, input handling, or retention behavior.
- Keep custom game visuals in `css/style.css`; player Tailwind utilities should
  remain limited to the game’s supported learning surface.
- Test changes in a browser, including typing, checking, retrying, advancing,
  changing language, refreshing, loading saved progress, and relevant mobile
  layouts. For SEO or third-party-script work, also verify the page without
  JavaScript errors and with blocked/failed third-party requests.

## Recommended investigation order

1. Read the relevant markup in `index.html`.
2. Read `game.start()`, `setHandlers()`, and `loadLevel()` in `js/game.js`.
3. Trace `applyStyles()` and `compare()` to understand how answers are judged.
4. Inspect a few level objects in `js/levels.js` and utilities in
   `js/tailwind-utilities.js`.
5. Inspect the corresponding selectors and state classes in `css/style.css`.
6. For SEO, retention, or ads, inspect the page head and supporting content in
   `index.html` before adding scripts or markup.
