import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Status from "./pages/statusPage";
import Information from "./pages/informationPage";
import Monitoring from "./monitoring";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/monitoring/status",
        element: <Status />,
      },
      {
        path: "/monitoring/information",
        element: <Information />,
      },
    ],
  },
  {
    path: "/monitoring",
    element: <Monitoring />,
  },
]);

export default Router;
