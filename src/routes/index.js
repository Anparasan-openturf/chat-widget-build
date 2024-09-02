import { lazy } from "react";
import HomePage from "../pages/HomePage";

const DocQuery = lazy(() => import("../pages/DocQuery"));

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/doc-buddy",
    component: <DocQuery />,
  },
];

export default routes;
