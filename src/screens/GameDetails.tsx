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
  SafeAreaView,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import IconText from '../components/IconText';

import theme from '../theme';
import { MainStackParamList } from '../navigation';

type GameDetailsRouteProp = RouteProp<MainStackParamList, 'GameDetails'>;

interface GameDetailsProps {
  route: GameDetailsRouteProp;
}

const IMAGE_HEIGHT: number = Dimensions.get('window').height / 2;
const BUTTON_WIDTH: number = Dimensions.get('window').width / 1.5;

const GameDetails: React.FC<GameDetailsProps> = ({
  route: {
    params: { url, name, minPlayers, maxPlayers, owner, playtime, description },
  },
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.bg}>
      <ImageBackground style={styles.img} source={{ uri: url }}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color={theme.light} />
        </TouchableOpacity>
      </ImageBackground>
      <ScrollView
        overScrollMode="never"
        contentContainerStyle={{
          padding: 20,
        }}
      >
        <Text style={styles.name}>{name}</Text>
        <View style={styles.iconRow}>
          <View style={styles.iconSpacing}>
            <IconText
              icon="group"
              size={12}
              text={`${minPlayers} - ${maxPlayers}`}
            />
          </View>
          <View style={styles.iconSpacing}>
            <IconText icon="access-time" size={12} text={playtime} />
          </View>
          <IconText
            icon="person-pin-circle"
            size={12}
            text={`Owned by ${owner}`}
          />
        </View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Watch How To Play</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
  name: {
    fontSize: 24,
    color: theme.light,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  iconSpacing: {
    marginRight: 20,
  },
  descriptionTitle: {
    color: theme.lightFade,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  descriptionText: {
    color: theme.faded,
    fontSize: 14,
  },
  button: {
    width: BUTTON_WIDTH,
    alignSelf: 'center',
    height: 60,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: theme.light,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameDetails;
