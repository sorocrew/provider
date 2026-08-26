# Contributing to @sorocrew/provider

Thank you for contributing to **@sorocrew/provider**! SoroCrew participates in **Drips Waves** (drips.network) to fund open-source contributors.

---

## 🗺️ SoroCrew Repository Ecosystem Map

| Repository | Focus Area | Technology |
| :--- | :--- | :--- |
| **`sorocrew/studio`** | Desktop Browser & IDE App UI | Tauri 2.0 (Rust) + React + TypeScript |
| **`sorocrew/provider`** (This Repo) | Injected JavaScript Wallet SDK (`@sorocrew/provider`) | TypeScript, tsup |
| **`sorocrew/quickstart`** | Local Standalone Soroban Docker Environment & CLI | Docker Compose, Shell, Node.js CLI |
| **`sorocrew/docs`** | Documentation Site & Landing Page | React + Vite + Tailwind CSS |

---

## 🌊 Drips Wave Workflow

1. **Find an Issue:** Check open issues tagged `drips-wave` on GitHub or Drips.
2. **Apply on Drips:** Click **Apply** on Drips Wave. Wait for maintainer assignment.
3. **Submit PR:** Submit a PR referencing the issue.
4. **Review & Payout:** After merge, claim your payout at the end of the wave cycle!

---

## 💻 Setup & Testing

```bash
git clone git@github.com:sorocrew/provider.git
cd provider

# Install dependencies & build
npm install
npm run typecheck
npm run build
```
