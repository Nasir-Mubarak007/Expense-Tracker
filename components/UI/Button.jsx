import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Button = ({ children, onPress, style, mode }) => {
  return (
    <View style={style}>
      <Pressable
        android_ripple={{ color: GlobalStyles.colors.primary100 }}
        onPress={onPress}
        style={({ pressed }) => {
          pressed && styles.pressed;
        }}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 7,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    color: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
