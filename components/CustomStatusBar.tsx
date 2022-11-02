import {View, Text, StatusBar} from "react-native";
import React from "react";
import {useTheme} from "@ThemeContext";
type Props = {};

const CustomStatusBar = (props: Props) => {
  const {theme} = useTheme();
  const statusBarStyle =
    theme.ThemeMode === "light" ? "dark-content" : "light-content";
  return (
    <StatusBar backgroundColor={theme.background} barStyle={statusBarStyle} />
  );
};

export default CustomStatusBar;
