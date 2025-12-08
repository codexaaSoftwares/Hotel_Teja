# Hotel Teja - React + Vite

A modern React application for Hotel Teja Restaurant & Hotel, built with Vite and React.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy assets from the HTML version:
```bash
# Copy the assets folder from Website_html/assets to Website_react/public/assets
# Or manually copy all files from Website_html/assets to Website_react/public/assets
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Website_react/
├── public/
│   └── assets/          # All CSS, JS, and image assets
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Amenities.jsx
│   │   ├── Banner.jsx
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Menu.jsx
│   │   ├── Preloader.jsx
│   │   ├── Rooms.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Services.jsx
│   │   ├── Statistics.jsx
│   │   └── Team.jsx
│   ├── data/
│   │   └── menuData.js   # Menu data
│   ├── utils/
│   │   └── initScripts.js # Script initialization
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features

- ✅ React 18 with functional components
- ✅ Vite for fast development and building
- ✅ Component-based architecture
- ✅ Responsive design
- ✅ Smooth scrolling navigation
- ✅ Tab-based menu system
- ✅ Event booking interface
- ✅ Newsletter subscription form

## 📝 Notes

- All assets (CSS, JS, images) should be placed in `public/assets/`
- The project uses the same CSS and JS files from the original HTML version
- Some external scripts (jQuery, Bootstrap, etc.) are loaded dynamically
- The menu data is stored in `src/data/menuData.js` for easy updates

## 🔧 Development

The project uses:
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Bootstrap** - CSS framework (loaded from assets)
- **jQuery** - DOM manipulation (loaded from assets)
- **WOW.js** - Scroll animations (loaded from assets)

## 📦 Build

The production build will be in the `dist/` folder after running `npm run build`.

## 🐛 Troubleshooting

If assets are not loading:
1. Ensure all files from `Website_html/assets` are copied to `Website_react/public/assets`
2. Check that file paths in components use `/assets/` (with leading slash)
3. Verify the public folder structure matches the expected paths

