import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";

export function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}
