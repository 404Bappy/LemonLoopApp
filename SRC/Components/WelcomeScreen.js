import {View, Text} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          padding: 40,
          textAlign: 'center',
          color: '#EDEFEE',
        }}>
        Welcome To Lemon Loop
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          textAlign: 'center',
          color: '#EDEFEE',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </View>
  );
}
