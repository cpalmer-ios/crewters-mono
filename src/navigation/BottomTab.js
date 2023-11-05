import React, {useContext} from 'react';
import {Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Foundation from 'react-native-vector-icons/Foundation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Discover from '../views/Discover/Discover';
// import Search from '../views/Search/Search';

import AccountScreen from '../navigation/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import Host from '../screens/Host/Host';
// import StoreScreen from './StoreScreen';
import {AuthContext} from '../navigation/AuthProvider.ios';
import { CalScreen } from '../screens/CalScreen/CalScreen';


const Tab = createBottomTabNavigator();

const BottomTab = () => {

  const {user, setUser} = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeScreen') {
            return focused ? (
              <FontAwesome name="home" size={32} color="#244c66" />
            ) : (
              <Feather name="home" size={28} color="#244c66" />
            );
          }
          if (route.name === 'Host') {
              return focused ? (
            <FontAwesome name="map-marker-alt" size={28} color="#244c66" />
            ) : (
              <Feather name="map-pin" size={28} color="#244c66" />
              );
            }
          if (route.name === 'Calendar') {
            return focused ? (
              <FontAwesome name="calendar-alt" size={28} color="#244c66" />
              ) : (
              <Feather name="calendar" size={28} color="#244c66" />
            )
          }
          if (route.name === 'Search') {
            return <Feather name="search" size={28} color="#244c66" />;
          }
          if (route.name === 'AccountScreen') {
            return (
              <Avatar.Image
                size={28}
                source={{ uri: user && user.userImg}}
              />
            );
          }
        },
        tabBarStyle: {backgroundColor: 'white'},
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Host" component={Host} />
      <Tab.Screen name="Calendar" component={CalScreen} />
      {/* <Tab.Screen name="Search" component={CalScreen} /> */}
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};
export default BottomTab;
