import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import {ThemeContext} from "@ThemeContext";
import ThemeWrapper from "components/ThemeWrapper";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeContext>
        <ThemeWrapper>
          <SafeAreaProvider>
            <Text>test</Text>
          </SafeAreaProvider>
        </ThemeWrapper>
      </ThemeContext>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
