# JSM Ragi & Millet Tiffins - Plain Static Site

This directory (`static-site/`) contains a pure, standalone HTML + CSS + JavaScript version of the **JSM Ragi & Millet Tiffins** website.

- **No React**
- **No Next.js**
- **No Vite**
- **No Tailwind CDN or npm build steps**
- **Zero build dependencies** — works directly in any web browser or static web server.

---

## 📁 Directory Structure

```
static-site/
├── index.html          # Semantic HTML5 markup
├── favicon.svg         # SVG favicon asset
├── css/
│   └── style.css       # Complete CSS design system (variables, animations, responsiveness)
├── js/
│   ├── data.js         # Menu, categories, locations, and site data arrays
│   └── main.js         # Rendering logic, mobile drawer toggle, and scroll reveal observer
├── images/             # Local menu photos and story poster graphic
│   ├── jsm-story-poster.png
│   └── menu/
│       ├── crispy-ghee-ragi-dosa.jpeg / .png
│       ├── crispy-millet-ponganalu.jpeg
│       ├── foxtail-millet-pongal.jpeg
│       ├── millet-set-dosa.jpeg / .png
│       ├── mung-sprout-garelu.jpeg
│       ├── onion-ragi-utappam.jpeg
│       ├── ragi-ambali.jpeg
│       ├── ragi-mudda-chicken.png
│       ├── ragi-mudda-pulusu.jpeg
│       ├── ragi-pesara-dosa.jpeg / .png
│       └── soft-millet-ragi-idli.jpeg / .png
└── README.md           # Instructions for running and deploying
```

---

## 🚀 How to Run Locally

Because all scripts are loaded as classic JavaScript files (`<script src="js/data.js"></script>` and `<script src="js/main.js"></script>`), you can run the site using any of the following methods:

### Option 1: Direct File Opening
Simply double-click `index.html` or open it in any modern web browser directly from disk.

### Option 2: Using Node.js `serve`
```bash
npx serve static-site
```
Then visit `http://localhost:3000` in your browser.

### Option 3: Using Python HTTP Server
```bash
cd static-site
python -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## 🌐 How to Deploy

### 1. Vercel
- **Framework Preset**: `Other`
- **Root Directory**: `static-site`
- **Build Command**: *(leave empty)*
- **Output Directory**: `.`

### 2. Render (Static Site Service)
- **Build Command**: *(leave empty)*
- **Publish Directory**: `static-site`

### 3. Netlify
- **Base Directory**: `static-site`
- **Publish Directory**: `static-site`
- **Build Command**: *(leave empty)*

### 4. GitHub Pages
- Set GitHub Pages source branch to `main` and specify `/static-site` folder or push contents of `static-site/` to the repository root or `gh-pages` branch.

---

## ✏️ How to Edit Content & Data

All dynamic content rendered on the site is managed in **`js/data.js`**:

- **Edit Menu Items**: Update the `menuCards` array in `js/data.js`.
- **Add a New Dish**:
  1. Save your dish photo in `static-site/images/menu/your-dish-photo.jpg`.
  2. Add an entry to `menuCards` in `js/data.js`:
     ```js
     {
       title: 'New Millet Item',
       price: '₹50',
       tag: 'Freshly Made',
       description: 'Delicious hot millet dish.',
       accent: 'green',
       image: 'images/menu/your-dish-photo.jpg',
       imageAlt: 'New millet item description'
     }
     ```
- **Edit Locations or Timings**: Update the `locations` array in `js/data.js`.
- **Edit Categories**: Update the `categories` array in `js/data.js`.
