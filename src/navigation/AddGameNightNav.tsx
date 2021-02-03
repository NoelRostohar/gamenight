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

import AddGamenight from '../screens/AddGamenight';
import SelectPlace from '../screens/SelectPlace';

import theme from '../theme';
import { GlobalState } from '../store';
import { clearGamenight } from '../store/Gamenight/actions';

type AddGamenightParamList = {
  AddGamenight: undefined;
  SelectPlace: undefined;
};

const Stack = createStackNavigator<AddGamenightParamList>();

const AddGamenightStack = () => {
  const { date, games, place } = useSelector(
    (state: GlobalState) => state.gamenight
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addGamenight = useCallback((): void => {
    const dateToString = format(date, 'dd/MM');
    const url = games[0].url;
    //TODO: Push To Server

    dispatch(clearGamenight());
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
        name="AddGamenight"
        component={AddGamenight}
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
                  : addGamenight()
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

export default AddGamenightStack;
