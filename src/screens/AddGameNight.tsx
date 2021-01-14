import React, { useState, Fragment } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Platform,
} from 'react-native';
import { format } from 'date-fns';

import Input from '../components/Input';
import Game from '../components/Game';
import Divider from '../components/Divider';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import theme from '../theme';
import { games } from '../api';

type DateTimePickerMode = 'date' | 'time';

const AddGameNight = () => {
  const [filterValue, setFilterValue] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<Date>(new Date());
  const [showDateTime, setShowDateTime] = useState<boolean>(false);
  const [mode, setMode] = useState<DateTimePickerMode>('date');

  const dateChange = (_: Event, selectedDate: any) => {
    const currentDate = selectedDate || date;
    const currentTime = selectedDate || time;
    setMode((prev) => {
      if (prev === 'date') {
        return 'time';
      } else {
        setShowDateTime(Platform.OS === 'ios');
        return 'date';
      }
    });
    mode === 'date' ? setDate(currentDate) : setTime(currentTime);
  };

  return (
    <ScrollView style={styles.bg} contentContainerStyle={{ padding: 20 }}>
      {showDateTime && (
        <DateTimePicker
          onChange={dateChange}
          value={new Date()}
          mode={mode}
          minimumDate={new Date()}
          textColor={theme.light}
          is24Hour
        />
      )}
      <View style={styles.optionsRow}>
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>When?</Text>
          <Text style={styles.optionsText}>
            {!!date
              ? `${format(date, 'dd/MM/yy')}, ${format(time, 'kk:mm')}`
              : 'No date selected.'}
          </Text>
          <TouchableOpacity>
            <Text
              style={styles.optionsButton}
              onPress={() => setShowDateTime(true)}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>Where?</Text>
          <Text style={styles.optionsText}>To be determined</Text>
          <TouchableOpacity>
            <Text style={styles.optionsButton}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.filterRow}>
        <Input
          flexSize={2}
          onChangeText={(text: string) => setFilterValue(text)}
          value={filterValue}
          icon="search"
          placeholder="Search for games.."
        />
        <TouchableOpacity>
          <Text style={styles.filterButton}>Select All</Text>
        </TouchableOpacity>
      </View>
      {games.map((game) => {
        return (
          <Fragment key={game.id}>
            <View style={styles.gameRow}>
              <Game game={game} />
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                ios_backgroundColor="#3e3e3e"
              />
            </View>
            <Divider />
          </Fragment>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
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
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  filterButton: {
    color: theme.primary,
    textTransform: 'uppercase',
    fontSize: 14,
    marginLeft: 20,
  },
  gameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default AddGameNight;
