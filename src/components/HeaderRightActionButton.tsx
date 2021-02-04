import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';
import { Icon } from '../types';

interface HeaderRightProps {
  onPress: () => void;
  icon?: Icon;
  text?: string;
  color?: string;
}

const HeaderRightActionButton: React.FC<HeaderRightProps> = ({
  onPress,
  icon,
  text,
  color,
}) => {
  if (!!text) {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ color }}>{text}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(theme.light, true, 15)}
      style={styles.button}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons
          name={icon}
          size={24}
          color={color || theme.confirmation}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
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
