import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import Watch from "../screens/Watch";
import Bookmark from "../screens/Bookmark";
import Profile from "../screens/Profile";
import { primaryColor, secondaryColor, white } from "../constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { color: white },
        tabBarLabel: ({ focused }) =>
          focused ? <TabText tabName={route.name} /> : <TabText />,
        tabBarLabelPosition: "beside-icon",
        tabBarBackground: () => {},
        tabBarStyle: {
          backgroundColor: primaryColor,
          height: 60,
          paddingHorizontal: 10,
        },
      })}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="home" />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="play-circle" />,
        }}
        name="Watch"
        component={Watch}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="bookmark" />,
        }}
        name="Bookmark"
        component={Bookmark}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Icon name="user" />,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const Icon = ({ name }) => {
  return <FontAwesome name={name} size={20} color={white} />;
};

const TabText = ({ tabName }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          color: white,
          paddingTop: 4,
          marginLeft: 4,
          fontSize: 14,
          fontWeight: "700",
        }}
      >
        {tabName}
      </Text>
    </View>
  );
};
