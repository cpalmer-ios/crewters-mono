import React from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import ProfilePost from '../screens/ProfilePost/ProfilePost';
// import Events from '../screen/Events/Events';
// import Sports from '../screens/Sports/Sports';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'ProfilPost') {
            return <Image source={require('../../assets/images/grid.png')} />;
          }
          if (route.name === 'ProfilEvents') {
            return <Image source={require('../../assets/images/video.png')} />;
          }
          if (route.name === 'ProfileSports') {
            return <Image source={require('../../assets/images/avatar.png')} />;
          }
        },
        tabBarIndicatorStyle: {backgroundColor: 'white', height: 2},
        tabBarLabel: '',
        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}>
      <Tab.Screen name="ProfilPost" component={ProfilePost} />
      {/* <Tab.Screen name="ProfileEvents" component={ProfileEvents} /> */}
      {/* <Tab.Screen name="ProfileSports" component={ProfileSports} /> */}
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
