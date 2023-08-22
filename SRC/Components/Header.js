import {View, Text} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={{flex: 0.2, backgroundColor: '#F4CE14'}}>
      <Text
        style={{
          padding: 25,
          fontSize: 40,
          color: 'black',
          textAlign: 'center',
        }}
        numberOfLines={2}>
        Welcome To <Text style={{fontWeight: 'bold'}}>Lemon Loop</Text>
      </Text>
    </View>
  );
}
