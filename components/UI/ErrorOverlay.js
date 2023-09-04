import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const ErrorOverlay = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        Oops something went wrong!
      </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontFamily: "open-sans",
    marginBottom: 8,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
});
