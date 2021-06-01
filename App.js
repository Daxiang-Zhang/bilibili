/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Nav from './components/nav/Nav';
import Tabs from './components/tabs/Tabs';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const App = () => {
  return (
    <View style={styles.container}>
      <Nav />
      <Tabs />
    </View>
  );
};
export default App;
