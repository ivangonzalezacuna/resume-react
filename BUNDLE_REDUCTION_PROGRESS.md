# BUNDLE_REDUCTION_PROGRESS.md

| Phase | Title                               | Status   | Commit |
| ----- | ----------------------------------- | -------- | ------ |
| BR-1  | framer-motion LazyMotion            | Complete | —      |
| BR-2  | Self-host Fonts                     | Complete | —      |
| BR-3  | styled-components → Vanilla Extract | Pending  | —      |

---

```text
Status: Complete
Phase: BR-1 — framer-motion LazyMotion

Files Modified:
- src/App.tsx
- src/components/Hero/styles.tsx
- src/components/Experience/styles.tsx
- src/components/Projects/styles.tsx
- src/components/Skills/styles.tsx
- src/components/About/styles.tsx
- src/components/Contact/styles.tsx
- src/atoms/SectionTitle/styles.tsx
- BUNDLE_REDUCTION_PLAN.md (pre-existing Prettier issue fixed)
- PROJECT_VISION.md (pre-existing Prettier issue fixed)

Acceptance Criteria:
[x] LazyMotion wraps the app in src/App.tsx
[x] Zero motion. references remain in src/ (grep-verified)
[x] All animated components import and use m from "framer-motion"
[x] yarn build exits 0

Build:
[yarn build PASS] — 108.98 kB gzip (index chunk)
[yarn check:full PASS] — tsc, lint, prettier all clean

Bundle delta:
Before: (no pre-BR-1 baseline recorded)
After:  108.98 kB gzip (index chunk)

Deviations:
- BUNDLE_REDUCTION_PLAN.md and PROJECT_VISION.md had pre-existing Prettier
  formatting issues; fixed as part of yarn check:full compliance.

Open Questions:
- none
```

---

```text
Status: Complete
Phase: BR-2 — Self-host Fonts

Files Modified:
- package.json / yarn.lock (added @fontsource/plus-jakarta-sans, @fontsource/jetbrains-mono)
- src/index.tsx (font CSS imports added)
- index.html (Google Fonts links removed)
- src/vite-env.d.ts (no net change — variable font module decl added then removed)

Acceptance Criteria:
[x] @fontsource/plus-jakarta-sans and @fontsource/jetbrains-mono in package.json
[x] Zero fonts.googleapis.com or fonts.gstatic.com references in index.html
[x] Both fonts render identically — static weights 400/500/700 (Jakarta) and 400/500 (Mono)
[x] yarn build exits 0
[x] yarn check:full exits 0

Build:
[yarn build PASS] — 108.98 kB gzip (index JS chunk); WOFF2 assets bundled as expected
[yarn check:full PASS] — tsc, lint, prettier all clean

Bundle delta:
Before: 108.98 kB gzip JS (BR-1 baseline)
After:  108.98 kB gzip JS (fonts now in CSS chunk, no JS delta)

Deviations:
- @fontsource-variable/plus-jakarta-sans was tried first but declares font-family
  'Plus Jakarta Sans Variable' — does not match Theme.tsx. Fell back to
  @fontsource/plus-jakarta-sans (static) per plan fallback instruction.

Open Questions:
- none
```
