import React from 'react';
import {
  Alert,
  View,
  StyleSheet,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from '../components/Input';

import theme from '../theme';
import loginImg from '../../assets/pp.jpeg';

interface LoginProps {
  submit: () => void;
}

const Login: React.FC<LoginProps> = ({ submit }) => {
  const onSubmit = async (text: string) => {
    if (/^[a-zA-Z]{2,}\d*$/i.test(text)) {
      try {
        await AsyncStorage.setItem('@username', text);
        submit();
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.alert('Error', 'Invalid username.');
    }
  };

  return (
    <View style={styles.bg}>
      <Image source={loginImg} style={styles.img} />
      <Input
        icon="person"
        placeholder="Enter your username"
        onSubmitEditing={(
          event: NativeSyntheticEvent<TextInputChangeEventData>
        ) => onSubmit(event.nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    ...theme.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 100,
    resizeMode: 'cover',
    marginVertical: 25,
  },
});

export default Login;
