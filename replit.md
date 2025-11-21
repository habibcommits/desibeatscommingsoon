# Desi Beats - Coming Soon Page

## Overview
This is a "coming soon" landing page for Desi Beats Café. The page features a countdown timer, email notification signup form, and detailed restaurant information including location, hours, and contact details.

## Project Structure
- `index.html` - Main HTML page
- `styles.css` - Stylesheet with responsive design and animations
- `script.js` - JavaScript for countdown timer and form handling
- `server.py` - Python HTTP server configured for static file serving

## Technical Details
- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks required)
- **Server**: Python 3.11 with built-in HTTP server
- **Port**: 5000 (configured for Replit webview)
- **Cache Control**: Disabled to ensure updates are immediately visible

## Features
- Countdown timer (currently set to Dec 31, 2025)
- Email notification signup form
- Restaurant information section with:
  - Rating display (4.2 stars, 61 reviews)
  - Services offered (Dine-in, Takeout)
  - Complete address in Islamabad, Pakistan
  - Operating hours
  - Clickable phone number
  - Google Maps integration
- Responsive design for mobile and desktop
- Smooth animations and modern gradient background
- No-cache headers for development

## Customization
To customize the countdown date, edit line 1 in `script.js`:
```javascript
const countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();
```

To change colors or styling, edit `styles.css`.

## Recent Changes
- **Nov 21, 2025**: Added restaurant information section with address, hours, contact details, and Google Maps link
- **Nov 21, 2025**: Initial setup - Created coming soon page with countdown timer and email form
