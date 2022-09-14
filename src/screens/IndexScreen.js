import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPosts } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Blog", { id: item.id })}
            >
              <View style={styles.mainStyle}>
                <Text style={styles.textStyle}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                  <Feather style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Create");
        }}
      >
        <Feather name="plus" style={styles.headerButtonStyle} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
  },
  textStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
  },
  headerButtonStyle: {
    fontSize: 30,
    marginRight: 15,
  },
});

export default IndexScreen;
