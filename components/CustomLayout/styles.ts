import {StyleSheet} from "react-native";
import {scale, scaleHeight} from "../../utils/scaling";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: scale(15),
    paddingBottom: scaleHeight(15),
  },
  safeAreaView: {
    flex: 1,
    paddingTop: 44,
    // backgroundColor: theme.colors.lightGray,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
});
