import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import { PlayerDispatchContext } from "./contexts/PlayerDispatchContext";
import { PlayerContext } from "./contexts/PlayerContext";
import { useReducer } from "react";
import { GameReducer } from "./reducers/GameReducer";

export function App() {
  const [allPlayers, dispatch] = useReducer(GameReducer, []);

  return (
    <>
      <PlayerContext.Provider value={allPlayers}>
        <PlayerDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}></RouterProvider>
        </PlayerDispatchContext.Provider>
      </PlayerContext.Provider>
    </>
  );
}
