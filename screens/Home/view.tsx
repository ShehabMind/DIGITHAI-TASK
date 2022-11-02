import React, {useState} from "react";
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Animated,
  Dimensions,
  Platform,
} from "react-native";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import {Url} from "../../utils/ConstantValues";
import styles from "./styles";
import {useQuery} from "react-query";
import {useTheme} from "../../Context/ThemeContext";
import {SCREEN_WIDTH} from "../../utils/scaling";
import {CustomText} from "../../components/CustomText";
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import Svg, {Rect} from "react-native-svg";
import CustomButton from "../../components/CustomeButtom";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
///
const {width, height} = Dimensions.get("window");

const BACKDROP_HEIGHT = height * 0.65;

const ITEM_SIZE = SCREEN_WIDTH * 0.72;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const SPACING = 10;
///
interface Post {
  // title: string;
  // urlToImage: string;
  // publishedAt: string;
  // url: string;
  // author: string;
  id: string;
}
///

const HomeView: React.FC<{
  item: Post;
  index: number;
}> = ({item, index}) => {
  const navigation: any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  ///
  const [Search, setSearch] = useState("");
  const {theme} = useTheme();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  ///
  const GetBooks = () => {
    return axios(Url);
  };
  ////
  const {isLoading, error, data} = useQuery("getBooks", GetBooks);

  const NewsApiData = data?.data.items;
  // console.log("Main data", NewsApiData);

  if (error) return <Text> Error : {error.message}</Text>;
  if (isLoading) return <ActivityIndicator />;
  ////

  ///
  const Backdrop = ({newsApiData, scrollX}) => {
    const NewsBackDropData = data?.data.items;

    return (
      <View style={{height: BACKDROP_HEIGHT, width, position: "absolute"}}>
        <FlatList
          data={NewsBackDropData}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={false}
          contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
          renderItem={({item, index}) => {
            if (!item.id) {
              return null;
            }
            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              // index * ITEM_SIZE,
            ];

            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [-width, 0],
            });
            return (
              <MaskedView
                key={item.id}
                androidRenderingMode="hardware"
                maskElement={
                  <AnimatedSvg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    style={{transform: [{translateX}]}}
                  >
                    <Rect
                      x="0"
                      y="0"
                      width={width}
                      height={height}
                      // fill="red"
                    />
                  </AnimatedSvg>
                }
                style={{position: "absolute"}}
              >
                <Image
                  source={require("../../assets/images/Digithai.jpeg")}
                  style={{
                    width,
                    height: BACKDROP_HEIGHT,
                    position: "absolute",
                    resizeMode: "cover",
                  }}
                />
              </MaskedView>
            );
          }}
        />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0)", "white"]}
          style={{
            height: BACKDROP_HEIGHT,
            width,
            position: "absolute",
            bottom: 0,
          }}
        />

        <CustomButton
          style={{
            position: "absolute",
            zIndex: 1,
            top: 20,
            left: 100,
            width: SCREEN_WIDTH * 0.5,
            backgroundColor: "rgba(255,255,255,0.6)",
            borderColor: "#282B78",
          }}
          onPress={() => {
            navigation.navigate("HomeSimple");
          }}
        >
          <CustomText
            textAlign="center"
            color={"#282B78"}
            style={{fontWeight: "700"}}
          >
            Book list (Standard)
          </CustomText>
        </CustomButton>
      </View>
    );
  };

  ///
  // console.log(data?.data.items);
  // console.log(NewsApiData.title);
  console.log(NewsApiData[1].id);

  return (
    <View style={styles.container}>
      <Backdrop newsApiData={data?.data.items} scrollX={scrollX} />

      <Animated.FlatList
        data={NewsApiData.reverse()}
        keyExtractor={(item: any) => item.id}
        refreshing={isLoading}
        horizontal
        contentContainerStyle={{alignItems: "center"}}
        onRefresh={GetBooks}
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true}
        )}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}: any) => {
          if (!item.id) {
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          }
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: "clamp",
          });
          const Books = item.volumeInfo;
          return (
            <View style={{width: ITEM_SIZE}} key={item.id}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: "center",
                  transform: [{translateY}],
                  backgroundColor: theme.background,
                  borderRadius: 34,
                }}
              >
                <Image
                  source={{
                    uri: Books.imageLinks.thumbnail
                      ? Books.imageLinks.thumbnail
                      : "https://arts.tu.edu.ly/wp-content/uploads/2020/02/placeholder.png",
                    cache: "force-cache",
                  }}
                  style={styles.posterImage}
                />
                <CustomText
                  textAlign="center"
                  color={theme.text}
                  size={17}
                  numberOfLines={5}
                  style={{fontWeight: "bold"}}
                >
                  {Books.title}
                </CustomText>
                <CustomText textAlign="left" color={"#4C6877"} size={17}>
                  {Books.subtitle?.slice(0, 50)}
                </CustomText>

                <CustomButton
                  style={{borderColor: "#282B78"}}
                  marginTop={15}
                  onPress={() => {
                    navigation.navigate("DescriptionModal", {
                      item: item,
                      index: index,
                    });
                  }}
                >
                  <CustomText style={{fontWeight: "600"}} color={"#36A96A"}>
                    Read More
                  </CustomText>
                </CustomButton>
              </Animated.View>
              <View style={{marginBottom: 150}} />
            </View>
          );
        }}
      />
    </View>
  );
};
export default HomeView;
