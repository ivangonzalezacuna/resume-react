// styled.d.ts
import "styled-components";

interface IPalette {
  background: string;
  text: string;
  box: string;
}

interface IPaletteAccent {
  background: string;
  text: string;
  textLight: string;
  textDark: string;
}

interface ThemePalette {
  primary: IPalette;
  secondary: IPalette;
  error: IPalette;
  accent: IPaletteAccent;
  footer: string;
  splashBg: string;
  transparent: "transparent";
}

interface FontValues {
  static: string;
  dynamic: string;
}

interface ThemeFontSize {
  button: FontValues;
  timeline: {
    title: FontValues;
    subtitle: FontValues;
    description: FontValues;
    text: FontValues;
  };
  skills: {
    tag: FontValues;
  };
  home: {
    name: FontValues;
    description: FontValues;
  };
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: ThemePalette;
    font: string[];
    text: ThemeFontSize;
  }
}
