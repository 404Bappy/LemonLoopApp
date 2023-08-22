import React from 'react';

import {StyleSheet, View} from 'react-native';
import Header from './SRC/Components/Header';

function App() {
  return (
    // <View style={styles.sectionContainer}>
    //   <Header />
    // </View>

    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#495E57',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;