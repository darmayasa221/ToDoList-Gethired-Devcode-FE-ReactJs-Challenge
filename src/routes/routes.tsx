import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Activity from "../pages/Activity/Activity";
import DetailActivity from "../pages/DetailActivity/DetailActivity";
import ActivityContextProvider from "../store/Activity/ActivityContextProvider";
import DetailActivityContextProvider from "../store/DetailActivity/DetailActivityContextProvider";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ActivityContextProvider>
            <Activity />
          </ActivityContextProvider>
        ),
      },
      {
        path: "/detail/:id",
        element: (
          <ActivityContextProvider>
            <DetailActivityContextProvider>
              <DetailActivity />
            </DetailActivityContextProvider>
          </ActivityContextProvider>
        ),
      },
    ],
  },
]);

export default routes;
