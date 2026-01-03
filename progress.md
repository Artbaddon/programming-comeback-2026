# Progress Log - January 2026

## Week 1 (Jan 1 - Jan 5)

### Thursday, Jan 1 - Day 1
**Goal:** Modern JS Core - Variables refresh
**Status:** [~] Partial
**Sessions:** 1/2 (weekday)
**Time:** 20 minutes

**Notes:**
- Revisited why `let`/`const` exist and typed a short reminder snippet to keep the streak alive.
- Realized I still blur hoisting with variable types, so I marked it for follow-up tomorrow.
- Habit win: even a single line keeps momentum better than skipping entirely.

**Commits:**
- docs: log week 1 day 1 progress

---

### Friday, Jan 2 - Day 2
**Goal:** Modern JS Core - Deepen variable scope & hoisting prep
**Status:** [x] Complete
**Sessions:** 1/1 (weekday)
**Time:** 75 minutes (20:45 - 22:00)

**Notes:**
- Rewrote `let`/`const`/`var` differences in my own words and reinforced that bindings, not values, are what stay fixed with `const`.
- Walked through lexical environment parsing rules so the tokenization limits on names finally clicked.
- Practiced `var` inside blocks vs `let` to feel the scope leak firsthand and logged the TDZ as the next rabbit hole.
- Captured aha that objects held by `const` stay mutable because only the binding is frozen.

**Commits:**
- docs: log week 1 day 2 progress

---