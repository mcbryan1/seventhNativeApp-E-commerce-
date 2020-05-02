import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Allpages from './components/Allpages'



export default function App() {
  return (
    <View style={styles.container}>
      <Allpages/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
