import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import estilo from './estilos';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import Tela4 from './Tela4';
import Tela5 from './Tela5';
import Tela6 from './Tela6';

// const Stack = createBottomTabNavigator();

const Stack =  createStackNavigator();

function App() {
  const Tela =
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Tela1} options={{ headerShown: false }}/>
        <Stack.Screen name="Tela2" component={Tela2} options={{ headerShown: false }}/>
        <Stack.Screen name="Tela3" component={Tela3} options={{ headerShown: false }}/>
        <Stack.Screen name="Tela4" component={Tela4} options={{ headerShown: false }}/>
        <Stack.Screen name="Tela5" component={Tela5} options={{ headerShown: false }}/>
        <Stack.Screen name="Tela6" component={Tela6} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>


  return Tela;
}

export default App;
