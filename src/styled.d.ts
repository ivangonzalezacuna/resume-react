import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    surface: {
      base: string;
      low: string;
      mid: string;
      high: string;
    };
    accent: {
      cyan: string;
      violet: string;
      teal: string;
      slate: string;
    };
    text: {
      primary: string;
      muted: string;
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
