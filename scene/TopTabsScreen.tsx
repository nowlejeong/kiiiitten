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
  CheckBox,
  Toggle,
} from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const useToggleState = (initialState = false) => {
  const [checked, setChecked] = React.useState(initialState);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  return { checked, onChange: onCheckedChange };
};

const data = new Array(8).fill({
  title: "Item",
});

export const TopTabsScreen = ({ navigation }: any) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [allChecked, setAllChecked] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(false);
  const [readChecked, setReadChecked] = React.useState(false);
  const [writeChecked, setWriteChecked] = React.useState(false);
  const primaryToggleState = useToggleState();
  const successToggleState = useToggleState();
  const infoToggleState = useToggleState();
  const warningToggleState = useToggleState();
  const dangerToggleState = useToggleState();
  const basicToggleState = useToggleState();
  const controlToggleState = useToggleState();
  const smallInputState = useInputState();
  const mediumInputState = useInputState();
  const largeInputState = useInputState();
  const multilineInputState = useInputState();

  const onGroupCheckedChange = (checked) => {
    setReadChecked(checked);
    setWriteChecked(checked);
    setAllChecked(checked);
    updateGroup(checked, checked);
  };

  const onReadCheckedChange = (checked) => {
    setReadChecked(checked);
    updateGroup(checked, writeChecked);
  };

  const onWriteCheckedChange = (checked) => {
    setWriteChecked(checked);
    updateGroup(checked, readChecked);
  };

  const updateGroup = (...states) => {
    const someChecked = states.some((item) => item === true);
    const everyChecked = states.every((item) => item === true);

    if (someChecked && !everyChecked) {
      setAllChecked(true);
      setIndeterminate(true);
    } else if (!someChecked && !everyChecked) {
      setAllChecked(false);
      setIndeterminate(false);
    } else if (everyChecked) {
      setAllChecked(true);
      setIndeterminate(false);
    }
  };

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
            <React.Fragment>
              <Input
                style={styles.input}
                size="small"
                placeholder="Small"
                {...smallInputState}
              />

              <Input
                style={styles.input}
                size="medium"
                placeholder="Medium"
                {...mediumInputState}
              />

              <Input
                style={styles.input}
                size="large"
                placeholder="Large"
                {...largeInputState}
              />

              <Input
                multiline={true}
                textStyle={{ minHeight: 64 }}
                placeholder="Multiline"
                {...multilineInputState}
              />
            </React.Fragment>
          </Layout>
        </Tab>
        <Tab title="ORDERS">
          <Layout style={styles.tabContainer}>
            <Toggle
              style={styles.toggle}
              status="primary"
              {...primaryToggleState}
            >
              Primary
            </Toggle>

            <Toggle
              style={styles.toggle}
              status="success"
              {...successToggleState}
            >
              Success
            </Toggle>

            <Toggle style={styles.toggle} status="info" {...infoToggleState}>
              Info
            </Toggle>

            <Toggle
              style={styles.toggle}
              status="warning"
              {...warningToggleState}
            >
              Warning
            </Toggle>

            <Toggle
              style={styles.toggle}
              status="danger"
              {...dangerToggleState}
            >
              Danger
            </Toggle>

            <Toggle style={styles.toggle} status="basic" {...basicToggleState}>
              Basic
            </Toggle>

            <View style={styles.controlContainer}>
              <Toggle
                style={styles.toggle}
                status="control"
                {...controlToggleState}
              >
                Control
              </Toggle>
            </View>
          </Layout>
        </Tab>
        <Tab title="TRANSACTIONS">
          <Layout style={styles.tabContainer}>
            <View style={{ flex: 1 }}></View>
            <React.Fragment>
              <CheckBox
                style={styles.group}
                checked={allChecked}
                indeterminate={indeterminate}
                onChange={onGroupCheckedChange}
              >
                Permissions
              </CheckBox>
              <CheckBox
                style={styles.option}
                checked={readChecked}
                onChange={onReadCheckedChange}
              >
                Read
              </CheckBox>
              <CheckBox
                style={styles.option}
                checked={writeChecked}
                onChange={onWriteCheckedChange}
              >
                Write
              </CheckBox>
            </React.Fragment>
            <View style={{ flex: 2 }}></View>
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
    paddingBottom: 150,
    paddingHorizontal: 30,
  },
  group: {
    marginVertical: 4,
  },
  option: {
    marginVertical: 4,
    marginHorizontal: 12,
  },
  toggle: {
    margin: 2,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 8,
    padding: 6,
    backgroundColor: "#3366FF",
  },
  input: {
    marginVertical: 2,
  },
});
