# Flexwind Froggy — Agent Guide

## Project purpose

This is a small browser game for learning Tailwind CSS Flexbox

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
- `js/game.js` — initialization, event handlers, level rendering, CSS
  application, answer checking, persistence, translations, and level changes.
- `js/levels.js` — level definitions. Each level includes a name, instructions,
  board string, target style, and editable-code framing.
- `js/docs.js` — localized Flexbox property help shown in tooltips.
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
`applyStyles()` currently places the player’s text into a frog element’s
`style` attribute. `compare()` measures frog and lilypad positions and checks
that matching colors occupy the same coordinates.

## Tailwind migration guidance

The key conceptual change is the player input and style application:

- Current input: declarations such as `justify-content: flex-end;`.
- Intended input: Tailwind classes such as `justify-end`.

When implementing this change, keep the position-based win check unless the
game design intentionally changes. The board and visual styles should remain
separate from the player’s Tailwind utilities.

Likely migration touchpoints are:

- `levels.js`: represent the expected Tailwind answer and the instructional
  utility names/values.
- `game.js`: apply player input as classes rather than an inline `style`
  attribute, and validate or normalize utility-class input.
- `docs.js`: document Tailwind utilities and their corresponding Flexbox
  behavior.
- `index.html`: update editor text, examples, and wording from CSS declarations
  to utility classes.
- `css/style.css`: retain custom game visuals; do not replace artwork and
  animations with Tailwind utilities without a clear benefit.

Tailwind is not currently installed or built in this repository. Adding it
means choosing a build strategy and deciding whether generated utilities are
loaded as a compiled stylesheet or whether a standalone/browser-oriented setup
is appropriate. Avoid introducing a build pipeline incidentally; document the
choice and update the run instructions when it is made.

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
  answer formats. Old raw-CSS answers may need migration or safe invalidation
  when the input format becomes Tailwind.
- Test changes in a browser, including typing, checking, retrying, advancing,
  changing language, refreshing, and loading saved progress.

## Recommended investigation order

1. Read the relevant markup in `index.html`.
2. Read `game.start()`, `setHandlers()`, and `loadLevel()` in `js/game.js`.
3. Trace `applyStyles()` and `compare()` to understand how answers are judged.
4. Inspect a few level objects in `js/levels.js`.
5. Inspect the corresponding selectors and state classes in `css/style.css`.

Before changing the answer format, understand the complete path from textarea
input to frog positioning to the success check.
