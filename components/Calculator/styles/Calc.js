import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const Styles = StyleSheet.create({
  btnBlue: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },

  btnDark: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: Colors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  btnLight: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  btnGray: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },

  smallTextLight: {
    fontSize: 24,
    color: Colors.white,
  },

  smallTextDark: {
    fontSize: 24,
    color: Colors.black,
  },

  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },

  viewBottom: {
    position: "absolute",
    bottom: 50,
  },

  screenFirstNumber: {
    fontSize: 72,
    color: Colors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },

  screenSecondNumber: {
    fontSize: 37,
    color: Colors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
