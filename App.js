import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from './Src/Splash';
import Home from './Src/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoPlayers from './Src/VideoPlayers';
import Search from './Src/Search';

const Stack = createNativeStackNavigator();
const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoPlayers" component={VideoPlayers} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
