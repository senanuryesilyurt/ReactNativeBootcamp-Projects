import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SearchPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Search Page!</Text>
    </View>
  );
};
export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C0D6E4',
  },
});
