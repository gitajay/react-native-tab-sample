import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native'
import firebase from 'firebase';

import Main from './Main'

var config = {
  databaseURL: "https://my-mobile-app-2ced6.firebaseio.com",
  projectId: "my-mobile-app-2ced6",
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default function App() {
  //firebase.database().ref().child('users')
  //writeUserData('a@a.a','aj','dev')
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