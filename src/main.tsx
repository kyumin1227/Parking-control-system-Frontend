import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/reset.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
