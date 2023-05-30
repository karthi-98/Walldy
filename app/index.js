import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { COLORS, SIZES, FONT } from "../constants/index";
import { Stack, useRouter } from "expo-router";
import Unsplash from "../Components/Unsplash/Unsplash";
import Menu from "../Components/Menu/Menu";
import Count from "../Components/Count/Count";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: "Walldy",
          headerTitleStyle: { fontFamily: FONT.semiBold },
          headerTitleAlign: "center",
          headerLeft: () => {
            return <Menu />;
          },
          headerRight: () => {
            return <Count />;
          },
        }}
      />

      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Unsplash />
      </View>
    </SafeAreaView>
  );
};

export default Home;
