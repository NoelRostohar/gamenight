import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';
import { Icon } from '../types';

interface InputProps {
  icon: Icon;
  [rest: string]: any;
  flexSize: number;
  button?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, flexSize, button, ...rest }) => {
  return (
    <View style={[styles.root, { flex: flexSize }]}>
      <MaterialIcons name={icon} size={20} color={theme.faded} />
      <TextInput
        style={styles.textInput}
        {...rest}
        placeholderTextColor={theme.faded}
      />
      {button && button}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 45,
    borderWidth: 1,
    borderColor: theme.faded,
    borderRadius: 25,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
    marginHorizontal: 10,
    flex: 1,
    color: theme.light,
  },
});

export default Input;
