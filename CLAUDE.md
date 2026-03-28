# Blessing Uniformes Angola

> Site vitrine trilingue pour Blessing, fabricant d'uniformes à Luanda, Angola.

## Structure

```
site/           → Projet Astro (le code est ici)
site/src/pages/ → Pages (PT/FR/EN)
site/public/    → Assets
```

## Stack

- Astro + Sitemap plugin + CSS custom (pas Tailwind)
- i18n: PT (défaut) / FR / EN

## Commandes

- `cd site && npm run dev` — Dev server
- `cd site && npm run build` — Build
- `cd site && npm run build && touch dist/.nojekyll && npx gh-pages -d dist --dotfiles` — Deploy

## Deploy

- **Repo**: github.com/Alfred-pi/blessing (PUBLIC)
- **Live**: https://alfred-pi.github.io/blessing/
- **Base path**: `/blessing`
- **Pas de CI/CD** — deploy manuel via gh-pages

## Client

- Ana Luluca (HR), Celestino Contreiras (Marketing Director)
- Instagram: @blessing_angola
