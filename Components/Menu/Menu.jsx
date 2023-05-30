import React from "react";
import { View, Image, Text } from "react-native";
import { icons } from "../../constants";

const Menu = () => {
  return (
    <View style={{ marginLeft: 10 }}>
      <Image source={icons.menu} style={{ height: 20, width: 20 }} />
    </View>
  );
};

export default Menu;
