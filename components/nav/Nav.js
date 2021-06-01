import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import Myicon from './../icons/Icons';
import Feather from 'react-native-vector-icons/Feather';
const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    flexBasis: 40,
    paddingLeft: 18,
    paddingRight: 12,
  },
  navLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  navRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  downBtn: {
    width: 72,
    height: 24,
  },
  downBtnTxt: {
    width: '100%',
    height: '100%',
    lineHeight: 24,
    textAlign: 'center',
    borderRadius: 3,
    backgroundColor: '#fb7299',
    color: '#fff',
    fontSize: 12,
  },
});
function Nav() {
  return (
    <View style={styles.nav}>
      <View style={styles.navLeft}>
        <Myicon name="logo" size={30} color="#fb7299" />
      </View>
      <View style={styles.navRight}>
        <Feather name="search" size={24} color="#ccc" />
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TouchableHighlight
          onPress={() => alert('Pressed!')}
          style={styles.downBtn}>
          <Text style={styles.downBtnTxt}>下载App</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Nav;
