import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import SocialButton from "../../components/SocialButton";
import { AuthContext } from "../../navigation/AuthProvider.ios";
import {
  appleAuth,
  AppleButton,
} from "@invertase/react-native-apple-authentication";

import tennis from "../../../assets/images/tennnis-wendy-wei2.jpeg";
import logo from "../../../assets/images/fulllogo1.png";

import styles from "./Login.styles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login, googleLogin, fbLogin, appleLogin } = useContext(AuthContext);

  useEffect(() => {
    // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
    return appleAuth.onCredentialRevoked(async () => {
      console.warn(
        "If this function executes, User Credentials have been Revoked"
      );
    });
  }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

  return (
    <ImageBackground
      style={{ top: 0, bottom: 0, height: "100%" }}
      source={tennis}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginTop: 50,
                marginBottom: -50,
                color: "white",
                opacity: 1,
                fontSize: 14,
              }}
            >
              English(UK)
            </Text>
            <Image
              source={require("../../../assets/images/down.png")}
              style={{
                marginTop: 50,
                marginBottom: -50,
                width: 12,
                height: 12,
              }}
            />
          </View>
          <Image style={styles.logo} source={logo} width={100} height={100} />
        </View>

        <View style={styles.keyboardView}>
          <>
            <FormInput
              labelValue={email}
              onChangeText={(userEmail) => setEmail(userEmail)}
              placeholderText="Email"
              iconType="user"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <FormInput
              labelValue={password}
              onChangeText={(userPassword) => setPassword(userPassword)}
              placeholderText="Password"
              iconType="lock"
              secureTextEntry={true}
            />

            <FormButton
              style={{
                marginBottom: 15,
                alignItems: 'center',
                width: 350,
                height: 45,
                backgroundColor: '#000',
                paddingTop: 10,
                borderRadius: 5,
                textColor: '#000'
              }}
              buttonTitle="Log In"
              onPress={() => login(email, password)}
            />

            {Platform.OS === "android" ? (
              <View>
                <SocialButton
                  buttonTitle="Sign In with Facebook"
                  btnType="facebook"
                  color="#4867aa"
                  backgroundColor="#e6eaf4"
                  onPress={() => fbLogin()}
                />

                <SocialButton
                  buttonTitle="Sign In with Google"
                  btnType="google"
                  color="#de4d41"
                  backgroundColor="#f5e7ea"
                  onPress={() => googleLogin()}
                />
              </View>
            ) : null}

            {Platform.OS === "ios" ? (
              <View>
                <AppleButton
                  buttonStyle={AppleButton.Style.WHITE}
                  buttonType={AppleButton.Type.SIGN_IN}
                  style={{
                    width: 350,
                    height: 45,
                  }}
                  onPress={() => appleLogin()}
                />
              </View>
            ) : null}

          </>
        </View>
        <View style={styles.bottomContainer}>

        {/* <TouchableOpacity onPress={() => {}}>
              <Text style={{ fontSize: 12, color: "white", marginTop: 27 }}>Forgot Password?</Text>
            </TouchableOpacity> */}
          <View style={styles.bottom}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 12, color: "white", marginTop: 27 }}
                alignItems={"base"}
              >
                Don't have an account?{" "}
              </Text>
              <Button
                textColor="white"
                alignItems={"center"}
                style={[styles.help, { marginTop: 15 }]}
                onPress={() => navigation.navigate("Signup")}
              >
                Register
              </Button>
            </View>

            <View style={styles.line} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
