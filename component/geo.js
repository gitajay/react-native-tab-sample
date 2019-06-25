import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet} from 'react-native'

class SwichExample extends Component {
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {styles.boldText}>
               Initial position:
            </Text>
            
            <Text>
               AJ
            </Text>
            
            <Text style = {styles.boldText}>
               Current position:
            </Text>
            
            <Text>
               AJ
            </Text>
         </View>
      )
   }
}
export default SwichExample

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   boldText: {
      fontSize: 30,
      color: 'red',
   }
})