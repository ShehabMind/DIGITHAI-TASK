import React from "react";
import {SafeAreaView, Text, StyleSheet} from "react-native";

interface Post {}

const HomeView: React.FC<{
  item: Post;
  index: number;
}> = ({item, index}) => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}> Home View </Text>
    </SafeAreaView>
  );
};

export default HomeView;
