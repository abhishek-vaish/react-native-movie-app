import React from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import { white } from "../constants";

const Input = (props) => {
  return (
    <View style={styles.input}>
      <Image style={{ marginRight: 5 }} source={props.source} />
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 5,
    width: 350,
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});
