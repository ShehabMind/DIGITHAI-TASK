import React from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import {light, dark} from "@ColorConstants/";
import {scaleHeight, scaleWidth} from "../utils/scaling";
import {CustomText} from "./CustomText";
import {useTheme} from "@ThemeContext";

export interface ButtonProps extends TextProps {
  title?: string;
  type?: "primary" | "link";
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  marginTop?: number;
  marginBottom?: number;
  textStyle?: StyleProp<TextStyle>;
  titleSize?: number;
  children?: any;
  underLine?: boolean;
}

const CustomButton = ({
  disabled,
  title,
  type = "primary",
  onPress,
  style,
  loading,
  marginTop,
  marginBottom,
  textStyle,
  titleSize,
  children,
  underLine,
}: ButtonProps) => {
  const {theme} = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        type === "primary" && {backgroundColor: theme.background},
        disabled && {backgroundColor: "#60935F"},
        {marginBottom: marginBottom ? scaleHeight(marginBottom) : undefined},
        {marginTop: marginTop ? scaleHeight(marginTop) : undefined},
        style,
      ]}
      onPress={onPress}
      disabled={loading || disabled}
      pressRetentionOffset={{top: 10, bottom: 10, right: 10, left: 10}}
    >
      {loading && (
        <ActivityIndicator
          size={14}
          color={theme.background}
          style={styles.loader}
        />
      )}

      <CustomText
        style={[
          {color: theme.background},
          type === "link" && styles.linkText,
          underLine && styles.underLineText,
          textStyle,
        ]}
        size={titleSize ? titleSize : 15}
      >
        {title} {children}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: scaleWidth(15),
    paddingVertical: scaleHeight(10),
    borderColor: "gray",
    borderWidth: 1,
  },
  primaryCont: {
    // backgroundColor: lig.background,
    height: scaleHeight(50),
    borderColor: "gray",
  },
  disabled: {
    backgroundColor: light.background,
  },
  text: {
    color: light.background,
    // fontFamily: theme.fontFamily.semiBold,
  },
  linkText: {
    color: light.background,
  },
  underLineText: {
    textDecorationLine: "underline",
  },
  loader: {
    marginHorizontal: 10,
  },
});
