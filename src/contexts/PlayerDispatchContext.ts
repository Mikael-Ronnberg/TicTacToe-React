import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/GameReducer";

export const GameDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
