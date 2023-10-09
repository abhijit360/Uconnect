import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable, Modal } from "react-native";
import { useState } from "react";
import Greet from "./CoreComponents/Greet";
import HomeScreen from "./CoreComponents/HomeScreen";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
   <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contOne: {
    backgroundColor: "grey",
    padding: 12,
    margin: 10,
    borderRadius: 10,
    height: 50,
    width: 125,
  },
});
