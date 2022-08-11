import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import NotificationPage from '../pages/NotificationPage';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 45,
        height: 45,
        borderRadius: 35,
        backgroundColor: '#fff',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: {
          headerShown: false,
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
        },
      }}>
      <Tab.Screen
        name=""
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 23,
              }}>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF7F50' : '#748c94',
                }}
              />
              <Text
                style={{
                  tintColor: focused ? '#FF7F50' : '#748c94',
                  fontSize: 12,
                }}></Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={SearchPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 15,
              }}>
              <Image
                source={require('../assets/icons/search.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF7F50' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={AddPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 7,
              }}>
              <Image
                source={require('../assets/icons/plus.png')}
                resizeMode="contain"
                style={{
                  top: -5,
                  width: 45,
                  height: 45,
                }}
              />
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="   "
        component={NotificationPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 15,
              }}>
              <Image
                source={require('../assets/icons/bell.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF7F50' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="    "
        component={ProfilePage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 15,
              }}>
              <Image
                source={require('../assets/icons/user.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FF7F50' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
