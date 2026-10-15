# Joey English Academia — landing page

A responsive static landing page designed for Vercel. It includes course cards, FAQs, a mobile navigation menu, and WhatsApp enquiry buttons.

## Files
- `index.html` — page content and SEO metadata
- `styles.css` — responsive styling
- `script.js` — WhatsApp links and mobile menu
- `assets/joey-logo.png` — logo provided for this draft

## WhatsApp behaviour
The main buttons open WhatsApp for **+91 73584 84515** with a pre-filled enquiry. Course-specific buttons include that course name. The visitor still needs to press **Send** in WhatsApp.

## Preview locally
Open `index.html` in a browser. For a more accurate local preview, use VS Code with the Live Server extension.

## Publish with Vercel (no coding required)
1. Extract this ZIP on your computer.
2. Go to https://vercel.com and sign in.
3. Create a GitHub repository and upload the files/folders in this project, keeping `index.html`, `styles.css`, `script.js`, and `assets/` together.
4. In Vercel, choose **Add New → Project**, import that repository, and deploy.
5. As this is a plain static site, no build command is needed. If asked, leave the framework as **Other**, the build command blank, and the output directory as `.`.
6. After deployment, open the generated `.vercel.app` URL and test the WhatsApp buttons on both phone and computer.

Alternative: install Vercel CLI and run `vercel` from this project folder. Follow Vercel's prompts.

## Before sharing publicly
- Confirm the WhatsApp number and test the pre-filled message.
- Confirm course names, delivery mode, timings, fees and any claims before adding them. This draft deliberately does not invent prices, testimonials or guaranteed IELTS scores.
- Replace `assets/joey-logo.png` if you later receive a higher-resolution transparent logo. Keep the same filename, or update the image paths in `index.html`.
- If you have an official address, email, course schedule or verified testimonials, add them before launch.

## Notes
The page uses Google Fonts when internet access is available; fallback fonts are included. No form backend or paid integration is required.
