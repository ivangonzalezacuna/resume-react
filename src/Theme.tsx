import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  surface: {
    base: "#0A0C0D",
    low: "#141819",
    mid: "#1D2224",
    high: "#2B3134",
  },
  accent: {
    cyan: "#2FD9F4",
    // accent.violet is reserved exclusively for the {ivan} logo brackets and {i} favicon — do not use elsewhere
    violet: "#8B5CF6",
    teal: "#0D9488",
    slate: "#444748",
  },
  text: {
    primary: "#E6EDF3",
    muted: "#94A3B8",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48px",
  },
  font: {
    narrative: "'Plus Jakarta Sans', sans-serif",
    technical: "'JetBrains Mono', monospace",
  },
};

export const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
