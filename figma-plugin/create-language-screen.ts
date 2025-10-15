const PRIMARY_BG = "#001B52";
const CARD_BG = "#FFFFFF";
const CARD_BORDER = "#D9D6D0";
const ACCENT_BG = "#F4F1E3";
const PRIMARY_TEXT = "#F5C445";
const SECONDARY_TEXT = "#FFFFFF";
const BODY_TEXT = "#0E2445";
const BUTTON_BG = "#F5C445";
const BUTTON_TEXT = "#0E2445";

async function main() {
  await Promise.all([
    figma.loadFontAsync({ family: "Poppins", style: "Bold" }),
    figma.loadFontAsync({ family: "Poppins", style: "SemiBold" }),
    figma.loadFontAsync({ family: "Poppins", style: "Medium" }),
    figma.loadFontAsync({ family: "Poppins", style: "Regular" }),
    figma.loadFontAsync({ family: "Noto Sans", style: "Regular" }),
  ]);

  const page = figma.currentPage;
  const frame = figma.createFrame();
  frame.name = "Language Selection";
  frame.resize(390, 844);
  frame.fills = [{ type: "SOLID", color: hexToRgb(PRIMARY_BG) }];
  frame.layoutMode = "VERTICAL";
  frame.paddingTop = 48;
  frame.paddingBottom = 32;
  frame.paddingLeft = 24;
  frame.paddingRight = 24;
  frame.itemSpacing = 24;
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "FIXED";
  frame.counterAxisAlignItems = "CENTER";

  const headerFrame = figma.createFrame();
  headerFrame.layoutMode = "VERTICAL";
  headerFrame.counterAxisAlignItems = "CENTER";
  headerFrame.primaryAxisSizingMode = "AUTO";
  headerFrame.counterAxisSizingMode = "AUTO";
  headerFrame.itemSpacing = 8;
  headerFrame.fills = [];
  headerFrame.strokes = [];

  const greeting = figma.createText();
  greeting.characters = "Hello Rahul";
  greeting.fontName = { family: "Poppins", style: "Bold" };
  greeting.fontSize = 36;
  greeting.lineHeight = { unit: "PIXELS", value: 44 };
  greeting.fills = [{ type: "SOLID", color: hexToRgb(PRIMARY_TEXT) }];

  const welcome = figma.createText();
  welcome.characters = "welcome to HUMBLE BEE";
  welcome.fontName = { family: "Poppins", style: "SemiBold" };
  welcome.fontSize = 18;
  welcome.lineHeight = { unit: "PIXELS", value: 26 };
  welcome.letterSpacing = { unit: "PERCENT", value: 5 };
  welcome.textCase = "UPPER";
  welcome.fills = [{ type: "SOLID", color: hexToRgb(SECONDARY_TEXT) }];

  const subtitle = figma.createText();
  subtitle.characters = "What We Commit, We Do";
  subtitle.fontName = { family: "Poppins", style: "Medium" };
  subtitle.fontSize = 14;
  subtitle.lineHeight = { unit: "PIXELS", value: 20 };
  subtitle.fills = [{ type: "SOLID", color: hexToRgb(SECONDARY_TEXT) }];

  const chooseText = figma.createText();
  chooseText.characters = "Choose your language";
  chooseText.fontName = { family: "Poppins", style: "Regular" };
  chooseText.fontSize = 16;
  chooseText.lineHeight = { unit: "PIXELS", value: 22 };
  chooseText.fills = [{ type: "SOLID", color: hexToRgb(SECONDARY_TEXT) }];

  headerFrame.appendChild(greeting);
  headerFrame.appendChild(welcome);
  headerFrame.appendChild(subtitle);
  headerFrame.appendChild(chooseText);

  const cardContainer = figma.createFrame();
  cardContainer.name = "Language Grid";
  cardContainer.layoutMode = "VERTICAL";
  cardContainer.primaryAxisSizingMode = "AUTO";
  cardContainer.counterAxisSizingMode = "AUTO";
  cardContainer.itemSpacing = 16;
  cardContainer.paddingTop = 24;
  cardContainer.paddingBottom = 24;
  cardContainer.paddingLeft = 20;
  cardContainer.paddingRight = 20;
  cardContainer.cornerRadius = 32;
  cardContainer.fills = [{ type: "SOLID", color: hexToRgb(ACCENT_BG) }];
  cardContainer.strokes = [];

  const rows = [
    [
      { flag: "🇮🇳", primary: "Hindi", secondary: "हिन्दी" },
      { flag: "கு", primary: "Tamil", secondary: "தமிழ்" },
    ],
    [
      { flag: "ఉ", primary: "Telugu", secondary: "తెలుగు" },
      { flag: "ব", primary: "Bengali", secondary: "বাংলা" },
    ],
    [
      { flag: "ગ", primary: "Gujarati", secondary: "ગુજરાતી" },
      { flag: "മ", primary: "Malayalam", secondary: "മലയാളം" },
    ],
    [
      { flag: "म", primary: "Marathi", secondary: "मराठी" },
      { flag: "ਪ", primary: "Punjabi", secondary: "ਪੰਜਾਬੀ" },
    ],
    [
      { flag: "ಕ", primary: "Kannada", secondary: "ಕನ್ನಡ" },
      { flag: "🇬🇧", primary: "English", secondary: "" },
    ],
  ];

  rows.forEach((rowData) => {
    const row = figma.createFrame();
    row.layoutMode = "HORIZONTAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = 16;
    row.fills = [];
    row.strokes = [];

    rowData.forEach((cardData) => {
      const card = createLanguageCard(cardData.flag, cardData.primary, cardData.secondary);
      row.appendChild(card);
    });

    cardContainer.appendChild(row);
  });

  const button = figma.createFrame();
  button.name = "Continue";
  button.layoutMode = "HORIZONTAL";
  button.counterAxisAlignItems = "CENTER";
  button.primaryAxisAlignItems = "CENTER";
  button.primaryAxisSizingMode = "AUTO";
  button.counterAxisSizingMode = "FIXED";
  button.resize(300, 56);
  button.cornerRadius = 16;
  button.fills = [{ type: "SOLID", color: hexToRgb(BUTTON_BG) }];

  const buttonText = figma.createText();
  buttonText.characters = "Continue";
  buttonText.fontName = { family: "Poppins", style: "SemiBold" };
  buttonText.fontSize = 18;
  buttonText.fills = [{ type: "SOLID", color: hexToRgb(BUTTON_TEXT) }];
  button.appendChild(buttonText);

  frame.appendChild(headerFrame);
  frame.appendChild(cardContainer);
  frame.appendChild(button);
  page.appendChild(frame);

  figma.viewport.scrollAndZoomIntoView([frame]);
  figma.closePlugin("Language selection screen created.");
}

