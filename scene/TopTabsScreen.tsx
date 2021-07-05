import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Card,
  Icon,
  Layout,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
  Tab,
  TabView,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

const data = new Array(8).fill({
  title: "Item",
});

export const TopTabsScreen = ({ navigation }: any) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />

      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title="USERS">
          <Layout style={styles.tabContainer}>
            <Text category="h5">USERS WINNER</Text>
            <Text category="h5">USERS WINNER</Text>
            <Text category="h5">USERS WINNER</Text>
            <Text category="h5">USERS WINNER</Text>
          </Layout>
        </Tab>
        <Tab title="ORDERS">
          <Layout style={styles.tabContainer}>
            <Text category="h5">ORDERS</Text>
            <Text category="h5">ORDERS</Text>
            <Text category="h5">ORDERS</Text>
            <Text category="h5">ORDERS</Text>
            <Text category="h5">ORDERS</Text>
            <Text category="h5">ORDERS</Text>
            <Text category="h5">ORDERS</Text>
            <Text category="h5">ORDERS</Text>
          </Layout>
        </Tab>
        <Tab title="TRANSACTIONS">
          <Layout style={styles.tabContainer}>
            <Text category="h5">TRANSACTIONS</Text>
            <Text category="h5">TRANSACTIONS</Text>
            <Text category="h5">TRANSACTIONS</Text>
            <Text category="h5">TRANSACTIONS</Text>
            <Text category="h5">TRANSACTIONS</Text>
          </Layout>
        </Tab>
      </TabView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: "100%",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
