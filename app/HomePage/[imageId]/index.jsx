import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Image Id page</Text>
    </View>
  );
};

export default index;
