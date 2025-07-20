# Claude Project Guide

## Overview

This is a React SPA for displaying Diablo 2 runeword and item stats, originally built with Create React App and using Bulma css to style components.

## Goals

- [x] Set up project again
- [ ] Migrate to latest React version
- [ ] Replace class components with hooks
- [ ] Add type safety with TypeScript
- [ ] Improve UI layout with Tailwind
- [ ] Add testing with React Testing Library

## Stack & Tools

- React (currently outdated). Update it to the current stabe version (19.x)
- JavaScript (migrating to TypeScript)
- Replace the UI components used from "tenpines-bulma-react" repo (which is just a Bulma css wrapper) in favor of Tailwind CSS
- Test setup: TBD

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
