import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as DevMenu from "expo-dev-menu";
import Providers from "./src/navigation";

export default function App() {
  return <Providers />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#4630eb",
    borderRadius: 4,
    padding: 12,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
