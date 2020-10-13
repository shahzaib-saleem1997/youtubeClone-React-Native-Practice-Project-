import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation,useTheme } from "@react-navigation/native";

export default function Card({ videoId, title, channel }) {
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
          <MaterialIcons name="account-circle" size={32} color={colors.iconColor} />
          <View style={styles.textContainer}>
            <Text
              style={{fontSize: 20,
                width: Dimensions.get("screen").width - 50, color:colors.textColor}}
              ellipsizeMode="tail"
              numberOfLines={1}
              
            >
              {title}
            </Text>
            <Text style={{color: colors.textColor}}>{channel}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentArea: {
    flexDirection: "row",
    margin: 5,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  textContainer: {
    marginLeft: 10,
  },
  titleText: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
  },
});
