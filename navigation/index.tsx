import * as React from "react";
import {FontAwesome, Feather} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {useTheme} from "../Context/ThemeContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ColorSchemeName, Pressable} from "react-native";
import {DescriptionModalScreen} from "../screens/DescriptionModal/index";
import useColorScheme from "../hooks/useColorScheme";
import {HomeScreen} from "../screens/Home/index";
import {HomeSimpleScreen} from "../screens/SimpleList/index";
import {SettingsScreen} from "../screens/Settings/index";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="HomeSimple"
        component={HomeSimpleScreen}
        options={{headerShown: false}}
      />
      <Stack.Group screenOptions={{presentation: "modal"}}>
        <Stack.Screen
          name="DescriptionModal"
          component={DescriptionModalScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const {theme} = useTheme();
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#36A96A",
        tabBarInactiveTintColor: "#4C6877",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          height: 60,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 25,
          shadowColor: "white",
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "700",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}: RootTabScreenProps<"Home">) => ({
          tabBarActiveTintColor: "#36A96A",
          title: "Home",
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon name="home" color={"#36A96A"} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarActiveTintColor: "#36A96A",

          title: "Settings",
          tabBarIcon: ({color}) => (
            <TabBarIcon name="settings" color={theme.tabIconDefault} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  const {theme} = useTheme();
  return (
    <Feather
      size={30}
      style={{marginBottom: -3, color: theme.tabBarIcon}}
      {...props}
    />
  );
}
