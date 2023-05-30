import { StyleSheet } from "react-native";
import { FONT, COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    marginTop: SIZES.small,
  },
  Heading: {
    marginVertical: SIZES.medium,
    fontFamily: FONT.Inter_Medium,
    fontSize: SIZES.medium,
  },
  HeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeadingBtn: {
    color: COLORS.tertiary,
    fontFamily: FONT.Inter_Regular,
  },
  ImageContainer: {
    flexDirection: "row",
  },
});

export default styles;
