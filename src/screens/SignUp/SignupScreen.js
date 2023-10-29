import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet, ImageBackground,} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
import {AuthContext} from '../../navigation/AuthProvider.ios';
import tennis from "../../../assets/images/pexels-erik-mclean.jpg";


const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <ImageBackground
    style={{ top: 0, bottom: 0, height: "100%", filter: [{brightness: 0.5}]}}
    source={tennis}
  >
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

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

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        style={styles.signUpBtn}
        buttonTitle="Sign Up"
        onPress={() => register(email, password)}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#FFF'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#FFF'}]}>
          Privacy Policy
        </Text>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#244c66',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#e1e1e1',
    fontFamily: 'Lato-Regular',
  },
  signUpBtn: { 
    marginBottom: 15,
    alignItems: 'center',
    width: 350,
    height: 45,
    backgroundColor: '#244c66',
    paddingTop: 10,
    borderRadius: 5,
    textColor: '#000'
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: '#FFF',
  },
});
