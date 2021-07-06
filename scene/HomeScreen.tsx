import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Button,
  Layout,
  Icon,
  Text,
  Avatar,
  Divider,
  Input,
  AutocompleteItem,
  Autocomplete,
} from "@ui-kitten/components";
import { ThemeContext } from "../assets/theme-context";

const movies = [
  { title: "Star Wars" },
  { title: "Back to the Future" },
  { title: "The Matrix" },
  { title: "Inception" },
  { title: "Interstellar" },
];

const filter = (item, query) =>
  item.title.toLowerCase().includes(query.toLowerCase());

const StarIcon = (props) => <Icon {...props} name="star" />;

export const HomeScreen = ({ navigation }: any) => {
  const themeContext = React.useContext(ThemeContext);
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const shakeIconRef = React.useRef(null);
  const [value2, setValue2] = React.useState(null);
  const [data, setData] = React.useState(movies);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderInputIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={!secureTextEntry ? "eye" : "eye-off"} />
    </TouchableWithoutFeedback>
  );

  const GoogleIcon = (props: any) => (
    <Icon
      {...props}
      ref={shakeIconRef}
      animation="shake"
      name="google"
      {...props}
    />
  );

  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  const renderShakeIcon = (props: any) => (
    <Icon {...props} ref={shakeIconRef} animation="shake" name="shake" />
  );

  const onSelect = (index) => {
    setValue(data[index].title);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(movies.filter((item) => filter(item, query)));
  };

  const clearInput = () => {
    setValue("");
    setData(movies);
  };

  const renderOption = (item, index) => (
    <AutocompleteItem key={index} title={item.title} accessoryLeft={StarIcon} />
  );

  const renderCloseIcon = (props) => (
    <TouchableWithoutFeedback onPress={clearInput}>
      <Icon {...props} name="close" />
    </TouchableWithoutFeedback>
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Input
          style={styles.input}
          placeholder="Input"
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={setValue}
          accessoryRight={renderInputIcon}
        />

        <View style={[styles.details, { justifyContent: "center" }]}>
          <Avatar size="giant" source={require("../assets/behance.png")} />
          <Text style={styles.title} category="h2">
            UI Kitten
          </Text>
        </View>
        {/* <Divider /> */}

        <Autocomplete
          placeholder="Place your Text"
          value={value}
          accessoryRight={renderCloseIcon}
          onChangeText={onChangeText}
          onSelect={onSelect}
          style={{ margin: 20, marginBottom: 0 }}
        >
          {data.map(renderOption)}
        </Autocomplete>
        <Button
          style={styles.installButton}
          onPress={() => navigation.navigate("BottomNavigation")}
        >
          INSTALL
        </Button>
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button
            accessoryLeft={GoogleIcon}
            style={{ marginVertical: 4 }}
            onPress={navigateDetails}
          >
            SIGN IN WITH GOOGLE
          </Button>
          <Button
            appearance="ghost"
            // status='danger'
            style={{ margin: 2 }}
            accessoryLeft={GoogleIcon}
            onPress={() => {
              shakeIconRef.current.startAnimation();
            }}
          >
            SHAKE
          </Button>
          <Layout style={{ flexDirection: "row" }}>
            <Layout style={styles.layout} level="4">
              <Text category="h1">4</Text>
            </Layout>
            <Layout style={styles.layout} level="3">
              <Text category="h2">3</Text>
            </Layout>

            <Layout style={styles.layout} level="2">
              <Text category="h3">2</Text>
            </Layout>

            <Layout style={styles.layout} level="1">
              <Text category="h4">1</Text>
            </Layout>
          </Layout>
        </Layout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  title: {
    marginHorizontal: 8,
  },
  installButton: {
    marginVertical: 4,
  },
  input: {
    flex: 1,
    margin: 20,
  },
});
