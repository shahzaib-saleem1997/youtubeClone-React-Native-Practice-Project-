import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function VideoPlayer({ route }) {
  const { videoId, title } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.videoPlayerArea}>
        <WebView
          source={{
            uri: `https://www.youtube.com/embed/${videoId}`,
          }}
        />
      </View>
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
        {title}
      </Text>
      <View style={styles.bottomView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  videoPlayerArea: {
    width: "100%",
    height: 200,
  },
  text: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
    margin: 9,
  },
  bottomView: {
    borderBottomWidth: 1,
  },
});
