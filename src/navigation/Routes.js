import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "./AuthProvider.ios";
import { NativeBaseProvider, Box } from "native-base";
import AuthStack from "./AuthStack.ios";
import AppStack from "./AppStack";
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {default as themed} from '../../theme.json';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...themed }}>
      <NativeBaseProvider>
        {user ? <AppStack /> : <AuthStack />}
      </NativeBaseProvider>
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default Routes;
