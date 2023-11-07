import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import ProfilePost from '../screens/ProfilePost/ProfilePost';
// import Events from '../screen/Events/Events';
// import Sports from '../screens/Sports/Sports';
import { faBarChart, faImages, faLocation} from '@fortawesome/free-solid-svg-icons';


const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'ProfilPost') {
            return (<FontAwesomeIcon size={28} color='#244c66' icon={faImages} />);
          }
          if (route.name === 'ProfileEvents') {
            return <FontAwesomeIcon size={28} color='#244c66' icon={faLocation} />;
          }
          if (route.name === 'ProfileSports') {
            return <FontAwesomeIcon size={28} color='#244c66' icon={faBarChart} />;
          }
        },
        tabBarIndicatorStyle: {backgroundColor: '#244c66', height: 2},
        tabBarLabel: '',
        tabBarStyle: {
          backgroundColor: 'white',
        },
      })}>
      <Tab.Screen name="ProfilPost" component={ProfilePost} />
      <Tab.Screen name="ProfileEvents" component={ProfilePost} />
      <Tab.Screen name="ProfileSports" component={ProfilePost} />
    </Tab.Navigator>
  );
};
export default TopTabNavigator;
