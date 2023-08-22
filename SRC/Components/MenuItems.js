import {View, Text, ScrollView} from 'react-native';
import React from 'react';

export default function MenuItems() {
  const green = '#495E57';
  const yellow = '#F4CE14';
  const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
  ];
  return (
    <View style={{flex: 0.75}}>
      <ScrollView style={{padding: 40, backgroundColor: green}}>
        <Text
          style={{
            fontSize: 30,
            flexWrap: 'wrap',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          View Menu
        </Text>
        <Text>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
}
