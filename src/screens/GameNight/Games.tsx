import React, { memo, useReducer, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';

import Game from '../../components/Game';

import { GamenightType, GameType, Participant } from 'src/types';

interface GamesProps {
  gamenight: GamenightType;
}

interface GameCountType extends GamenightType {
  count: number;
}

interface GameCount {
  [key: number]: GameCountType;
}

enum ActionTypes {
  StoreGame = 'StoreGame',
}

const initialState: GameCount = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.StoreGame:
      if (state[action.game.id]) {
        return {
          ...state,
          [action.game.id]: {
            ...state[action.game.id],
            count: state[action.game.id].count + 1,
          },
        };
      }
      return {
        ...state,
        [action.game.id]: {
          ...action.game,
          count: 1,
        },
      };
    default:
      return state;
  }
};

const Games: React.FC<GamesProps> = ({ gamenight: { participants } }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    participants.forEach((participant: Participant) => {
      participant.games.forEach((game: GameType) => {
        dispatch({
          type: ActionTypes.StoreGame,
          game,
        });
      });
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
      {Object.values(state).map((game: GameType) => {
        return <Game game={game} key={game.id} />;
      })}
    </ScrollView>
  );
};

export default memo(Games);
