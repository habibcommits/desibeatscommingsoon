# Desi Beats - Coming Soon Page

## Overview
This is a "coming soon" landing page for Desi Beats Café. The page features a countdown timer, email notification signup form, and detailed restaurant information including location, hours, and contact details.

## Project Structure
- `index.html` - Main HTML page with SEO meta tags
- `styles.css` - Stylesheet with responsive design and animations
- `script.js` - JavaScript for countdown timer and form handling
- `server.py` - Python HTTP server configured for static file serving
- `sitemap.xml` - XML sitemap for search engines
- `robots.txt` - Robots.txt file for search engine crawlers
- `favicon.svg` - Website favicon

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
- Embedded Google Maps iframe for location
- SEO optimized with comprehensive meta tags
- Open Graph and Twitter Card meta tags for social sharing
- Geographic meta tags for local search
- XML sitemap for search engines
- Responsive design for mobile and desktop
- Smooth animations and modern gradient background
- Footer with developer credit
- No-cache headers for development

## Customization
To customize the countdown date, edit line 1 in `script.js`:
```javascript
const countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();
```

To change colors or styling, edit `styles.css`.

## SEO Configuration
The website is configured for the domain `desibeatscafe.com` with:
- Comprehensive meta tags (title, description, keywords)
- Open Graph meta tags for Facebook/social sharing
- Twitter Card meta tags
- Geographic meta tags for local SEO (Islamabad, Pakistan)
- Canonical URL configuration
- XML sitemap at `/sitemap.xml`
- Robots.txt for search engine crawling

## Recent Changes
- **Nov 21, 2025**: Added embedded Google Maps iframe and footer with developer credit
- **Nov 21, 2025**: Added comprehensive SEO meta tags for desibeatscafe.com domain
- **Nov 21, 2025**: Created sitemap.xml and robots.txt files
- **Nov 21, 2025**: Added restaurant information section with address, hours, contact details, and Google Maps link
- **Nov 21, 2025**: Initial setup - Created coming soon page with countdown timer and email form
