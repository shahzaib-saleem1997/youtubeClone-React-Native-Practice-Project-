import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation,useTheme } from "@react-navigation/native";

export default function MiniCard({ videoId, title, channel }) {
  const navigation = useNavigation();
  const {colors} = useTheme();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("videoPlayer", { videoId, title })}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
          style={styles.image}
        />
        <View style={styles.contentArea}>
          <Text style={{fontSize: 17,
    width: Dimensions.get("screen").width / 2,color:colors.textColor}} ellipsizeMode="tail" numberOfLines={3}>
            {title}
          </Text>
          <Text style={{color:colors.textColor}}>{channel}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
  },
  contentArea: {
    paddingLeft: 7,
  },
  image: {
    width: "45%",
    height: 100,
  },
  titleText: {
    fontSize: 17,
    width: Dimensions.get("screen").width / 2,
  },
});
