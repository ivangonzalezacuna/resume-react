import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    surface: {
      base: string;
      low: string;
      mid: string;
      high: string;
      overlay: string;
    };
    accent: {
      cyan: string;
      violet: string;
      teal: string;
      slate: string;
      cyanAlpha: string;
      slateAlpha: string;
    };
    text: {
      primary: string;
      muted: string;
    };
    border: {
      subtle: string;
      dotGrid: string;
    };
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    font: {
      narrative: string;
      technical: string;
    };
  }
}
