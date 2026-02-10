## Orbis – Smart Textile Technology Site

Orbis is a marketing and product-information site for a smart textile technology company.  
It showcases how Orbis integrates **AI‑powered textile sensors** into clothing, footwear, and protective gear for sectors like **sports, military & defense, industrial safety, and healthcare**, and explains the engineering approach, case studies, and development process.

This repository contains the **frontend single‑page application** (SPA) built with React, Vite, and Tailwind/shadcn‑ui. It is intended to be deployed as a static site (or via an edge/runtime host such as Cloudflare, Vercel, or Netlify).

---

### Demo

- **Live site**: [https://main.orbis-cur.pages.dev/](https://main.orbis-cur.pages.dev/)
- **Demo videos**:
  - [Demo video 1](https://youtu.be/zNqR8UDVfIg)
  - [Demo video 2](https://youtu.be/Qja2WBouXR8)

---

### Key Features

- **Landing experience**
  - Hero banner explaining Orbis and its smart textile sensor vision.
  - Clear calls to action to explore projects and contact the team.

- **Industry use‑case sections**
  - Highlighted applications for **sports performance**, **military & defense**, **industrial safety**, and **thermal regulation**.
  - Real‑world case studies (e.g. firefighter safety, industrial worker protection, smart athletic wear).

- **Technology & process explanation**
  - `TechDetails` and related sections describe how Orbis combines proprietary modules, vetted off‑the‑shelf hardware, and production partners.
  - A structured **development process** view showing planning, development, testing, review, and market launch.

- **Projects & blog**
  - Dedicated project pages (e.g. sport retail, workwear, pet tech, etc.).
  - A `Blog` section with previews and detailed posts powered by structured data in `src/data/blogPosts.ts`.

- **Contact & lead capture**
  - Prominent contact sections and floating contact controls to make it easy for visitors to reach out for custom solutions.

- **Modern UX & animations**
  - Responsive layout with Tailwind CSS.
  - Smooth scroll interactions, scroll‑hijacked feature slides, and motion effects via `framer-motion`.
  - Reusable components built on `shadcn-ui` (buttons, cards, carousel, etc.).

---

### Tech Stack

- **Framework**: React + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS
- **UI library**: shadcn‑ui (Radix-based components)
- **Icons**: lucide‑react
- **Animation**: framer‑motion
- **Routing**: react‑router‑dom

---

### Getting Started (Local Development)

#### Prerequisites

- **Node.js** (recommended: current LTS)  
- **npm** (bundled with Node)

#### Install dependencies

```bash
npm install
```

#### Run the development server

```bash
npm run dev
```

This starts the Vite dev server. Open the printed URL (by default `http://localhost:5173`) in your browser.

#### Build for production

```bash
npm run build
```

This outputs an optimized static build to the `dist` directory.

#### Preview the production build (optional)

```bash
npm run preview
```

---

### Project Structure (High Level)

- `src/main.tsx` – App entry point and React root.
- `src/App.tsx` – Top‑level app shell and router.
- `src/pages/` – Top‑level routes (`Index`, `TechDetails`, `DevelopmentProcess`, `Careers`, `Blog`, project detail pages, privacy policy, etc.).
- `src/components/` – Reusable layout and content components (`Hero`, `Features`, `WhyOrbis`, `Projects`, `ContactForm`, `Navbar`, `Footer`, etc.).
- `src/data/blogPosts.ts` – Structured content for blog posts.
- `src/lib/utils.ts` – Shared utility helpers.
- `src/index.css`, `src/App.css` – Global and app‑specific styling.

You typically only need to touch files under `src/` to change copy, visuals, or behavior.

---

### Deployment

Because this is a Vite SPA, you can deploy the contents of `dist` to any static/edge hosting platform, for example:

- **Netlify** – Drag‑and‑drop `dist` or connect the repo and use the default Vite build command (`npm run build`) and publish directory (`dist`).
- **Vercel** – Import the repo and select the Vite preset (build command `npm run build`, output directory `dist`).
- **Cloudflare** – Use Wrangler / Cloudflare Pages (build command `npm run build`, output directory `dist`). The included `wrangler.toml` can be customized if you choose a Cloudflare‑based deployment.

No server‑side code is required; everything needed to run the site is contained in the static build.

---

### Customizing Orbis for Your Needs

- **Change copy and branding**:  
  - Edit hero and section text in components like `Hero`, `Features`, `WhyOrbis`, `Projects`, and the various `*Project` and `About`/`Careers` pages.
  - Update imagery under `public/` and any referenced asset paths.

- **Add new projects or case studies**:  
  - Create new project components under `src/pages/` and wire them into the router and navigation.
  - Add new cards or sections under `src/components/Projects.tsx` or related components.

- **Add or update blog posts**:  
  - Modify or extend the data in `src/data/blogPosts.ts` to add new articles and update existing ones.

---

### Contributing / Maintenance

This project is primarily intended as the marketing and information front‑end for Orbis.  
If you are extending it:

- Keep components **modular and reusable**.
- Maintain **consistent styling** with the existing Tailwind and shadcn‑ui patterns.
- Test on both **desktop and mobile** to preserve the smooth scrolling and animated user experience.

