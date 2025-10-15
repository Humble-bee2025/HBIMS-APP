# HBIMS Language Selection Figma Spec

This folder contains a structured JSON description of the "Hello Rahul" language selection screen that can be imported into Figma.

## Files

- `language-selection.figspec.json` – Hierarchical description of the artboard, text styles, colors, and reusable tile component.

## How to import into Figma

1. Open Figma and create a new file.
2. Install a plugin such as **JSON to Figma** or **Figma Tokens** that can read raw Figma REST-compatible JSON. (The free community plugin "Json2Figma" works well.)
3. Run the plugin and paste the contents of `language-selection.figspec.json` when prompted.
4. The plugin will recreate the `Language Selection` frame with all layers and text nodes. You can then adjust spacing, typography, or replace the placeholder emoji flags with vector assets if needed.

## Notes

- Typography uses the Poppins family to match the reference mock-up.
- The language tiles are instances of a single `Language Tile` component, making it easy to add more languages.
- Colors follow the dark blue and saffron palette seen in the provided reference.
- If a plugin cannot interpret component overrides, duplicate the `Language Tile` component manually after import and update the labels.
