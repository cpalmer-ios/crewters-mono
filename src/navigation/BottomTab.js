import React, {useContext} from 'react';
import {Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Foundation from 'react-native-vector-icons/Foundation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Discover from '../views/Discover/Discover';
// import Search from '../views/Search/Search';

import AccountScreen from '../screens/AccountScreen/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
// import StoreScreen from './StoreScreen';
import {AuthContext} from '../navigation/AuthProvider.ios';


const Tab = createBottomTabNavigator();

const BottomTab = () => {

  const {user, setUser} = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeScreen') {
            return focused ? (
              <Foundation name="home" size={32} color="white" />
            ) : (
              <Image
                source={require('../../assets/images/home.png')}
                style={{width: 25, height: 25}}
              />
            );
          }
          if (route.name === 'Search') {
              return focused ? (
            <FontAwesome name="map-marker-alt" size={28} color="white" />
            ) : (
              <Feather name="map-pin" size={28} color="white" />
              );
            }
          if (route.name === 'Discover') {
            return focused ? (
              <FontAwesome name="calendar-alt" size={28} color="white" />
              ) : (
              <Feather name="calendar" size={28} color="white" />
            )
          }
          if (route.name === 'StoreScreen') {
            return <Feather name="search" size={28} color="white" />;
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
        tabBarStyle: {backgroundColor: 'black'},
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Tab.Screen name="Search" component={Search} /> */}
      {/* <Tab.Screen name="Discover" component={Discover} /> */}
      {/* <Tab.Screen name="StoreScreen" component={StoreScreen} /> */}
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};
export default BottomTab;
