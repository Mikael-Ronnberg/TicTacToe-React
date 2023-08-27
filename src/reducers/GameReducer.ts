import { IPlayer } from "../models/IPlayer";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADD_PLAYER,
}

export const GameReducer = (players: IPlayer[], action: IAction): IPlayer[] => {
  switch (action.type) {
    case ActionType.ADD_PLAYER: {
      return [...players, { name: action.payload, score: 0 }];
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
