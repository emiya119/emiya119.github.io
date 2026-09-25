# Emiya119's Portfolio ✨

Personal portfolio website built for GitHub Pages. Creative-developer meets designer — code, motion, and typography.

## 🔗 Live Site

https://emiya119.github.io

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **Tailwind CSS** — via CDN (no build step!)
- **Vanilla JavaScript** — Smooth scrolling, reveal animations, counter, scroll progress
- **JetBrains Mono + Inter** — Typography

## 📁 Project Structure

```
emiya119.github.io/
├── index.html      # Main page (single-page)
├── script.js       # Interactions & animations
├── README.md       # This file
└── .nojekyll       # Disables Jekyll processing for GitHub Pages
```

## 🧩 Sections

| # | Section    | What it does                                      |
|---|------------|---------------------------------------------------|
| 1 | **Hero**   | Animated intro, role tagline, CTA buttons         |
| 2 | **Marquee**| Scrolling "Creative Developer" ticker             |
| 3 | **About**  | Bio + bento-style stats cards (counter animated)  |
| 4 | **Work**   | Bento grid of selected projects with hover tilt   |
| 5 | **Skills** | Skill pills grouped by category                   |
| 6 | **Contact**| Contact cards + big email CTA                     |
| 7 | **Footer** | Copyright + back-to-top                           |

## 🎨 Design Notes

- **Dark-first** — ink-black (#060608) background with accent red (#ff4d4d)
- **Bento Grid** — modular card layouts inspired by Apple/STOD award sites
- **Micro-interactions** — hover tilt, scroll reveal, magnetic buttons, cursor glow
- **Typography contrast** — heavy sans-serif headings + mono labels

## 🚀 Local Development

Just open `index.html` in any browser — no build step needed.

Or run a quick local server:

```bash
# With Python
python -m http.server 8080

# With Node (if available)
npx serve .
```

## 📦 Deploying

This site is hosted on **GitHub Pages** from the `main` branch. Push changes to deploy:

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/emiya119/emiya119.github.io.git
git push -u origin main
```

## ✏️ Customizing

1. **Your name** — Find `Emiya119` in `index.html`, replace everywhere
2. **Your bio** — Edit the About section paragraphs
3. **Projects** — Replace project cards in the Work section
4. **Email / Socials** — Update links in Contact cards
5. **Colors** — Edit `tailwind.config` `theme.extend.colors` at top of `index.html`

## 📄 License

MIT — feel free to fork and adapt!
