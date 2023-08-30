import { createBrowserRouter } from "react-router-dom";
import { Board } from "../pages/Board/Board";
import { Home } from "../pages/Home/Home";
import { Result } from "../pages/Result/Result";
import { Players } from "../pages/Players/Players";

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
