import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AppStackScreenProps } from "app/navigators";
import { useNavigation } from "@react-navigation/native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

function ProfileScreen({ route }) {
    const navigation = useNavigation()
    return (
        navigation.navigate("Welcome")
    );
  }

  const TopTabNavigator = () => {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="Post Room" component={FeedScreen} />
        <TopTab.Screen name="Rooms" component={NotificationsScreen} />
      </TopTab.Navigator>
    );
  };
  
  export const App = () => {
    return (
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{headerShown: false}}>
          <TopTab.Screen name="Top Tabs will" component={TopTabNavigator} />
          <BottomTab.Screen name="Rooms" component={NotificationsScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  };

export function Menu() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     {/* <Tab.Screen name="Home" onPress={() => navigation.navigate("Welcome")} /> */}
    //     <Tab.Screen name="Home" component={route}/>
    //     <Tab.Screen name="Profile" />
    //   </Tab.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
    <TopTab.Screen name="Top Tabs will" component={TopTabNavigator} />
    <BottomTab.Screen name="Rooms" component={NotificationsScreen} />
    </BottomTab.Navigator>
    </NavigationContainer>
  );
}