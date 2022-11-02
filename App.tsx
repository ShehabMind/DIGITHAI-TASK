import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import {ThemeContext} from "./Context/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper";
import Navigation from "./navigation";
import {QueryClient, QueryClientProvider} from "react-query";
import {LogBox} from "react-native";
export default function App() {
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeContext>
        <ThemeWrapper>
          <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
            </SafeAreaProvider>
          </QueryClientProvider>
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
