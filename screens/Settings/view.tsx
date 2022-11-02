import React, {useState, useEffect, useLayoutEffect} from "react";
import {TouchableOpacity, Text, View, Switch, Image} from "react-native";
import styles from "./styles";
import {RootTabScreenProps} from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useTheme} from "../../Context/ThemeContext";
import {CustomText} from "../../components/CustomText";
import CustomButton from "../../components/CustomeButtom";
import {_retrieveData} from "@StorageController";
import {useIsFocused} from "@react-navigation/native";
const SettingView: React.FC<any> = ({item, index}) => {
  const {theme, updateTheme} = useTheme<any>();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    changeTheme();
  };
  const changeTheme = () => {
    updateTheme(theme.ThemeMode);
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.ModeSwitchCont}>
        <CustomText color={theme.text} size={24}>
          Change Theme
        </CustomText>
        <Switch
          trackColor={{false: "#60935F", true: "#fff"}}
          thumbColor={isEnabled ? "#60935F" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default SettingView;
