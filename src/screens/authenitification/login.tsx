import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import React from "react";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Registration from "./registration";

const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const [registrationModal, setRegistrationModal] = React.useState(false);

  const navigation = useNavigation();

  const login = () => {
    console.log("login");

    if (userName == "" || userName.length < 5) {
      alert("Please enter valid username (min 5 characters)");
      return; // stop the function
    }

    if (password == "" || password.length < 8) {
      alert("Please enter valid password (min 8 characters)");
      return; // stop the function
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate("home", {
        user: userName,
        pass: password,
      });
    }, 3000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        paddingTop: 40,
        paddingLeft: 5,
      }}
    >
      <InputBox
        placeHolder={"Enter your username"}
        value={userName}
        onChange={(text) => {
          setUserName(text);
        }}
      />

      <InputBox
        placeHolder={"Enter your password"}
        value={password}
        onChange={(text) => {
          setPassword(text);
        }}
        secureTextEntry={true}
      />

      <Button
        buttonName="Login"
        buttonOnPress={() => {
          login();
        }}
        loading={loading}
      />

      <Button
        buttonName="Registration"
        buttonOnPress={() => {
          navigation.navigate('registration')
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
