import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Constants from "expo-constants";
import { useSelector } from "react-redux";

import Card from "../components/Card";
import LittleCard from "./../components/LittleCard";
import Header from "./../components/Header";

export default function Explore() {
  const cardData = useSelector((state) => {
    return state.cardData;
  });
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.littleCardsContainer}>
        <LittleCard name="Gaming" />
        <LittleCard name="Trending" />
        <LittleCard name="Music" />
        <LittleCard name="News" />
        <LittleCard name="Movies" />
        <LittleCard name="Fashion" />
      </View>
      <Text style={styles.text}>Trending Videos</Text>
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
  littleCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  text: {
    margin: 8,
    fontSize: 22,
    borderBottomWidth: 1,
  },
});
