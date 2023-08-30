import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/GameReducer";

export const PlayerDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
