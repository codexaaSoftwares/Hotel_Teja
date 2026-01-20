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
│   │   ├── AnimatedSection.jsx
│   │   ├── Banner.jsx
│   │   ├── BookingPlatforms.jsx
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
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
- ✅ Modern carousel with Swiper.js
- ✅ 3D gallery carousel with coverflow effect
- ✅ Auto-sliding hero banner with dynamic badges
- ✅ Smooth animations with Framer Motion
- ✅ Multiple booking platforms integration (MakeMyTrip, Goibibo, Booking.com, Zomato)

## 📝 Notes

- All assets (CSS, JS, images) should be placed in `public/assets/`
- The project uses the same CSS and JS files from the original HTML version
- Some external scripts (jQuery, Bootstrap, etc.) are loaded dynamically
- The menu data is stored in `src/data/menuData.js` for easy updates

## 🔗 Booking Platforms

The BookingPlatforms component integrates multiple booking platforms:
- **MakeMyTrip** - Hotel booking with direct booking link
- **Goibibo** - Hotel booking with direct booking link  
- **Booking.com** - International hotel booking platform
- **Zomato** - Food ordering platform

All platforms use local HD logo images from `/public/assets/images/` for optimal performance:
- `makemytrip-logo-hd.png`
- `goibibo-logo-hd.png`
- `booking.com.png`
- `Zomato.png`

## 🎯 Recent Updates

### Carousel System
- **Hero Banner**: Swiper carousel with auto-slide, fade effect, and dynamic badges
- **Gallery**: 3D coverflow carousel with 8 images, navigation, and pagination
- Replaced `react-slick` with `swiper` for better performance

### Component Features
- **Banner.jsx**: Dynamic badges for Restaurant, Rooms, and Banquet sections
- **Gallery.jsx**: Modern 3D carousel with coverflow effect
- **Footer.jsx**: Background image implementation
- **Statistics.jsx**: Updated cuisine section with labels
- **About.jsx**: Enhanced image display
- **BookingPlatforms.jsx**: Multiple booking platforms with logos (MakeMyTrip, Goibibo, Booking.com, Zomato)

## 📦 Production Build

The production build will be in the `dist/` folder after running `npm run build`.

For optimal performance:
- Images are optimized during build
- CSS is minified
- JavaScript is bundled and minified
- Assets are properly hashed for cache busting

## 🔧 Development

The project uses:
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Swiper.js** - Modern carousel library for hero banner and gallery
- **Framer Motion** - Animation library for smooth transitions
- **React Odometer** - Animated statistics counter
- **Bootstrap** - CSS framework (loaded from assets)
- **jQuery** - DOM manipulation (loaded from assets)
- **WOW.js** - Scroll animations (loaded from assets)

### Key Dependencies
- `swiper` ^11.0.5 - Carousel functionality
- `framer-motion` ^10.16.16 - Animations
- `react-odometerjs` ^2.0.0 - Statistics counter
- `react-select` ^5.8.0 - Select dropdowns

## 📦 Build

The production build will be in the `dist/` folder after running `npm run build`.

## 🐛 Troubleshooting

### Assets Not Loading
If assets are not loading:
1. Ensure all files from `Website_html/assets` are copied to `Website_react/public/assets`
2. Check that file paths in components use `/assets/` (with leading slash)
3. Verify the public folder structure matches the expected paths

### Vite Dependency Issues
If you encounter "Outdated Optimize Dep" errors:
1. Clear Vite cache: Delete `node_modules/.vite` folder
2. Restart the dev server: `npm run dev`
3. The `vite.config.js` includes Swiper in `optimizeDeps.include`

### Carousel Not Working
- Ensure Swiper CSS is imported in components using carousels
- Check browser console for any errors
- Verify all Swiper modules are properly imported

