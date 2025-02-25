import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Pages from "./AuthStack/page";
import SideNav from "./pages/sideNav";
import Page from "./pages/page";
import DashBoard from "./pages/DashBoard";
import Email from "./pages/Email";
import Support from "./pages/Support";
import Listing from "./pages/listing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Pages/>
    </BrowserRouter>
  </StrictMode>
);
