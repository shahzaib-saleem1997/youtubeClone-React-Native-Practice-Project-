import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider,useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";

import HomeScreen from "./app/screens/Home";
import Search from "./app/screens/Search";
import Explore from "./app/screens/Explore";
import Subscribe from "./app/screens/Subscribe";
import VideoPlayer from "./app/screens/VideoPlayer";
import { reducer } from "./app/reducers/reducer";
import { themeReducer } from "./app/reducers/themeReducer";

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    textColor:"white",
    tabIcon:"white"
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    textColor:"#212121",
    tabIcon:"red"
  },
};


const rootReducer = combineReducers({
  cardData:reducer,
  myDarkMode:themeReducer
})
const store = createStore(rootReducer);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  const {colors}=useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "explore";
          } else if (route.name === "subscribe") {
            iconName = "subscriptions";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="home" component={HomeScreen} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
};
export default () =>{
  return(
  <Provider store={store}>
    <Navigation/>
  </Provider>
  );
  
}
export function Navigation() {

  const isDarkMode = useSelector((state) => {
    return state.myDarkMode;
  });

  const [shahzaibTheme,setMyAppTheme] = useState(customDarkTheme);
  return (
   
      <NavigationContainer theme={isDarkMode ? customDarkTheme :customDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({});
