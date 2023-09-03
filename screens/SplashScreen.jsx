import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import gif from "../assets/moon-gif.gif"
import { StackActions, useNavigation } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    // Navigate to the sign in screen after 5 seconds
    setTimeout(() => {
      // Reset the stack and navigate to the main screen
      navigation.dispatch(
        StackActions.replace('Sign-in')
      );
    }, 5000); // 2 seconds delay
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C4FAEA' }}>
      <Image 
        source={gif} 
        style={{ width: '100%', height: '50%', resizeMode: 'cover' }}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})