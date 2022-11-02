/* eslint-disable prettier/prettier */

import {StyleSheet} from "react-native";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../../utils/scaling";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 120,
  },
  ImageCont: {
    justifyContent: "center",
    alignItems: "center",
  },
  crossContainer: {
    position: "absolute",
    top: 10,
    left: 30,
    zIndex: 9,
  },
  cross: {
    height: 34,
    width: 34,
    color: "white",
  },
  posterImage: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.5,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
    marginTop: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  author: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  Time: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 30,
    paddingHorizontal: 24,
    marginVertical: 1,
  },

  content: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    paddingHorizontal: 24,
  },
  readMoreContainer: {
    position: "absolute",
    paddingTop: 14,
    paddingBottom: 28,
    paddingHorizontal: 24,
    bottom: 0,
    width: "100%",
  },
  readMoreText: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 22,
    fontStyle: "italic",
  },
  link: {
    color: "#0052A1",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#0052A1",
  },
});

export default styles;
