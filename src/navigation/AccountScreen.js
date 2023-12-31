import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Account from '../screens/Account/Account';
import SinglePost from '../screens/SinglePost/SinglePost';
import Settings from '../screen/Settings/Settings';

const AccountScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={Account}
      
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SinglePost" component={SinglePost} options />
    </Stack.Navigator>
  );
};
export default AccountScreen;
