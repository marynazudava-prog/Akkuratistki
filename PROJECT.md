# Project Specification: Akkuratistki

## 1. Overview
Akkuratistki is an elite VIP cleaning service (term preferred over "Curation") and luxury organization business in Poland. 
The goal of this project is to build a premium, agent-responsive static website hosted on **GitHub Pages**.

**Core Directives:**
- **Contact:** Form-First strategy. No public phone numbers are listed to ensure lead qualification.
- **CSS Framework:** Tailwind CSS via CDN with a custom "Luxury" theme.

**Development Rules:**
- Global formatting requirements (Zero-Whitespace Policy, strict 2-space indentation) are **DISABLED** for this project.
- No images should be generated without explicit confirmation from the USER.

## 2. Core Service Offerings
The business focuses on highly-niched services in a single-page "Conversion Funnel" architecture:
1. **Residential Interior Cleaning:** Meticulous deep cleaning for private houses, summer houses, flats, and residences.
2. **Small Commercial Cleaning:** Constant hygienic maintenance for professional environments like boutique spaces, offices, and hairdressers (strictly up to 100 square meters).
3. **Professional Upholstery & Wet Cleaning:** Specialized washing and wet cleaning for soft furniture (couches, chairs, mattresses, carpets).

## 3. Localization
- **Languages:** English (EN), Polish (PL), and Russian (RU).
- **Implementation:** Custom logic in `scripts.js` using `data-i18n` attributes to swap DOM content without page reload.

## 4. Technical SEO and Agentic Optimization (AEO/GEO)
The architecture must be fully "Agent-Responsive" for tools like ChatGPT Operator, Claude, and Siri/Alexa.
- **Semantic DOM:** Perfect reliance on structural tags (`<main>`, `<article>`, `<section>`, `<nav>`) and an unbroken heading hierarchy.
- **Strict ARIA Labeling:** Interactive elements must have explicitly descriptive ARIA labels as "GPS Coordinates" for AI.
- **Structured Data:** Implementation of `JSON-LD` schemas in the `<head>`, explicitly defining the business as a `CleaningService` to allow AI agents to parse pricing, location, and hours without ambiguity.
- **LLM Context Files:** Deployment of `/llms.txt`, `/llms-full.txt`, `ai.txt`, and permissive `robots.txt` for reputable AI crawlers (GPTBot, ClaudeBot).
- **Metadata:** Rich OpenGraph and meta descriptions for social sharing (ensuring luxury purple branding on link previews).

## 5. Technology & Conversion Mechanics
- **Tech Stack:** HTML5, Tailwind CSS via CDN (with custom "Luxury" theme), and Vanilla JavaScript. 
- **Maps:** Leaflet.js rendering a two-layer coverage model from GAS: overall area outline plus zone-level polygons.
- **Serviceability Check:** Browser-side geolocation check against the overall area and postal-code lookup against a cached list of strings from Google Sheets.
- **Data Transport:** Google Apps Script web app is accessed through JSONP for cross-origin compatibility.
- **Sticky Menu Navigation:** Prioritizing "Coverage" and "Get a Quote" to reduce friction.
- **Lead Capture Form:** Form-First strategy. Pure HTML form routed via a serverless form provider.
- **Dynamic Price Estimation:** A multi-section, interactive form allows users to configure services (rooms, furniture, carpets) and receive real-time cost estimates. Pricing data is fetched via JSON from the master Google Sheet, ensuring consistency.

## 6. Development Tools
- **Agentation Integration:** An automated visual feedback toolbar/bookmarklet runs locally on `http://localhost:4747`.
