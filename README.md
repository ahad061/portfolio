# Md Ahad Ali — Portfolio Website

A single-page portfolio website built with plain **HTML, CSS &amp; JavaScript** — no build tools, no frameworks. Open it directly in a browser, edit it in VS Code, and deploy it for free.

## 📁 Project structure

```
portfolio/
├── index.html          # all page content
├── css/
│   └── style.css       # all styling
├── js/
│   └── script.js       # mobile menu, counters, scroll reveal
├── assets/
│   ├── profile.jpg      # your photo (used in the hero panel)
│   └── Md_Ahad_Ali_CV.pdf  # downloadable CV
└── README.md
```

## ✏️ Things you can easily edit

| Want to change...        | Edit this file      | Where                          |
|---------------------------|----------------------|---------------------------------|
| Text, headings, links     | `index.html`         | anywhere                        |
| Colors, fonts, spacing    | `css/style.css`      | `:root { ... }` at the top      |
| Skills list                | `index.html`          | `<section id="skills">`         |
| Work / project cards      | `index.html`         | `<section id="work">`           |
| Social links               | `index.html`          | search for `social-row`         |
| Profile photo              | `assets/profile.jpg` | replace the file, same name     |
| CV file                    | `assets/Md_Ahad_Ali_CV.pdf` | replace the file, same name |

Color tokens live at the top of `css/style.css` — change `--growth` or `--coral` to restyle the whole site instantly.

## 💻 Step 1 — Open in VS Code

1. Download/unzip this `portfolio` folder somewhere on your computer.
2. Open **VS Code** → `File` → `Open Folder` → select the `portfolio` folder.
3. Install the **Live Server** extension (optional but handy) to preview with auto-reload: right-click `index.html` → `Open with Live Server`.

## 🐙 Step 2 — Push to GitHub

Open a terminal inside the `portfolio` folder (VS Code has one built in: `Terminal` → `New Terminal`) and run:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
```

Now create a **new empty repository** on GitHub (e.g. `portfolio` or `ahad061.github.io`) at:
👉 https://github.com/new

Then connect and push:

```bash
git remote add origin https://github.com/ahad061/portfolio.git
git push -u origin main
```

(Replace the URL with your actual repo URL — you can copy it from the GitHub page after creating the repo.)

## 🌍 Step 3 — Free hosting

You have three easy free options. **GitHub Pages** is the simplest since your code is already on GitHub.

### Option A — GitHub Pages (recommended, easiest)
1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment" → Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` → **Save**.
4. Wait 1–2 minutes, then your site is live at:
   `https://ahad061.github.io/portfolio/`
   (If you name the repo exactly `ahad061.github.io`, your site URL becomes `https://ahad061.github.io/` directly.)

### Option B — Netlify
1. Go to https://app.netlify.com → **Add new site** → **Import an existing project**.
2. Connect your GitHub account and select the `portfolio` repo.
3. Leave build settings empty (no build command needed for static HTML) → **Deploy**.
4. You'll get a free URL like `https://your-name.netlify.app`.

### Option C — Vercel
1. Go to https://vercel.com/new.
2. Import the `portfolio` repo from GitHub.
3. Framework preset: **Other** → **Deploy**.
4. You'll get a free URL like `https://portfolio-yourname.vercel.app`.

## 🔁 Updating the live site later

Any time you make changes:

```bash
git add .
git commit -m "Update content"
git push
```

- **GitHub Pages / Netlify / Vercel** will automatically redeploy within a minute or two.

## 🔗 Your links (already wired into the site)

- GitHub: https://github.com/ahad061
- Facebook: https://www.facebook.com/ahadali018
- Fiverr: https://www.fiverr.com/s/38BlBKr

---

Built for **Md Ahad Ali** — Digital Marketing Executive.
