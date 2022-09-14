import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

// screens
import {HomeScreen, SearchScreen, BookMarkScreen} from '../screens';

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="BottomNavigation">
      {/* <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      labeled={false}
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          // headerShown: false,
          // headerTitle: 'Home',
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          // title: 'Search',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BookMarkScreen"
        component={BookMarkScreen}
        options={{
          // title: 'Search',
          tabBarIcon: ({color}) => (
            <Entypo name="bookmark" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
