import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

import theme from '../theme';

const Loading = () => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.bg}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});

export default Loading;
