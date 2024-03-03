import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllNews from './components/AllNews';
import EachNews from './components/EachNews';
import Saved from './components/Saved';
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllNews" component={AllNews} options={{ headerShown: false }} />
        <Stack.Screen name="EachNews" component={EachNews} />
        <Stack.Screen name="Saved" component={Saved} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
