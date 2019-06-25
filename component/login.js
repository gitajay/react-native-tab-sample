import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, Text, View, Keyboard, TouchableOpacity, Alert } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

import { writeUserData } from '../services/users'


export default function Login() {
    const [ userInfo, setUserInfo ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ userFName, setUserFName ] = useState('')
    const [ userLName, setUserLName ] = useState('')

  const _signIn = async () => {
    console.warn(userInfo)
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.configure();
      //await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.warn('User Info --> ', userInfo);
      setUserInfo(userInfo)
    } catch (error) {
      console.warn('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.warn('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.warn('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.warn('Play Services Not Available or Outdated');
      } else {
        console.warn('Some Other Error Happened');
      }
    }
  };
  const onLoginOrRegister = async () => {
    try {
      GoogleSignin.configure().then(() => {
        GoogleSignin.signIn()
          .then((data) => {
            console.warn('data',data)
          })
          .catch((error) => {
            console.warn('error',error)
          })
      })
      .catch((error) => {
        console.warn('configure error',error)
      })
    }
    catch(error) {
      console.warn('configure',error)
    }
  }

    useEffect(() => {
        //console.warn(userInfo)
        /*GoogleSignin.configure({
            //It is mandatory to call this method before attempting to call signIn()
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            // Repleace with your webClientId generated from Firebase console
            webClientId:
              '971072333389-4a2c0cf0lnu3gafsjh87vm93vl848206.apps.googleusercontent.com',
        });*/
    })

    const handleSubmit = () => {
      writeUserData(email, userFName, userLName)
    }

    return (
        <View style={[styles.container, { backgroundColor: '#ff4081' }]}> 
            <GoogleSigninButton
                style={{ width: 312, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={onLoginOrRegister}
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Your First name"
                maxLength={20}
                value={userFName}
                onBlur={Keyboard.dismiss}
                onChangeText={setUserFName}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your Last name"
                maxLength={20}
                value={userLName}
                onBlur={Keyboard.dismiss}
                onChangeText={setUserLName}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your Email"
                maxLength={20}
                value={email}
                onBlur={Keyboard.dismiss}
                onChangeText={setEmail}
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSubmit}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainercontainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    }
  });