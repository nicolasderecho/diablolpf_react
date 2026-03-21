# Claude Project Guide

## Overview

This is a React SPA for displaying Diablo 2 runeword and item stats, originally built with Create React App and using Bulma css to style components.


## Stack & Tools

- React (currently outdated). Update it to the current stabe version (19.x)
- JavaScript (migrating to TypeScript)
- Replace the UI components used from "tenpines-bulma-react" repo (which is just a Bulma css wrapper) in favor of Tailwind CSS
- Test setup: TBD

## Commands

- `npm run dev` / `npm start` — start the Vite dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the production build locally
- `npm run prod-start` — serve `dist/` with `serve` (used by the Heroku `Procfile`)
- `node scripts/generate_json_data.js` — regenerate all `src/data/json/*.json` files from the scraped/hand-authored data in `scripts/db_generation/`

There is no configured test runner, linter, or single-test command yet (see Goals above).

## Architecture

This is a client-only, data-driven SPA — there is no backend or API. All content (runewords, runes, gems, unique/base/set items, cube recipes, act areas) is pre-generated into static JSON files under `src/data/json/`, imported directly by page components (e.g. `import RawUniqueItems from '../../data/json/unique_items.json'`) and cast to the matching type from `src/types.ts`.

**Data pipeline (offline, not run at request time):** `scripts/db_generation/` holds hand-authored source data (by category: `base_items/`, `unique_items/`, plus runes/gems/runewords/cube recipes as JSON), aggregated in `scripts/db_generation/data.js`. `scripts/generate_json_data.js` dumps that into `src/data/json/`. `scripts/scrapping/` contains one-off scripts previously used to scrape source data. Regenerate JSON data only when the underlying game data changes.

**Routing/pages:** `src/App.tsx` defines all routes (in Spanish, e.g. `/runas`, `/palabras_runicas`, `/items_unicos`) mapped to page components in `src/pages/`. Each list-style page (`UniqueItems.tsx`, `BaseItems.tsx`, `Runewords.tsx`, etc.) follows the same pattern: load the raw JSON as static data, filter it client-side against a `FilterValues` object from a sibling `*Filter.tsx` component, and render results through the shared `DiabloTable` component with a page-specific `renderRow`.

**Shared rendering:** `src/shared/` holds cross-page display components (`DiabloTable`, `UniqueItem`, `Rune`, `Gem`, `ItemRequirements`, `ItemSpecifications`, `CubeRecipe`, etc.) and `src/shared/helpers/util.ts`, which centralizes Spanish-language label lookups (`REQUIREMENT_NAMES`, `CHARACTER_NAMES`, `ITEM_CLASSES`) and filter-matching helpers (`matchesArrayFilter`, `isBlank`). `src/components/ui/` holds generic, presentation-only UI primitives (buttons, inputs, spinner, table row).

**Types:** `src/types.ts` is the single source of truth for domain models (`RuneData`, `GemData`, `UniqueItemData`, `BaseItemData`, `SetItemData`, `RunewordData`, `CubeFormula`, `FilterValues`, etc.) and is imported with `import type` throughout.

**Styling:** Tailwind CSS is the current styling approach (utility classes via `cn()` in `src/lib/cn.ts`, which wraps `clsx` + `tailwind-merge`). Some pages still have matching `.scss` files under `src/styles/` and `src/index.scss` — these are legacy from the pre-Tailwind Bulma setup and are being phased out per the Goals above; prefer Tailwind utility classes in any new or migrated component.

## Coding Conventions

- Functional components with hooks
- Prefer modular files in `src/`
- Reusable components go under `src/components`

## Notes for Claude

- When migrating files, suggest what to rename/split
- Use Tailwind for layout examples
- Suggest tests where coverage is missing
- Don't auto-install outdated dependencies — ask first

## Claude Behavior Expectations

- First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.
- The plan should have a list of todo items that you can check off as you complete them
- Before you begin working, check in with me and I will verify the plan.
- Then, begin working on the todo items, marking them as complete as you go.
- Please every step of the way just give me a high level explanation of what changes you made
- Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
