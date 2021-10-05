import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { StatusBar } from "react-native";
import BottomTabs from "./navigation/BottomTabs";
import CardDetails from "./components/CardDetails";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen
          name="CardDetails"
          component={CardDetails}
          sharedElements={(route) => [{ id: route.params.id }]}
        />
      </Stack.Navigator>
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  );
};

export default App;
