import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONT } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCountValue() {
      const item = await AsyncStorage.getItem("@countValue");
      if (item === null) {
        await AsyncStorage.setItem("@countValue", JSON.stringify(0));
      } else {
        if (count === 0) {
          const num = +item;
          setCount(num);
        } else {
          await AsyncStorage.setItem("@countValue", JSON.stringify(count));
        }
      }
    }

    fetchCountValue();
  }, [count]);

  return (
    <TouchableOpacity
      onPress={async () => {
        setCount((ps) => ps + 1);
      }}
    >
      <View style={styles.Container}>
        <View style={styles.CompContainer}>
          <Text
            style={{
              fontFamily: FONT.medium,
              fontSize: 12,
            }}
          >
            {count}
          </Text>
        </View>
        <View style={styles.CompContainerPlus}>
          <Text style={styles.TextStyle}>+</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.white,
    width: 70,
    height: 28,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  CompContainer: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 50,
    width: 23,
    height: 23,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2.5,
  },
  CompContainerPlus: {
    backgroundColor: COLORS.tertiary,
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: "center",
  },
  TextStyle: {
    color: COLORS.lightWhite,
  },
});

export default Count;
