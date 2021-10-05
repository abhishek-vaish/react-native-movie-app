import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Logo, Search } from "../constants";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={{ width: 105, height: 24 }} />
      <Image source={Search} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingBottom: 22,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
