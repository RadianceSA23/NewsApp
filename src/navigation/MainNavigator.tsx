import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WebViewScreen from '../screens/WebViewScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
 <Stack.Screen
      name="HomeMain"
      component={HomeScreen}
      options={{ headerShown: true, title: 'News Headlines' }}
    />
    <Stack.Screen
      name="NewsDetail"
      component={NewsDetailScreen}

    />
     <Stack.Screen name="WebView" component={WebViewScreen} />
  </Stack.Navigator>
);

export const MainNavigator = () => {
  return (
  
<Stack.Navigator>
 <Stack.Screen
      name="HomeMain"
      component={HomeScreen}
      options={{ headerShown: true, title: 'News Headlines' }}
    />
    <Stack.Screen
      name="NewsDetail"
      component={NewsDetailScreen}
  
    />
     <Stack.Screen name="WebView" component={WebViewScreen} />
  </Stack.Navigator>
  );
};
