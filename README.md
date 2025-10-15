# HBIMS Onboarding UI

This project contains a ready-to-use React implementation of the HBIMS welcome screen,
including the hero imagery, credential input, and calls-to-action from the provided
design reference. It is powered by [Vite](https://vitejs.dev/) and uses modern React
(v18) with functional components and modular styling.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The application opens automatically on [http://localhost:3000](http://localhost:3000).

3. Create an optimized production build:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Project Structure

```
HBIMS-APP/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
└── vite.config.js
```

## Customisation Tips

- Update the hero art by changing the `HERO_IMAGE_URL` constant in `src/App.jsx`.
- Adjust typography, spacing, or colour palette inside `src/styles.css` to match your
  brand system.
- The form currently captures a mobile number but does not submit; wire it to your
  authentication flow as needed.

## License

This project is provided as-is for demonstration purposes. Feel free to adapt it to your needs.
