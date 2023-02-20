import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ModalContextProvider from "./store/Modal/ModalContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ModalContextProvider>
    <RouterProvider router={routes} />
  </ModalContextProvider>,
);
