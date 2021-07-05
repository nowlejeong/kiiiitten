import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { SettingsScreen } from "./Menus";

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="USERS" />
    <BottomNavigationTab title="ORDERS" />
    <BottomNavigationTab title="ORDERS" />
  </BottomNavigation>
);

export const TabNavigator = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
    {/* <View style={{}}></View> */}
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Screen name="Users" component={UsersScreen} />
      <Screen name="Orders" component={OrdersScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  </SafeAreaView>
);
