import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfilePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile Page!</Text>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C0D6E4',
  },
});
