import { createBrowserRouter } from "react-router-dom";
import { Board } from "../pages/Board";
import { Home } from "../pages/Home";
import { Result } from "../pages/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/board",
    element: <Board></Board>,
  },
  {
    path: "/result",
    element: <Result></Result>
  }
]);
