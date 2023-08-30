import { IPlayer } from "../models/IPlayer";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADD_PLAYER_ONE,
  ADD_PLAYER_TWO,
}

export const GameReducer = (players: IPlayer[], action: IAction): IPlayer[] => {
  switch (action.type) {
    case ActionType.ADD_PLAYER_ONE: {
      return [...players, { name: action.payload, score: 0, character: "X" }];
    }
    case ActionType.ADD_PLAYER_TWO: {
      return [...players, { name: action.payload, score: 0, character: "O" }];
    }
    default:
      break;
  }

  return players;
};

// }
// case ActionType.GET_RESULTS: {
//   return action.payload;
// }
