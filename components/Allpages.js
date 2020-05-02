import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Home from './Home';
import Shopping from './Shopping';
// import Cart from './Cart'
// import Payment from './Payment'



export default function Allpages() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      <Shopping/>
      {/* <Cart/>
      <Payment/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
