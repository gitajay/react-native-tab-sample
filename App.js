import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native'

import Main from './Main'

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});