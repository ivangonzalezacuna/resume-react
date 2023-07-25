import { Fragment, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n/i18n";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Fragment>
    <StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </StrictMode>
  </Fragment>,
);
