import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/reset.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </StrictMode>
);
