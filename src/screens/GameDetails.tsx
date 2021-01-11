import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import theme from '../theme';
import { MainStackParamList } from '../navigation';

type GameDetailsRouteProp = RouteProp<MainStackParamList, 'GameDetails'>;

interface GameDetailsProps {
  route: GameDetailsRouteProp;
}

const IMAGE_HEIGHT: number = Dimensions.get('window').height / 2;

const GameDetails: React.FC<GameDetailsProps> = ({
  route: {
    params: { url, name },
  },
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bg}>
      <ImageBackground style={styles.img} source={{ uri: url }}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color={theme.light} />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
  img: {
    height: IMAGE_HEIGHT,
  },
  backIcon: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    // @ts-expect-error
    marginTop: StatusBar?.currentHeight + 20,
    marginLeft: 20,
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    color: theme.light,
    fontWeight: 'bold',
  },
});

export default GameDetails;
