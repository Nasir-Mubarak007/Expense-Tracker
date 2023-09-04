import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Clear = ({ onPress }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        android_ripple={{ backgroundColor: "cyan" }}
        style={({ pressed }) => {
          pressed && styles.pressed;
        }}
      >
        <Text>Clear</Text>
      </Pressable>
    </View>
  );
};

export default Clear;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 70,
    elevation: 3,
    backgroundColor: "red",
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 17,
    color: "white",
  },
  pressed: {
    opacity: 0.5,
  },
});
