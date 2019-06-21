import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view';

import SplashScreen from './splash/splashInit'


const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
  );
  const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  );

export default function Main() {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ navigationState, setNavigationState ] = useState(
        {
            index: 0,
            routes: [
              { key: 'first', title: 'Mark you footprints' },
              { key: 'second', title: 'What Next' },
            ],
        }
    )

    useEffect(() =>  {
        setTimeout(
            () => { setIsLoading(false) },
            2000
        )
    })

    if (isLoading)
        return <SplashScreen />
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

const performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
  });