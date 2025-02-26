import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Pages from "./AuthStack/page";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Pages/>
    </BrowserRouter>
  </StrictMode>
);
