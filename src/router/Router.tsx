import { createBrowserRouter } from "react-router-dom";
import { Board } from "../pages/Board";
import { Home } from "../pages/Home";
import { Result } from "../pages/Result";
import { Players } from "../pages/Players";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/players",
    element: <Players></Players>,
  },
  {
    path: "/board",
    element: <Board></Board>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);
