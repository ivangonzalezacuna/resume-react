import "./styles/fonts.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { darkTheme } from "./styles/themes/dark.css";
import App from "./App";

document.documentElement.classList.add(darkTheme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
