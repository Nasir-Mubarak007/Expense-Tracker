import { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { Styles } from "./styles/Calc";
import { ThemeContext } from "./context/ThemeContext";

const Button = ({ title, onPress, isBlue, isGray }) => {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
