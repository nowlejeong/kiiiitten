import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../scene/HomeScreen";
import { DetailsScreen } from "../scene/DetailScreen";
import { SafeAreaView, StatusBar } from "react-native";
import { ListPage } from "../scene/ListPage";
import { TopTabsScreen } from "../scene/TopTabsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigator } from "../scene/BottomNavigitonScreen";

const { Navigator, Screen } = createStackNavigator();
// const { Navigator, Screen } = createBottomTabNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
    <Screen name="ListPage" component={ListPage} />
    <Screen name="TopTabs" component={TopTabsScreen} />
    {/* <TabNavigator /> */}
    <Screen name="BottomNavigation" component={TabNavigator} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <HomeNavigator />
  </NavigationContainer>
);
