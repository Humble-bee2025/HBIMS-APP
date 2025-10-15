# HBIMS-APP

## Figma language selection screen generator

The `figma-plugin/create-language-screen.ts` script is a Figma plugin entry file that recreates the multilingual welcome screen shared in the task prompt. The plugin builds the full layout – hero copy, language cards, and the "Continue" button – so you can iterate on the design directly inside Figma.

### How to use

1. In Figma, create a new plugin (or edit an existing one) and replace its `code.ts` contents with the script from `figma-plugin/create-language-screen.ts`.
2. In the Figma editor, run the plugin via **Plugins → Development → YOUR_PLUGIN_NAME**.
3. The screen will be added to the current page as a frame titled **Language Selection**.

You can adjust spacing, colors, or typography directly in Figma once the frame has been generated.
