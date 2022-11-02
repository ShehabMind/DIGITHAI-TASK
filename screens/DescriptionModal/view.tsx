import {
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

import {useNavigation, useRoute} from "@react-navigation/native";
import React, {useContext, useCallback, useState} from "react";
import styles from "./styles";
import {FontAwesome} from "@expo/vector-icons";

import {WebViewScreen} from "../../components/webview/index";
import {useTheme} from "../../Context/ThemeContext";

interface Route {}
const DescriptionModalView: React.FC<{props: Route}> = ({}) => {
  const route = useRoute();
  const Books = route.params.item;
  const [isVisible, setIsVisible] = useState(false);
  const handleURLPress = useCallback(() => {
    setIsVisible(true);
  }, []);

  const navigation = useNavigation();

  ///
  const {theme} = useTheme();
  ///

  return (
    <>
      <TouchableOpacity
        style={styles.crossContainer}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <FontAwesome
          style={styles.cross}
          name="arrow-left"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.container, {backgroundColor: theme.background}]}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.ImageCont}>
          <Image
            source={{
              uri: Books.volumeInfo.imageLinks.thumbnail
                ? Books.volumeInfo.imageLinks.thumbnail
                : "https://arts.tu.edu.ly/wp-content/uploads/2020/02/placeholder.png",
              cache: "force-cache",
            }}
            style={styles.posterImage}
          />
        </View>
        <Text style={[styles.author, {color: "#60935F"}]}>
          ArticleBy :{" "}
          {Books?.volumeInfo.authors ? Books?.volumeInfo.authors : "Unknown"}
        </Text>
        <Text style={[styles.Time, {color: "#60935F"}]}>
          {Books?.volumeInfo.publishedDate}
        </Text>
        <Text style={[styles.title, {color: theme.text}]}>{Books?.title}</Text>
        <Text style={[styles.content, {color: theme.text}]}>
          {Books?.volumeInfo.description
            ? Books?.volumeInfo.description
            : "there is no description"}
        </Text>
      </ScrollView>
      <View style={[styles.readMoreContainer, {backgroundColor: "#60935F"}]}>
        <Text style={styles.readMoreText} numberOfLines={2}>
          Press To Read More{" "}
          <Text onPress={handleURLPress} style={styles.link}>
            {Books?.volumeInfo.infoLink}
          </Text>
        </Text>
      </View>
      <WebViewScreen
        {...{
          isVisible,
          url: Books?.volumeInfo.infoLink ?? "https://google.com/",
          setIsVisible,
        }}
      />
    </>
  );
};
export default DescriptionModalView;
