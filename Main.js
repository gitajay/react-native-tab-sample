import React, { useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
  );
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );

export default function Main() {
    const [ navigationState, setNavigationState ] = useState(
        {
            index: 0,
            routes: [
              { key: 'first', title: 'Stop Watch' },
              { key: 'second', title: 'What Next' },
            ],
          }
    )
    
    return (
        <TabView
            navigationState={navigationState}
            renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            })}
            onIndexChange={index => setNavigationState({ ...navigationState,index })}
            initialLayout={{ width: Dimensions.get('window').width }}
        />
    )
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });