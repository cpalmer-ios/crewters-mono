import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Comment from '../views/Comment/Comment';
// import Login from '../screens/Login/LoginScreen'
// import Story from '../views/Story/Story';

import BottomTab from './BottomTab';
import EditProfile from '../screens/EditProfile/EditProfile';
// import MessageScreen from './MessageScreen';

import Host from '../screens/Host/Host';
import {Confirm} from '../components/modals/Confirm'

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {/* <Stack.Screen name="MessageScreen" component={MessageScreen/} /> */}
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="host"
        component={Host}
        options={{
          headerTintColor: "#212121",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#f1f1f1",
          },
          animationTypeForReplace: "push",
          animation: "fade",
          title: "",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="confirm"
        component={Confirm}
        options={({}) => ({
          headerTintColor: "#212121",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#f1f1f1",
          },
          title: "Confirm",
          presentation: "modal",
          animationTypeForReplace: "pop",
          animation: "fade",
        })}
      />
      {/* <Stack.Screen name="Comment" component={Comment} /> */}
      {/* <Stack.Screen
        name="Story"
        component={Story}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      /> */}
    </Stack.Navigator>
  );
};
export default AppStack;