import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import FlatListComponent from './components/FlatListComponents';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatListComponent />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
