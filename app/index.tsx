import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  const [hPssd, setHPssd] = useState(false);
  const hidePssd = () => {
    setHPssd(!hPssd);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.blockA}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.titleText}>BANK OF PLEASURE</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/pic.png")}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.blockB}>
        <Text style={styles.loginTitle}>Log In</Text>
        <TextInput style={styles.input} placeholder="Enter your email here" />
        <View style={[styles.input, styles.passwordInput]}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={hPssd ? true : false}
            style={styles.passwordTextInput}
          />
          {!hPssd && (
            <Ionicons
              onPress={hidePssd}
              name="eye-off-outline"
              size={18}
              color="black"
            />
          )}
          {hPssd && (
            <Ionicons
              onPress={hidePssd}
              name="eye-outline"
              size={18}
              color="black"
            />
          )}
        </View>

        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </View>

        <Text style={styles.forgotPasswordText}>Forgot password</Text>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.divider} />
        </View>

        <Text style={styles.continueWithText}>Continue with</Text>

        <View style={styles.socialLoginContainer}>
          <View style={styles.socialButton}>
            <Ionicons name="logo-apple" size={18} color="black" />
            <Text>Apple</Text>
          </View>
          <View style={styles.socialButton}>
            <Ionicons name="logo-google" size={18} color="black" />
            <Text>Google</Text>
          </View>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't Have an Account?</Text>
          <Text style={styles.registerLink}>Register Now!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockA: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: "#C11E55",
    alignItems: "center",
  },
  welcomeText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  titleText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: -20,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  blockB: {
    flex: 4,
    padding: 20,
  },
  loginTitle: {
    color: "black",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "gray",
    padding: 10,
    marginTop: 10,
    borderRadius: 4,
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordTextInput: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: "#C11E55",
    borderRadius: 4,
    marginTop: 20,
    padding: 14,
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  forgotPasswordText: {
    textAlign: "right",
    marginVertical: 4,
    color: "gray",
    fontSize: 14,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  divider: {
    flex: 1,
    height: 2,
    backgroundColor: "gray",
  },
  orText: {
    marginHorizontal: 8,
    color: "gray",
    textAlign: "center",
    fontSize: 14,
  },
  continueWithText: {
    color: "gray",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 15,
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 4,
    width: 85,
    height: 40,
    marginHorizontal: 5,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  registerText: {
    fontWeight: "600",
  },
  registerLink: {
    fontWeight: "600",
    color: "red",
    marginLeft: 2,
  },
});
