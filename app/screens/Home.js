import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Constants from "expo-constants";
import { useSelector } from "react-redux";

import Card from "../components/Card";
import Header from "../components/Header";
import cache from "../utility/cache";

export default function HomeScreen() {
  const fetchFromCache = async () => {
    const cardData = cache.get("cardData");
    // console.log(data);
    return data;
  };

  // const cardData = fetchFromCache();
  // console.log("Hello");
  // console.log(cardData);

  const cardData = useSelector((state) => {
    return state.cardData;
  });

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
