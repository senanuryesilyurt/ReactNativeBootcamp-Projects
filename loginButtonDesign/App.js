import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container_button}>
        <TouchableOpacity
          onPress={() => Alert.alert('Login succcesfully with Facebook')}>
          <Image
            source={require('./assets/icons8-facebook-48.png')}
            style={styles.icon_facebook}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_facebook}
          onPress={() => Alert.alert('Login succcesfully with Facebook')}>
          <Text style={styles.text}> Login Using Facebook </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container_button}>
        <TouchableOpacity
          onPress={() => Alert.alert('Login succcesfully with Google Plus')}>
          <Image
            source={require('./assets/icons8-google-plus-squared-48.png')}
            style={styles.icon_googleplus}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_googlePlus}
          onPress={() => Alert.alert('Login succcesfully with Google Plus')}>
          <Text style={styles.text}> Login Using Google Plus </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container_button: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  icon_facebook: {
    backgroundColor: '#4267B2',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: 30,
    height: 36,
    marginTop: 300,
  },
  icon_googleplus: {
    backgroundColor: '#DB4437',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    width: 29,
    height: 36,
  },
  button_facebook: {
    backgroundColor: '#4267B2',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 300,
  },
  button_googlePlus: {
    backgroundColor: '#DB4437',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});
