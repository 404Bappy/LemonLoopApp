import {View, Text} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={{backgroundColor: '#F4CE14'}}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black ',
          fontSize: 16,
          padding: 5,
        }}>
        © All Right Reserved by Lemon Loop
      </Text>
    </View>
  );
}