function createLanguageCard(flag: string, primary: string, secondary: string) {
  const card = figma.createFrame();
  card.layoutMode = "HORIZONTAL";
  card.counterAxisAlignItems = "CENTER";
  card.primaryAxisSizingMode = "AUTO";
  card.counterAxisSizingMode = "AUTO";
  card.paddingTop = 16;
  card.paddingBottom = 16;
  card.paddingLeft = 16;
  card.paddingRight = 16;
  card.itemSpacing = 16;
  card.cornerRadius = 16;
  card.resize(150, 96);
  card.fills = [{ type: "SOLID", color: hexToRgb(CARD_BG) }];
  card.strokes = [{ type: "SOLID", color: hexToRgb(CARD_BORDER) }];
  card.strokeWeight = 2;

  const flagFrame = figma.createFrame();
  flagFrame.layoutMode = "HORIZONTAL";
  flagFrame.primaryAxisSizingMode = "FIXED";
  flagFrame.counterAxisSizingMode = "FIXED";
  flagFrame.resize(56, 56);
  flagFrame.counterAxisAlignItems = "CENTER";
  flagFrame.primaryAxisAlignItems = "CENTER";
  flagFrame.cornerRadius = 16;
  flagFrame.itemSpacing = 0;
  flagFrame.fills = [{ type: "SOLID", color: hexToRgb("#F7E7B0") }];
  flagFrame.strokes = [];

  const flagText = figma.createText();
  flagText.characters = flag;
  flagText.fontName = { family: "Noto Sans", style: "Regular" };
  flagText.fontSize = 24;
  flagText.fills = [{ type: "SOLID", color: hexToRgb(BODY_TEXT) }];

  flagFrame.appendChild(flagText);

  const labelFrame = figma.createFrame();
  labelFrame.layoutMode = "VERTICAL";
  labelFrame.primaryAxisSizingMode = "AUTO";
  labelFrame.counterAxisSizingMode = "AUTO";
  labelFrame.counterAxisAlignItems = "FLEX_START";
  labelFrame.itemSpacing = 4;
  labelFrame.fills = [];
  labelFrame.strokes = [];

  const primaryText = figma.createText();
  primaryText.characters = primary;
  primaryText.fontName = { family: "Poppins", style: "SemiBold" };
  primaryText.fontSize = 18;
  primaryText.fills = [{ type: "SOLID", color: hexToRgb(BODY_TEXT) }];

  labelFrame.appendChild(primaryText);

  if (secondary) {
    const secondaryText = figma.createText();
    secondaryText.characters = secondary;
    secondaryText.fontName = { family: "Poppins", style: "Regular" };
    secondaryText.fontSize = 14;
    secondaryText.fills = [{ type: "SOLID", color: hexToRgb(BODY_TEXT) }];
    labelFrame.appendChild(secondaryText);
  }

  card.appendChild(flagFrame);
  card.appendChild(labelFrame);
  return card;
}

function hexToRgb(hex: string): RGB {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r: r / 255, g: g / 255, b: b / 255 };
}

main();
