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
  subtext?: string;
}

const IconText: React.FC<IconTextProps> = ({
  icon,
  text,
  size,
  color,
  subtext,
}) => {
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: subtext ? 'baseline' : 'center',
    },
    iconContainer: {
      minWidth: size + 6,
    },
    text: {
      color: color || theme.faded,
      fontSize: size,
    },
    subtext: {
      color: theme.faded,
      fontSize: 12,
    },
  });

  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={icon} size={size} color={color || theme.faded} />
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
        {subtext && <Text style={styles.subtext}>{subtext}</Text>}
      </View>
    </View>
  );
};

export default IconText;
