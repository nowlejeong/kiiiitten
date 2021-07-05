import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Card,
  Button,
  OverflowMenu,
  MenuItem,
} from "@ui-kitten/components";

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

export const DetailsScreen = ({ navigation }: any) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const navigateBack = () => {
    navigation.goBack();
  };

  const Header = (props: any) => (
    <View {...props}>
      <Text category="h6">Maldives</Text>
      <Text category="s1">By Wikipedia</Text>
    </View>
  );

  const Footer = (props: any) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button style={styles.footerControl} size="small" status="basic">
        CANCEL
      </Button>
      <Button style={styles.footerControl} size="small">
        ACCEPT
      </Button>
    </View>
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuButton = () => (
    <Button
      style={styles.button}
      accessoryLeft={HeartIcon}
      onPress={toggleMenu}
    >
      PRESS ME
    </Button>
  );

  const HeartIcon = (props: any) => <Icon {...props} name="heart" />;
  const ForwardIcon = (props: any) => (
    <Icon {...props} name="arrow-ios-forward" />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopNavigation
        title="MyApp"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h1">DETAILS</Text>
        <Card style={styles.card} header={Header} footer={Footer}>
          <Text>
            The Maldives, officially the Republic of Maldives, is a small
            country in South Asia, located in the Arabian Sea of the Indian
            Ocean. It lies southwest of Sri Lanka and India, about 1,000
            kilometres (620 mi) from the Asian continent
          </Text>
        </Card>
        <View style={{ flex: 1 }}></View>
        <OverflowMenu
          fullWidth={true}
          onSelect={toggleMenu}
          visible={menuVisible}
          anchor={renderMenuButton}
          onBackdropPress={toggleMenu}
        >
          <MenuItem
            title="1st Option"
            accessoryRight={ForwardIcon}
            onPress={() => navigation.navigate("ListPage")}
          />
          <MenuItem
            title="2nd Option"
            accessoryRight={ForwardIcon}
            onPress={() => navigation.navigate("TopTabs")}
          />
        </OverflowMenu>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 2,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    margin: 2,
  },
  button: {
    margin: 2,
  },
});
