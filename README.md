# HBIMS Language Selector UI

This project contains a ready-to-use React implementation of the "Choose Your Language" screen shown in the design reference. It is powered by [Vite](https://vitejs.dev/) and uses modern React (v18) with functional components.

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
│   ├── languages.js
│   ├── main.jsx
│   └── styles.css
└── vite.config.js
```

## Customisation Tips

- Edit `src/languages.js` to change or reorder the available languages.
- Tweak the look and feel in `src/styles.css` to match your brand colours or typography.
- Use the `LanguageSelector` component from `src/App.jsx` in any other React project by copying the component files and associated styles.

## License

This project is provided as-is for demonstration purposes. Feel free to adapt it to your needs.
