import React, { useState, useEffect } from 'react';
import {
  Alert,
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Button,
} from 'react-native';
import { format } from 'date-fns';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import Loading from '../components/Loading';
import GameSelect from '../components/GameSelect';

import theme from '../theme';
import { GlobalState } from '../store';
import { changeDate, changeTime } from '../store/Gamenight/actions';

type DateTimePickerMode = 'date' | 'time';

const AddGamenight = () => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [mode, setMode] = useState<DateTimePickerMode>('date');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { date, time, place, loading, status } = useSelector(
    (state: GlobalState) => state.gamenight
  );

  const androidDateChange = (_: Event, selectedDate: any) => {
    const currentDate = selectedDate || date;
    const currentTime = selectedDate || time;
    setMode((prev) => {
      if (prev === 'date') {
        return 'time';
      } else {
        setShowDatePicker(false);
        return 'date';
      }
    });
    mode === 'date'
      ? dispatch(changeDate(currentDate))
      : dispatch(changeTime(currentTime));
  };

  useEffect(() => {
    if (!loading && status === 'error')
      Alert.alert('Error', 'There was a problem with the server.');
  }, [loading, status]);

  return (
    <>
      {loading && status === 'fetching' && <Loading />}
      <ScrollView style={styles.bg} contentContainerStyle={{ padding: 20 }}>
        {showDatePicker && Platform.OS === 'android' && (
          <DateTimePicker
            onChange={androidDateChange}
            value={new Date()}
            mode={mode}
            minimumDate={new Date()}
            textColor={theme.light}
            is24Hour
          />
        )}
        <Modal
          isVisible={showDatePicker && Platform.OS === 'ios'}
          animationIn="bounceInUp"
          useNativeDriver
          onBackdropPress={() => {}}
          useNativeDriverForBackdrop
          backdropOpacity={0.95}
        >
          <View style={styles.iosModal}>
            <DateTimePicker
              onChange={(e: Event, selectedDate: any) =>
                dispatch(changeDate(selectedDate))
              }
              value={date}
              mode="date"
              minimumDate={new Date()}
              textColor={theme.light}
            />
            <DateTimePicker
              onChange={(e: Event, selectedTime: any) =>
                dispatch(changeTime(selectedTime))
              }
              value={time}
              mode="time"
              minimumDate={new Date()}
              textColor={theme.light}
              is24Hour
            />
            <Button title="Save" onPress={() => setShowDatePicker(false)} />
          </View>
        </Modal>
        <View style={styles.optionsRow}>
          <View style={styles.optionsContainer}>
            <Text style={styles.optionsTitle}>When?</Text>
            <Text style={styles.optionsText}>
              {!!date
                ? `${format(date, 'dd/MM')}, ${format(time, 'kk:mm')}`
                : 'No date selected.'}
            </Text>
            <TouchableOpacity>
              <Text
                style={styles.optionsButton}
                onPress={() => setShowDatePicker(true)}
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionsContainer}>
            <Text style={styles.optionsTitle}>Where?</Text>
            <Text style={styles.optionsText}>
              {!!place.name ? place.name : 'To be determined'}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectPlace')}
            >
              <Text style={styles.optionsButton}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <GameSelect />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
  iosModal: {
    flex: 1,
    justifyContent: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 35,
  },
  optionsContainer: {
    flex: 1,
  },
  optionsTitle: {
    fontSize: 16,
    color: theme.faded,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  optionsText: {
    fontSize: 14,
    color: theme.light,
  },
  optionsButton: {
    color: theme.primary,
    textTransform: 'uppercase',
    fontSize: 14,
    marginTop: 6,
  },
});

export default AddGamenight;
