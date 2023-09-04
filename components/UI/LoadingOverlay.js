import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const LoadingOverlay = ({ text }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={GlobalStyles.colors.accent500} />
      <Text style={styles.text}>`{text}...`</Text>
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontFamily: "open-sans-bold",
  },
});
