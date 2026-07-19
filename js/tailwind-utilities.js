// The Flexbox utilities taught by the game. This intentionally covers only the
// lesson content; it is not a replacement for the full Tailwind stylesheet.
var tailwindUtilities = {
  flex: { display: "flex" },

  "justify-start": { "justify-content": "flex-start" },
  "justify-end": { "justify-content": "flex-end" },
  "justify-center": { "justify-content": "center" },
  "justify-between": { "justify-content": "space-between" },
  "justify-around": { "justify-content": "space-around" },
  "justify-evenly": { "justify-content": "space-evenly" },

  "items-start": { "align-items": "flex-start" },
  "items-end": { "align-items": "flex-end" },
  "items-center": { "align-items": "center" },
  "items-baseline": { "align-items": "baseline" },
  "items-stretch": { "align-items": "stretch" },

  "flex-row": { "flex-direction": "row" },
  "flex-row-reverse": { "flex-direction": "row-reverse" },
  "flex-col": { "flex-direction": "column" },
  "flex-col-reverse": { "flex-direction": "column-reverse" },

  "flex-nowrap": { "flex-wrap": "nowrap" },
  "flex-wrap": { "flex-wrap": "wrap" },
  "flex-wrap-reverse": { "flex-wrap": "wrap-reverse" },

  "order-first": { order: "-9999" },
  "order-last": { order: "9999" },
  "order-none": { order: "0" },
  "order-1": { order: "1" },
  "order-2": { order: "2" },
  "order-3": { order: "3" },

  "self-auto": { "align-self": "auto" },
  "self-start": { "align-self": "flex-start" },
  "self-end": { "align-self": "flex-end" },
  "self-center": { "align-self": "center" },
  "self-baseline": { "align-self": "baseline" },
  "self-stretch": { "align-self": "stretch" },

  "content-start": { "align-content": "flex-start" },
  "content-end": { "align-content": "flex-end" },
  "content-center": { "align-content": "center" },
  "content-between": { "align-content": "space-between" },
  "content-around": { "align-content": "space-around" },
  "content-evenly": { "align-content": "space-evenly" },
  "content-stretch": { "align-content": "stretch" },
};
