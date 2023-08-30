import { IPlayer } from "../models/IPlayer";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADD_PLAYER_ONE,
  ADD_PLAYER_TWO,
  UPDATE_PLAYERS,
}

export const GameReducer = (players: IPlayer[], action: IAction): IPlayer[] => {
  switch (action.type) {
    case ActionType.ADD_PLAYER_ONE: {
      return [...players, { name: action.payload, score: 0, character: "X" }];
    }
    case ActionType.ADD_PLAYER_TWO: {
      return [...players, { name: action.payload, score: 0, character: "O" }];
    }
    case ActionType.UPDATE_PLAYERS: {
      const updatedPlayers = JSON.parse(action.payload);
      return players.map((player) => {
        const updatedPlayer = updatedPlayers.find(
          (updated: IPlayer) => updated.name === player.name
        );
        if (updatedPlayer) {
          return {
            ...player,
            score: updatedPlayer.score,
          };
        }
        return player;
      });
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
