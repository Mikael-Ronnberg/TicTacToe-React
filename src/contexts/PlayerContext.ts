import { createContext } from "react";
import { IPlayer } from "../models/IPlayer";

export const PlayerContext = createContext<IPlayer[]>([]);
