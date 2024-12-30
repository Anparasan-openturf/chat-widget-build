import { lazy } from "react";
import HomePage from "../pages/HomePage";
import ChatWidget from "../pages/ChatWiget";

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
  {
    path: "/chat",
    component: <ChatWidget />,
  },
];

export default routes;
