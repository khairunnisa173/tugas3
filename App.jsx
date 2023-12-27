import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Profile from './src/screen/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailDoa from './src/screen/DetailDoa';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator  >
      
      <Tab.Screen name='Home'
       options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={Home} />
      <Tab.Screen name='Search'  
      options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }} 
        component={DetailDoa} />
      <Tab.Screen name='Profile'
        options={{ headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return ( 
    
    <NavigationContainer >
      
      <Stack.Navigator >
        <Stack.Screen
        name='Main'
        options={{headerShown: false}}
        component={Tabs}
        />
        {/* <Stack.Screen name='Search' component={Search} /> */}
      </Stack.Navigator>
      </NavigationContainer> 
  );
};
export default App;