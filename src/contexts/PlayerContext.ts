import { createContext } from "react";
import { IPlayerContext } from "../models/IPlayerContext";

export const GameContext = createContext<IPlayerContext[]>([]);
