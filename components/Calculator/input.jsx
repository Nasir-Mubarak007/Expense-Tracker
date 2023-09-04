import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Input = ({ input, result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.calc}>{input}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 9,
    // height: 230,
    // width: "100%",
    backgroundColor: "black",
    padding: 20,
    color: "gold",
    gap: 22,
    elevation: 4,
  },
  calc: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "right",
  },
  result: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    color: "gold",
    textAlign: "right",
  },
});
