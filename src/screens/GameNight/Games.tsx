import React, { memo, useReducer, useEffect, Fragment } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import Game from '../../components/Game';
import Divider from '../../components/Divider';

import theme from '../../theme';
import { GamenightType, GameType, Participant } from 'src/types';

interface GamesProps {
  gamenight: GamenightType | undefined;
}

interface GameCountType extends GamenightType {
  count: number;
}

interface GameCount {
  [key: number]: GameCountType;
}

enum ActionTypes {
  StoreGame = 'StoreGame',
  ClearGames = 'ClearGames',
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
    case ActionTypes.ClearGames:
      return initialState;
    default:
      return state;
  }
};

const Games: React.FC<GamesProps> = ({ gamenight }) => {
  if (!gamenight) return null;

  const { participants } = gamenight;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ActionTypes.ClearGames });
    participants.forEach((participant: Participant) => {
      participant.games.forEach((game: GameType) => {
        dispatch({
          type: ActionTypes.StoreGame,
          game,
        });
      });
    });
  }, [gamenight]);

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
      {Object.values(state)
        .sort((a: GameCountType, b: GameCountType) => b.count - a.count)
        .map((game: any) => {
          return (
            <Fragment key={game.id}>
              <View style={styles.gameCardContainer}>
                <View style={styles.gameContainer}>
                  <Game
                    game={game}
                    maxPlayerWarning={participants.length > game.maxPlayers}
                  />
                </View>
                <Text style={styles.votes}>
                  {game.count} {game.count > 1 ? 'votes' : 'vote'}
                </Text>
              </View>
              <Divider />
            </Fragment>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gameCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameContainer: {
    flex: 1,
  },
  votes: {
    color: theme.faded,
  },
});

export default memo(Games);
