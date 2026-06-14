# Design System: Akkuratistki

## 1. Creative North Star
**"The Art of Purity" & "Visible Care"**
The aesthetic is premium, minimalist, and emotion-driven, blending high-density industrial minimalism with "Editorial Sanctuary" organic warmth. We reject clinical, sterile, utilitarian web designs in favor of an environment evoking humanity, love, order, and tranquility.

## 2. Branding & Terminology
- **Terminology:** Always use "VIP Cleaning" instead of "Curation".
- **Dynamic Logos:** Logos switch dynamically based on the selected city (e.g., Purple symbol for general, Purple with Łódź text for specific contexts).
- **Theme Definition:** A custom "Luxury" theme defined in the HTML config (via Tailwind CSS).

## 3. Color Palette & Tone
The color system operates on tonal layering without harsh divisions.
- **Primary Brand (Dark):** `#303440` (Midnight/Charcoal for solid contrast)
- **Primary Brand (Light):** `#AEB9DA` (Muted Blue/Periwinkle for airy touches)
- **Earthy Warmth Additions:** `#d4b896` (Warm beige/camel), `#e8dcc0` (Soft cream)
- **Backgrounds:** Off-white linen aesthetics (`#fcfbf9`, `#f9f5f0`).

## 4. Typography
A strict, elegant pairing to balance tradition and approachability.
- **Headings (Display):** Playfair Display (or Noto Serif). Used for statements, denoting elegance and curated taste. Handled gracefully with wider line height.
- **Body & Labels:** Onest (or Plus Jakarta Sans). Clean, geometric sans-serif for optimal legibility.

## 5. Visual Layout & "The No-Line Rule"
- **Asymmetric Balance:** Utilize generous, uneven white spacing to guide the eye naturally.
- **Layered Translucency (Glassmorphism):** Apply `backdrop-blur` techniques on floating navigation bars or overlays to let background warmth bleed through.
- **Tone Over Stroke:** Prohibit 1px solid borders for sectioning content. Distinguish boundaries through subtle shifts in background colors or ambient "cloud shadows". Soft border-radius (`rounded-md`, `rounded-xl`, `rounded-full`).

## 6. Imagery Constraints
- Prioritize high-quality, naturally lit photography of cozy spaces, tactile materials (folded towels, ceramic vases, clean windows).
- **Explicit Prohibition:** Absolutely NO stock photos of neon cleaning supplies, bleach bottles, mops, or industrial cleaning buckets. 
- **Image Generation Rule:** No images should be generated without explicit confirmation from the USER.

## 7. Page-Specific Layout Requirements
- **Structure:** Single-page "Conversion Funnel" architecture (Identity -> Value -> Transparency -> Reliability -> Conversion).
- **Header/Navigation:** Sticky menu prioritizing "Coverage" and "Get a Quote". Employs a strict **Form-First strategy** with NO public phone numbers listed anywhere to ensure lead qualification.
- **Hero Section:** Clean, airy, establishing the "Art of Purity" brand.
- **Interactive Map:** Leaflet-powered map with a cached outline layer and a zone layer built on the server, then switched by zoom level in the browser.
- **Serviceability Flow:** User can check live location permission or enter a postal code. The browser compares location against the service outline and postal code against a cached allow-list from GAS.
- **Service Presentations:** Bento-grid formats and strict `<article>` structures for individual services, plus clear pricing models to build immediate trust.
- **Social Proof:** Unfiltered, specific customer testimonials.
- **FAQ Section:** HTML5 native `<details>` and `<summary>` tags strictly styled without lines, ensuring a "High-Contrast" DOM structure for AI vision processing.
