---
description: Enforce bilingual data format for all new data structures
globs: ["*.js", "*.html"]
---

# Bilingual Data Rule

All new data objects must use the format:
```js
{ vi: "Vietnamese text", en: "English text" }
```

## Card Names Exception
- Card names are ALWAYS English — use `card.name` from `DECK`
- NEVER use `DECK_VI[x].name` for display
- Vietnamese card names in data entries (interactions, actions) are descriptive context, not display names

## Guards
- All references to external data files: `typeof X !== 'undefined'` guard
- Example: `if (typeof CARD_INTERACTIONS_MAP !== 'undefined') { ... }`

## Language Selection
- Global variable: `currentLang` ('vi' | 'en')
- Pattern: `const d = isVi ? DECK_VI[card.id] : card; // use d.kw, d.meaning — NEVER d.name`
