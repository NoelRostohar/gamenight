import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import AddGameNight from '../screens/AddGameNight';
import SelectPlace from '../screens/SelectPlace';

import theme from '../theme';

type AddGameNightParamList = {
  AddGameNight: undefined;
  SelectPlace: undefined;
};

const Stack = createStackNavigator<AddGameNightParamList>();

const AddGameNightStack = () => {
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
              onPress={() => {}}
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
