import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicialPage from './components/Inicial/InicialPage';
import LoginScreen from './components/Login/LoginScreen';
import RegisterScreen from './components/Cadastro/RegisterScreen';
import HomeScreen from './components/Home/HomeScreen';
import HealthSocial from './components/HealthSocial/HealthSocial';
import Alimentacao from './components/Alimentacao/Alimentacao';
import UserScreen from './components/User/UserScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InicialPage">
        <Stack.Screen
          name="InicialPage"
          component={InicialPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="HealthSocial"
          component={HealthSocial}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Alimentacao"
          component={Alimentacao}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
