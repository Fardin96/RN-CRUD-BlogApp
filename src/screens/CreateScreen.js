import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPosts } = useContext(Context);

  return (
    <View>
      <Text style={styles.titleStyle}>Title</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={setTitle}
      />
      <Text>Content Body</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="Post"
        onPress={() =>
          addBlogPosts(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 15,
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
  },
  contentStyle: {},
  contentInputStyle: {},
});
