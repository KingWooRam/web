import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page46 from './src/components/Page46';
import Page47 from './src/components/Page47';
import Page48 from './src/components/Page48';
import Page49 from './src/components/Page49';
import Page50 from './src/components/Page50';
import Page51 from './src/components/Page51';
import LoginScreen from "./src/components/LoginScreen";
import Page52_DiaryScreen from "./src/components/Page52_DiaryScreen";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
     
    </Stack.Navigator>
  );
};
export default function Layout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Page46" component={Page46} options={{ title: '46페이지' }} />
        <Stack.Screen name="Page47" component={Page47} options={{ title: '47페이지' }} />
        <Stack.Screen name="Page48" component={Page48} options={{ title: '48페이지' }} />
        <Stack.Screen name="Page49" component={Page49} options={{ title: '49페이지' }} />
        <Stack.Screen name="Page50" component={Page50} options={{ title: '50페이지' }} />
        <Stack.Screen name="Page51" component={Page51} options={{ title: '51페이지' }} />
        <Stack.Screen name="Diary" component={Page52_DiaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
