import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as DevMenu from "expo-dev-menu";
import Providers from "./src/navigation";

export default function App() {
  return <Providers />;
}