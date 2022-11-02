import {light, dark} from "@ColorConstants/";
import {scaleFontSize} from "../utils/scaling";
import * as React from "react";
import {Text, StyleSheet, TextProps} from "react-native";

interface AppTextProps extends TextProps {
  size?: number;
  children: any;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
  textAlign?: "left" | "right" | "center";
  weight?: "bold" | "light" | "regular" | "semiBold";
}

export const CustomText = ({
  children,
  size = 16,
  color = light.background,
  marginBottom,
  marginTop,
  textAlign,
  weight,
  style,
}: AppTextProps) => {
  return (
    <Text
      style={[
        styles.text,
        {color},
        {marginTop},
        {marginBottom},
        {textAlign},
        {fontSize: scaleFontSize(size)},
        size ? {lineHeight: size * 1.4} : null,
        // renderWeight(weight),
        style,
      ]}
    >
      {children}
    </Text>
  );
};

// const renderWeight = (weight?: 'bold' | 'light' | 'regular' | 'semiBold') => {
//   switch (weight) {
//     case 'bold':
//       return { fontFamily: theme.fontFamily.bold };
//     case 'semiBold':
//       return { fontFamily: theme.fontFamily.semiBold };
//     case 'light':
//       return { fontFamily: theme.fontFamily.light };

//     default:
//       return { fontFamily: theme.fontFamily.regular };
//   }
// };
const styles = StyleSheet.create({
  text: {
    fontSize: scaleFontSize(16),
    // fontFamily: theme.fontFamily.regular,
  },
});
