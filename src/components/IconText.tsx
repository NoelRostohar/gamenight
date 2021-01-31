import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';
import { Icon } from '../types';

interface IconTextProps {
  icon: Icon;
  text: string;
  size: number;
  color?: string;
}

const IconText: React.FC<IconTextProps> = ({ icon, text, size, color }) => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 3,
    },
    text: {
      color: color || theme.faded,
      fontSize: size,
    },
  });

  return (
    <View style={styles.row}>
      <MaterialIcons
        style={styles.icon}
        name={icon}
        size={size}
        color={color || theme.faded}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default IconText;
