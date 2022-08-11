import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C0D6E4',
  },
});
