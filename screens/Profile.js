import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { gray, Photo, primaryColor, secondaryColor, white } from "../constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { auth } from "../firebase.config";

const Profile = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: secondaryColor }}>
      <View style={{ paddingLeft: 20, alignItems: "center", marginTop: 50 }}>
        <Image
          style={{ width: 120, height: 120, borderRadius: 20 }}
          source={Photo}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 24,
              color: white,
              fontWeight: "800",
              marginTop: 15,
            }}
          >
            Abhishek Vaish
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: white,
          height: 600,
          marginTop: 50,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Options name="lock" text="Privacy and Security" />
        <Options name="certificate" text="Premium Setting" />
        <Options name="edit" text="Edit Profile" />
        <Options
          name="sign-out"
          text="Signout"
          onPress={() => {
            auth.signOut();
            navigation.replace("Login");
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const Options = (props) => {
  return (
    <View
      style={{
        marginTop: 40,
        marginBottom: 20,
      }}
    >
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: primaryColor,
                width: 40,
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 5,
              }}
            >
              <FontAwesome name={props.name} size={24} color={white} />
            </View>
            <Text style={{ fontSize: 18, fontWeight: "700", marginLeft: 10 }}>
              {props.text}
            </Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color={gray} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
