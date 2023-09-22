import { FlatList, StyleSheet, Text, View, Switch } from "react-native";
import { useState } from "react";

import { ThemeContext } from "../components/Calculator/context/ThemeContext";
import { Colors } from "../components/Calculator/styles/Colors";
import Keyboard from "../components/Calculator/Keyboard";
import { GlobalStyles } from "../constants/styles";

const Calculator = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: Colors.black }]
        }
      >
        <Switch
          value={theme === "dark"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <Keyboard />
      </View>
    </ThemeContext.Provider>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },

  end: {
    backgroundColor: "plum",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
});
