
import React, { Component } from'react';
import Home from './Screen/Home'
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Display from './Screen/Display';
import update from './Screen/Update';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
 
  return (

    <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="update" component={update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


