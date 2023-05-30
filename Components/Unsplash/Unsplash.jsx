import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "../Unsplash/UnsplashStyle";
import { ActivityIndicator } from "react-native";
import { COLORS, FONT, icons } from "../../constants";

const ACCESS_KEY = process.env.ACCESS_KEY.trim();

const Unsplash = () => {
  let scrollRef = useRef();

  const [dataMain, setdataMain] = useState([]);
  const [pageNo, setPageNo] = useState(0);

  const pageLoading = () => {
    return <ActivityIndicator />;
  };

  const fetchData = async () => {
    const res = await fetch(
      `https://api.unsplash.com/photos?page=${pageNo}&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    if (data) {
      setdataMain((prevState) => prevState.concat(data));
    }
  };

  const fetchMore = () => {
    setPageNo((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  const moveToTop = () => {
    scrollRef.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <View style={styles.Container}>
      <View>
        {false ? (
          <ActivityIndicator size={10}></ActivityIndicator>
        ) : false ? (
          <Text>Error</Text>
        ) : (
          <View>
            <FlatList
              ref={(ref) => {
                scrollRef = ref;
              }}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={pageLoading}
              onEndReachedThreshold={0}
              onEndReached={fetchMore}
              numColumns={2}
              data={dataMain}
              keyExtractor={(item, index) =>
                item.id + Math.floor(Math.random() * 100) + 1
              }
              columnWrapperStyle={{ columnGap: 18 }}
              contentContainerStyle={{
                rowGap: 18,
                alignItems: "center",
              }}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: `${item.urls.thumb}` }}
                  style={{ width: 180, height: 250, borderRadius: 15 }}
                />
              )}
            />
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.tertiary,
                position: "absolute",
                top: "92%",
                left: "83%",
                height: 60,
                width: 60,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={moveToTop}
            >
              <Image
                source={icons.upArrow}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.lightWhite,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Unsplash;
