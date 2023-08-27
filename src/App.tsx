import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import { GameContext } from "./contexts/PlayerContext";
import { GameDispatchContext } from "./contexts/PlayerDispatchContext";
import { GameReducer } from "./reducers/GameReducer";
import { useReducer } from "react";

export function App() {
  const [allPlayers, dispatch] = useReducer(GameReducer, []);

  return (
    <>
      <GameContext.Provider value={allPlayers}>
        <GameDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}></RouterProvider>
        </GameDispatchContext.Provider>
      </GameContext.Provider>
    </>
  );
}
