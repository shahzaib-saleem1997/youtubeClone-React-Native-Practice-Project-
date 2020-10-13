import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export default function Subscribe() {
  return (
    <View style={styles.container}>
      <Text> Subscribe!!! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
