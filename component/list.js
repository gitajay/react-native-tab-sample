import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { readUserData } from '../services/users'

class ScrollViewExample extends Component {
   constructor(props) {
       super(props)
       this.state = { userList: [] }
   }
   componentDidMount() {
        readUserData().then(snapshot => {
            this.setState({ userList: Object.values(snapshot.val()) })
        })
   }
   render() {
    console.warn(this.state.userList,readUserData)
    const { userList } = this.state
    if(!userList)
        return null
      return (
         <View>
            <ScrollView>
               {
                  this.state.userList.map((item, index) => (
                     <View key = {index} style = {styles.item}>
                        <Text>{item.fname}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})