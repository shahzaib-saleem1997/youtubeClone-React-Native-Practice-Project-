import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useTheme } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import cache from "../utility/cache";

import MiniCard from "../components/MiniCard";




export default function Search({navigation}) {
  const [searchText, setSearchText] = useState("");
  const {colors} = useTheme();
  // const [miniCardData, setMiniCardData] = useState([]);
  const dispatch = useDispatch();
  const miniCardData = useSelector((state) => {
    return state.cardData;
  });

  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&type=video&key={yourKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({
          type: "add",
          payload: data.items,
        });
        storeInCache(miniCardData);
      });
  };

  const storeInCache = async (miniCardData) => {
    await cache.store("cardData", miniCardData);
    // const result = await cache.get("cardData");
    // console.log(result);
  };

 

  return (
    <View style={styles.container}>
      <View style={{
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 5,
        backgroundColor: colors.headerColor,
      }}>
        <Ionicons
          name="md-arrow-back"
          size={32}
          color={colors.iconColor}
          onPress={() => navigation.navigate("rootHome")}
        />
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Ionicons name="md-send" size={32} color={colors.iconColor} onPress={() => fetchData()} />
      </View>
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: 10,
          }}
          size="large"
          color="red"
        />
      ) : (
        <FlatList
          data={miniCardData}
          renderItem={({ item }) => {
            return (
              <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  searchBarContainer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 5,
    backgroundColor: "white",
  },
  input: {
    width: "70%",
    paddingHorizontal: 5,
    backgroundColor: "#e6e6e6",
  },
});
