import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import IconText from '../../components/IconText';
import ParticipantCard from '../../components/ParticipantCard';

import theme from '../../theme';
import { GamenightType, Participant } from '../../types';

interface OverviewProps {
  gamenight: GamenightType;
}

const Overview: React.FC<OverviewProps> = ({
  gamenight: { date, participants, place, time },
}) => {
  return (
    <View style={styles.bg}>
      <View style={styles.iconContainer}>
        <IconText
          icon="calendar-today"
          size={16}
          text={format(new Date(date), 'dd/MM')}
          color={theme.light}
        />
      </View>
      <View style={styles.iconContainer}>
        <IconText
          icon="timer"
          size={16}
          text={format(new Date(time), 'kk:mm')}
          color={theme.light}
        />
      </View>
      <View style={styles.iconContainer}>
        <IconText
          icon="location-pin"
          size={16}
          text={place ? place.name : 'To be determined'}
          color={theme.light}
          subtext={place && place.address}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Participants</Text>
      </View>
      {participants.map((participant: Participant) => {
        return (
          <ParticipantCard key={participant.id} participant={participant} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  iconContainer: {
    marginVertical: 10,
  },
  section: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    color: theme.faded,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default memo(Overview);
