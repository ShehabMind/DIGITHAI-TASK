import NetInfo from "@react-native-community/netinfo";
import {scaleHeight, scaleWidth} from "../../utils/scaling";
import {strings} from "@Localization";
import * as React from "react";
import {StyleSheet, Modal, View, Image} from "react-native";
import {CustomText} from "../CustomText";
import CustomButton from "../CustomeButtom";
import {useEffect, useState} from "react";
import {CustomLayout} from "../CustomLayout/CustomLayout";

export const NetworkConnection = () => {
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(
    true
  );

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setConnectionStatus(state.isConnected);
    });
  }, []);

  const onRefresh = () => {
    NetInfo.fetch().then((state) => {
      setConnectionStatus(state.isConnected);
    });
  };

  return (
    <Modal animationType="slide" visible={!connectionStatus}>
      <CustomLayout>
        <View style={styles.centeredView}>
          <Image
            source={require("../../assets/images/musala.jpg")}
            style={styles.offlineImage}
            resizeMode="contain"
          />
          <CustomText color="black" marginTop={32}>
            {strings("NoConnection")}
          </CustomText>
          <CustomText color="black" marginTop={32}>
            {strings("CheckInternet")}
          </CustomText>
        </View>
        <CustomButton
          type="primary"
          style={styles.refreshBtn}
          onPress={onRefresh}
        >
          <CustomText color="black"> {strings("TestConnection")}</CustomText>
        </CustomButton>
      </CustomLayout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  offlineImage: {
    width: scaleWidth(250),
    height: scaleHeight(250),
    alignSelf: "center",
  },
  refreshBtn: {
    marginBottom: 80,
    alignSelf: "center",
  },
});
