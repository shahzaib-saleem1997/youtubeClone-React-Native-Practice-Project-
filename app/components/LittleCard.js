import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LittleCard({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 50,
    width: 180,
    borderRadius: 4,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    marginTop: 5,
  },
});
