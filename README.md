# My Portfolio

A simple responsive portfolio website with dark/light mode, scroll animation, gallery, and quick contact actions.

## Project structure

- `index.html` — main page markup
- `css/style.css` — styles, theming, animations
- `js/script.js` — theme toggle, gallery interactions, scroll reveal
- `assets/images/` — image assets and resume file

## Features

1. Dark & Light theme toggle
2. Resume button opens your resume image (`assets/images/College-resume-and-cover-letter-20246.png`)
3. Send Email button opens Gmail compose
4. Gallery with left/right navigation + swipe drag
5. Scroll reveal animation for cards and sections

## Setup

1. Open `index.html` in the browser (double-click or via local web server)
2. Confirm `css/style.css` and `js/script.js` paths are correct
3. Add/edit images in `assets/images/`

## Notes

- For Gmail compose action, users must be logged into Gmail
- Keep all links updated when moving files
- To test locally with a server, run: `python -m http.server 8000` in project folder

## Future enhancements

- Add section for contact form with AJAX
- Add smooth scroll/scrollspy navigation
- Build mobile menu toggle and sticky navbar
