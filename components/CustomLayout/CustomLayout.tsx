import React from "react";

// import { selectIsDark } from '@store/slices/themSlice';
import {
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// import { useSelector } from 'react-redux';

import styles from "./styles";
export const CustomLayout = ({style, scrollEnabled, children}: any) => {
  // const isDark = useSelector(selectIsDark);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle="dark-content"
        // backgroundColor={theme.colors.lightGray}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 15 : 0}
        style={styles.flexGrowOne}
      >
        {scrollEnabled ? (
          <ScrollView
            contentContainerStyle={[styles.scrollViewContainer, style]}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.container, style]}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
