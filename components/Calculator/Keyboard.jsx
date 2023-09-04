import { View } from "react-native";
import { useState } from "react";
import { Styles } from "./styles/Calc";
import { Colors } from "./styles/Colors";
import Button from "./Btn";

const Keyboard = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  function handleNumberPress(btnValue) {
    if (firstNumber < 9) {
      setFirstNumber(firstNumber + btnValue);
    }
  }

  function handleOperationPress(btnValue) {
    setOperation(btnValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  }

  function clear() {
    setFirstNumber("");
    secondNumber("");
    setOperation("");
    setResult(null);
  }

  function getResult() {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;

      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;

      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;

      default:
        clear();
        setResult(0);
        break;
    }
  }
  return (
    <>
      <View style={Styles.viewBottom}>
        <View
          style={{
            height: 120,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <Text style={Styles.screenSecondNumber}>{secondNumber}</Text>
        </View>
        <View style={Styles.row}>
          <Button title="C" isGray onPress={clear} />
          <Button
            title="+/-"
            isGray
            onPress={() => handleOperationPress("+/-")}
          />
          <Button title="%" isGray onPress={() => handleOperationPress("%")} />
          <Button title="/" isBlue onPress={() => handleOperationPress("/")} />
        </View>

        <View style={Styles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button title="X" onPress={() => handleNumberPress("*")} />
        </View>
        <View style={Styles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button title="-" onPress={() => handleNumberPress("-")} />
        </View>
        <View style={Styles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
          <Button title="+" onPress={() => handleNumberPress("+")} />
        </View>
        <View style={Styles.row}>
          <Button title="." onPress={() => handleNumberPress(".")} />
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button
            title="ce"
            onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
          />
          <Button title="=" onPress={() => getResult()} />
        </View>
      </View>
    </>
  );
};

export default Keyboard;
