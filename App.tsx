import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import Footer from './SRC/Components/Footer';
import Header from './SRC/Components/Header';
import MenuItems from './SRC/Components/MenuItems';
import WelcomeScreen from './SRC/Components/WelcomeScreen';

function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <ScrollView>
          <Header />
          <WelcomeScreen />
          <MenuItems />
        </ScrollView>
      </View>
      <View>
        <Footer />
      </View>
    </>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,

//     backgroundColor: '#495E57',
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
