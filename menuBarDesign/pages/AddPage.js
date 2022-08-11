import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PostPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Post Page!</Text>
    </View>
  );
};
export default PostPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C0D6E4',
  },
});
