import {TouchableOpacity} from 'react-native';
import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

// screens
import {HomeScreen, SearchScreen, BookMarkScreen, DetailNews} from '../screens';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const RootNavigation = () => {
  const navigation = useNavigation();
  // options for stack navigator
  const stackOptions = title => ({
    headerTitle: title,
    headerTitleStyle: {
      fontSize: 18,
    },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerShadowVisible: false,
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Entypo name="chevron-thin-left" size={24} style={{marginRight: 10}} />
      </TouchableOpacity>
    ),
  });

  return (
    <Stack.Navigator initialRouteName="BottomNavigation">
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailNews"
        component={DetailNews}
        options={{headerShown: false}}
      />
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
