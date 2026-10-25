# alifah.me — Personal Portfolio & Engineering Archive

Source code for the personal portfolio, engineering projects archive, international operations dossiers, and academic credentials of **Alifah Mauliddin Nur Ikhsan**, hosted live at [mauliv.github.io](https://mauliv.github.io).

## Overview

A statically generated, fast, and accessible portfolio website engineered to showcase:
- **Systems & Production Platforms:** High-throughput systems (Pemilwa e-voting, Simoby CRM, Patilo MSME platform).
- **Educational Technology & AR:** AR Interactive Kitchen, Plant Escape AR, and published empirical research.
- **Flagship International Operations:** High-level international academic conferences, delegation lead roles, and research forums (GCF, GLoSHIP, InCoTEPD, ETSS, AASVET, SSHP Japan).
- **Credentials & Proof:** Verified certifications, academic degrees, language proficiencies, and press coverage backed by primary evidence documents.

## Technology Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation, zero client-side JS overhead by default)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with modern `@tailwindcss/vite` integration
- **Content Management:** Astro Content Collections with strict [Zod](https://zod.dev/) runtime validation schemas
- **Icons:** Custom SVG components with dark mode support
- **Hosting & CI/CD:** GitHub Pages automated deployment via GitHub Actions

## Architecture & Project Structure

```text
├── public/                 # Static assets, images, and public document proofs
│   ├── images/             # System screenshots, event photos, and press banners
│   ├── pdf/                # Primary evidentiary documentation
│   └── favicon.svg         # Site brand mark
├── src/
│   ├── components/         # Reusable Astro components (ProjectCard, TechStack, EvidencePill, etc.)
│   ├── content/            # Type-safe content collections
│   │   ├── credentials/    # Certifications, degrees, and organizational leadership entries
│   │   ├── operations/     # Flagship international operations and exchange dossiers
│   │   ├── press/          # Institutional news and press coverage articles
│   │   ├── systems/        # Software engineering systems and AR project dossiers
│   │   ├── testimonials/   # Verified collaborator references
│   │   └── writings/       # Technical essays and engineering deep dives
│   ├── layouts/            # Global HTML layout and accessible site navigation
│   ├── lib/                # TypeScript helpers and utility functions
│   ├── pages/              # Astro routing endpoints (59 static routes)
│   └── styles/             # Global CSS and custom styles
└── astro.config.mjs        # Astro configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17.1 or higher)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone repository
git clone https://github.com/mauliv/mauliv.github.io.git
cd mauliv.github.io

# Install dependencies
npm install
```

### Local Development

```bash
# Start local development server with hot-reload
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Production Build

```bash
# Typecheck and build static HTML/CSS to dist/
npm run build

# Preview production build locally
npm run preview
```

## License

Source code is available under the [MIT License](LICENSE), while portfolio content, personal media, and documentation remain proprietary to Alifah Mauliddin Nur Ikhsan.
