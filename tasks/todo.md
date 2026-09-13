# Test coverage for the 6 core pages

## Scope
Pages (per screenshots): Home (landing), Base Items, Unique Items, Runewords, Gems, Runes.

## Todo

- [x] Set up test harness: `vitest` config (merged into `vite.config.ts` or a separate `vitest.config.ts`), `jsdom` environment, a setup file wiring `@testing-library/jest-dom`, and `test` / `test:coverage` scripts in `package.json`. (Delegated to `test-engineer` per its own instructions to establish minimal infra first.)
- [x] Home.tsx — smoke test (renders logo/images without crashing; no filters/data to test).
- [x] BaseItems.tsx + BaseItemsFilter.tsx — filter behavior tests (itemType/character/objectType, combined, no-match state, result count).
- [x] UniqueItems.tsx + UniqueItemsFilter.tsx — same filter behavior pattern as Base Items.
- [x] Runewords.tsx — filter tests for name/originalName/level/holes/applicableIn/runes (array semantics ANY vs ALL confirmed from code: both use `.some`, i.e. ANY).
- [x] Gems.tsx — filter tests for weapon/shield/helm free-text array matching.
- [x] Runes.tsx — filter tests for name/level/weapon/shield.
- [x] Run full suite + coverage, report protected behaviors per page.

## Notes
- Existing devDependencies are already installed (vitest, jsdom, testing-library packages) but no config/setup/scripts exist yet — confirmed via exploration.
- No production code refactor unless the test-engineer agent flags something genuinely necessary (per its own guardrails).
- test-engineer to run itself, one page/logical group at a time, per its own working process.
