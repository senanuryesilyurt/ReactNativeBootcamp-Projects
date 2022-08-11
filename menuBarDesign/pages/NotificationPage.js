import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NotificationPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Notifications Page!</Text>
    </View>
  );
};
export default NotificationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C0D6E4',
  },
});
