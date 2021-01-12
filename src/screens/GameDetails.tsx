import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Animated, { Extrapolate } from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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
    params: {
      url,
      name,
      minPlayers,
      maxPlayers,
      owner,
      playtime,
      description,
      howToPlay,
    },
  },
}) => {
  const navigation = useNavigation();

  const scrollY = useRef(new Animated.Value(0)).current;

  const imgHeight = scrollY.interpolate({
    inputRange: [-200, 0, IMAGE_HEIGHT],
    outputRange: [IMAGE_HEIGHT + 200, IMAGE_HEIGHT, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.bg}>
      <Animated.Image
        style={[styles.img, { height: imgHeight }]}
        source={{ uri: url }}
      />
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={24} color={theme.light} />
      </TouchableOpacity>
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        overScrollMode="never"
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            paddingTop: IMAGE_HEIGHT + 20,
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
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('HowToPlay', { howToPlay, name })
            }
          >
            <Text style={styles.buttonText}>Watch How To Play</Text>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
  img: {
    // height: IMAGE_HEIGHT,
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
  },
  backIcon: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: 40,
    width: 40,
    position: 'absolute',
    top: getStatusBarHeight() + 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 1,
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
