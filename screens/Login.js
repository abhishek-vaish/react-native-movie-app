import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { white, secondaryColor, Logo, Email, Lock } from "../constants";
import ToastMessage from "../components/ToastMessage";
import { auth } from "../firebase.config";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        navigation.replace("Main");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          ToastMessage("Please check you email and password");
        } else if (err.code === "auth/configuration-not") {
          ToastMessage("User not found");
        } else if (err.code === "auth/network-request-failed") {
          ToastMessage("Network not found");
        }
        console.log(err.code);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{ width: 350 }}>
        <Image source={Logo} style={{ width: 135, height: 30 }} />
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: `${white}`,
            marginTop: 50,
            marginBottom: 8,
          }}
        >
          Welcome back!
        </Text>
        <Text style={{ fontSize: 16, color: `${white}` }}>
          Signin to continue
        </Text>
      </View>
      <View>
        <Input
          placeholder="Enter your email"
          source={Email}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="Enter your password"
          source={Lock}
          value={password}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          onSubmitEditing={signin}
        />
        <TouchableOpacity style={{ marginTop: -10, alignItems: "flex-end" }}>
          <Text style={{ color: `${white}` }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" style={{ marginTop: 30 }} onPress={signin} />
      <TouchableOpacity
        style={{ position: "absolute", bottom: 30 }}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={{ color: `${white}`, fontSize: 16 }}>
          Not a member? Signup
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: white,
    borderRadius: 10,
    width: 350,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
});
