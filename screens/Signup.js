import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { Email, Lock, Logo, secondaryColor, User, white } from "../constants";
import ToastMessage from "../components/ToastMessage";
import { auth } from "../firebase.config";

const Signup = ({ navigation }) => {
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user.user) {
          user.user.updateProfile({
            displayName: fullname,
          });
        }
      })
      .then(() => {
        navigation.replace("Home");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-email") {
          ToastMessage("Please check your email address");
        } else if (err.code === "auth/email-already-in-use") {
          ToastMessage("Email already registered");
        }
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{ width: 350 }}>
        <Image source={Logo} />
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: `${white}`,
            marginTop: 50,
            marginBottom: 8,
          }}
        >
          Create an account
        </Text>
        <Text style={{ fontSize: 16, color: `${white}` }}>
          Signup and get started
        </Text>
      </View>
      <View>
        <Input
          placeholder="Enter your fullname"
          source={User}
          value={fullname}
          onChangeText={(value) => setFullname(value)}
        />
        <Input
          placeholder="Enter your email"
          source={Email}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="Enter your password"
          source={Lock}
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
          onSubmitEditing={signup}
        />
      </View>
      <Button title="Signup" style={{ marginTop: 30 }} onPress={signup} />
      <TouchableOpacity
        style={{ position: "absolute", bottom: 30 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: `${white}`, fontSize: 16 }}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondaryColor,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
});
