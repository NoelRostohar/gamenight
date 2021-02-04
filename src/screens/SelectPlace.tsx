import React, { Fragment, useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import axios from '../../axiosInstance';

import Divider from '../components/Divider';

import theme from '../theme';
import { changePlace } from '../store/Gamenight/actions';
import { Place } from '../types';

const SelectPlace = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [placeSelected, setPlaceSelected] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/places')
      .then(({ data }) => {
        setPlaces(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.bg} contentContainerStyle={{ padding: 20 }}>
      {places.map(({ name, address, id }: Place) => (
        <Fragment key={id}>
          <TouchableOpacity
            onPress={() => {
              setPlaceSelected(true);
              dispatch(changePlace({ name, address, id }));
              navigation.goBack();
            }}
            disabled={placeSelected}
          >
            <View style={styles.container}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.address}>{address}</Text>
            </View>
          </TouchableOpacity>
          <Divider />
        </Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
  container: {
    paddingVertical: 20,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  name: {
    color: theme.light,
    fontWeight: 'bold',
    fontSize: 16,
  },
  address: {
    color: theme.faded,
    fontSize: 14,
  },
});

export default SelectPlace;
