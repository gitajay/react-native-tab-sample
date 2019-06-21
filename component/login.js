import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';


export default function Login() {
    const [ userInfo, setUserInfo ] = useState('')

  const _signIn = async () => {
    console.warn(userInfo)
    //Prompts a modal to let the user sign in into your application.
    try {
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

    useEffect(() => {
        //console.warn(userInfo)
        GoogleSignin.configure({
            //It is mandatory to call this method before attempting to call signIn()
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            // Repleace with your webClientId generated from Firebase console
            webClientId:
              '582154471455-9rg1kel03io0nv9ovenon8a4uctmkabb.apps.googleusercontent.com',
        });
    })

    return (
        <View style={[styles.container, { backgroundColor: '#ff4081' }]}> 
            <GoogleSigninButton
                style={{ width: 312, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={_signIn}
            />
        </View>
    )
}

  const _getCurrentUser = async () => {
    //May be called eg. in the componentDidMount of your main component.
    //This method returns the current user
    //if they already signed in and null otherwise.
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      console.error(error);
    }
  };
  const _signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  const _revokeAccess = async () => {
    //Remove your application from the user authorized applications.
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
    } catch (error) {
      console.error(error);
    }
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });