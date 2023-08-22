import {View, Text} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={{flex: 0.12, backgroundColor: '#F4CE14'}}>
      <Text style={{padding: 25, fontSize: 30, color: 'black'}}>
        Welcome To LemonLoop
      </Text>
    </View>
  );
}
