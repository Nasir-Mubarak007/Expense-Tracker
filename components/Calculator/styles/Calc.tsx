import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const Styles = StyleSheet.create({
  btnBlue: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },

  btnDark: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.btnDark,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  btnLight: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  btnGray: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },

  smallTextLight: {
    fontSize: 14,
    color: Colors.white,
  },

  smallTextDark: {
    fontSize: 14,
    color: Colors.black,
  },

  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },

  viewBottom: {
    position: "absolute",
    bottom: 30,
  },

  screenFirstNumber: {
    fontSize: 42,
    color: Colors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },

  screenSecondNumber: {
    fontSize: 27,
    color: Colors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});
