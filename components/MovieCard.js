import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { gray, white } from "../constants";
import { dateFormatter } from "./helper";

const MovieCard = (props) => {
  const imageURL = "https://image.tmdb.org/t/p/w500";

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
        <SharedElement id={props.id}>
          <Image
            style={{ width: 150, height: 250, borderRadius: 10 }}
            resizeMode="contain"
            source={{
              uri: `${imageURL}` + props.imageURL,
            }}
          />
        </SharedElement>
        <Text
          style={{
            color: white,
            fontSize: 16,
            width: 140,
            height: 20,
            fontWeight: "800",
          }}
        >
          {props.title}
        </Text>
        <Text style={{ color: gray, fontSize: 13, fontWeight: "700" }}>
          {dateFormatter(props.date)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginTop: 20,
  },
});
