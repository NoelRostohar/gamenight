import React, { useCallback } from 'react';
import { TouchableNativeFeedback, View, Alert } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import AddGameNight from '../screens/AddGameNight';
import SelectPlace from '../screens/SelectPlace';

import theme from '../theme';
import { gameNight } from '../api';
import { GlobalState } from '../store';
import { clearGameNight } from '../store/GameNight/actions';

type AddGameNightParamList = {
  AddGameNight: undefined;
  SelectPlace: undefined;
};

const Stack = createStackNavigator<AddGameNightParamList>();

const AddGameNightStack = () => {
  const { date, games, place } = useSelector(
    (state: GlobalState) => state.gameNight
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addGameNight = useCallback((): void => {
    const dateToString = format(date, 'dd/MM');
    const url = games[0].url;
    //TODO: Push To Server

    dispatch(clearGameNight());
    navigation.navigate('Home');
  }, [date, games, place]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.dark,
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
    >
      <Stack.Screen
        name="AddGameNight"
        component={AddGameNight}
        options={{
          headerTitle: 'Propose a Game Night!',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialIcons name="close" size={24} color={theme.light} />
          ),
          headerRight: () => (
            <TouchableNativeFeedback
              onPress={() =>
                games.length < 1
                  ? Alert.alert('Warning', 'Please select at least one game.')
                  : addGameNight()
              }
              background={TouchableNativeFeedback.Ripple(theme.light, true, 15)}
              style={{ marginRight: 5 }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 5,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              >
                <MaterialIcons
                  name="check"
                  size={24}
                  color={theme.confirmation}
                />
              </View>
            </TouchableNativeFeedback>
          ),
        }}
      />
      <Stack.Screen
        name="SelectPlace"
        component={SelectPlace}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          title: 'Where?',
        }}
      />
    </Stack.Navigator>
  );
};

export default AddGameNightStack;
