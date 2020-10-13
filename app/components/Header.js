import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation,useTheme } from "@react-navigation/native";
import { useDispatch,useSelector } from 'react-redux';



export default function Header() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const currentTheme = useSelector(state=>{
    return state.myDarkMode
  })

  return (
    <View 
      style=
      {{
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        height: 40,
        justifyContent: "space-between",
        elevation: 4,
       }}
    >
      <View style={styles.firstColumn}>
        <AntDesign
          style={styles.youtubeIcon}
          name="youtube"
          size={28}
          color="red"
        ></AntDesign>
        <Text style={{fontSize: 22,
          color: colors.textColor,
          marginLeft: 5,
          fontWeight: "bold",}}> YouTube </Text>
      </View>
      <View style={styles.secondColumn}>
        <Ionicons name="md-videocam" size={32} color={colors.iconColor} />
        <Ionicons
          name="md-search"
          size={32}
          color={colors.iconColor}
          onPress={() => navigation.navigate("search")}
        />
        <MaterialIcons name="account-circle" size={32} color={colors.iconColor} onPress= {() => dispatch({type:"change_theme",payload:!currentTheme})} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flexDirection: "row",
    height: 40,
    justifyContent: "space-between",
    elevation: 4,
  },
  youtubeIcon: {
    marginLeft: 20,
  },
  text: {
    fontSize: 22,
    color: "#212121",
    marginLeft: 5,
    fontWeight: "bold",
  },
  secondColumn: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-around",
    width: 170,
  },

  firstColumn: {
    flexDirection: "row",
    margin: 5,
  },
});
