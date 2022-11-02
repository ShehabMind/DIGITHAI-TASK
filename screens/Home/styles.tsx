/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions, Platform} from "react-native";
const {width, height} = Dimensions.get("window");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const SPACING = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  FlatListCont: {
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 34,
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 0.8,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 31,
    height: 1,
    width: "80%",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
