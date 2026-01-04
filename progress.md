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

### Saturday, Jan 3 - Day 3
**Goal:** Modern JS Core - Closure (light practice)
**Status:** [~] Partial
**Sessions:** 1/1 (weekend)
**Time:** 25 minutes

**Notes:**
- Did the exercise set to keep consistency; rested instead of deep-diving into closure. Will return to the closure topic tomorrow after resting.

**Commits:**
- docs: log day 3 practice (kept consistency)

---

### Sunday, Jan 4 - Day 4
**Goal:** Modern JS Core - Variable scope (session 1)
**Status:** [x] Complete
**Sessions:** 2/4 (weekend)
**Time:** 65 minutes (10:00 - 11:05)

**Notes:**
- Built examples covering global, function, and block scope; practiced lookup and shadowing.
- Implemented exercises demonstrating TDZ, loop+closure behavior, and scope chain outputs.
- Remaining confusion: closure vs. scope and hoisting — plan to focus on these next session.

- Session 2 (Closure): practiced factory/reader patterns, multiple closures sharing environment, and function-based counters; identified hoisting as next focus.

**Commits:**
- docs: add Day 4 variable-scope notes and examples
- files: week_01_modern_js_core/day_4/day_4_session_1_variable-scope.js, week_01_modern_js_core/day_4/day_4_session_1_variable-scope.md
 - docs: add Day 4 session 2 — closure notes and examples
 - files: week_01_modern_js_core/day_4/day_4_session_2_closure.js, week_01_modern_js_core/day_4/day_4_session_2_closure.md
