import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Title</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Content</Text>
      <TextInput value={content} onChangeText={setContent} />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
