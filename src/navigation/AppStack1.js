import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import AddPostScreen from "../screens/AddPostScreen";
import MessagesScreen from "../screens/MessagesScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import Host from "../screens/Host/Host";
// import Confirm from 

import { AuthContext } from "../navigation/AuthProvider";

import BottomTab from "./BottomTab";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="RN Social"
      component={HomeScreen}
      options={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#2e64e5",
          fontFamily: "Kufam-SemiBoldItalic",
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: "#fff",
          elevation: 0,
        },
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <FontAwesome5.Button
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate("AddPost")}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#2e64e515",
          shadowColor: "#2e64e515",
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const MessageStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: "Edit Profile",
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const { user, logout } = useContext(AuthContext);
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";

    if (routeName === "Chat") {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "#244c66",
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route, navigation }) => ({
          tabBarLabel: "Home",
          title: "",
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate("AddPost")}
              />
            </View>
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome5.Button
                name="user"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => logout()}
              />
            </View>
          ),
        })}
      />
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

      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarLabel: "Post",
          tabBarVisible: false,
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#FFF",
            shadowColor: "#2e64e515",
            elevation: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="grid" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
