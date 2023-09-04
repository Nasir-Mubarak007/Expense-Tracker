import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const IconBtn = ({ icon, color, size, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={onPress}
        style={({ pressed }) => {
          pressed && styles.pressed;
        }}
      >
        <View style={styles.pressableContainer}>
          <AntDesign name={icon} color={color} size={size} />
        </View>
      </Pressable>
    </View>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    marginHorizontal: 8,
    marginVertical: 2,
    overflow: "hidden",
  },
  pressableContainer: {
    padding: 6,
  },
  pressed: {
    opacity: 0.75,
  },
});
