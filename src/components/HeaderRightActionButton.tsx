import React from 'react';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';
import { Icon } from '../types';

interface HeaderRightProps {
  onPress: () => void;
  icon: Icon;
}

const HeaderRightActionButton: React.FC<HeaderRightProps> = ({
  onPress,
  icon,
}) => {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(theme.light, true, 15)}
      style={styles.button}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={24} color={theme.confirmation} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 5,
  },
  iconContainer: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default HeaderRightActionButton;
