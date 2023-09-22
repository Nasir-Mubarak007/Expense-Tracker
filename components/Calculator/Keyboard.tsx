import { Text, View } from "react-native";
import { useState } from "react";
import { Styles } from "./styles/Calc";
import { Colors } from "./styles/Colors";
import Btn from "./Btn";
import React from "react";

const Keyboard = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function handleNumberPress(btnValue: string) {
    if (firstNumber.length < 9) {
      setFirstNumber(firstNumber + btnValue);
    }
  }

  function handleOperationPress(btnValue: string) {
    setOperation(btnValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  }

  function clear() {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  }

  function firstNumberDisplay() {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: Colors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 20, color: Colors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }

    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }

    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }

    if (firstNumber.length > 5 && firstNumber.length > 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 40 }]}>
          {firstNumber}
        </Text>
      );
    }

    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 20 }]}>
          {firstNumber}
        </Text>
      );
    }
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
            height: 170,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <Text style={Styles.screenSecondNumber}>
            {secondNumber}
            <Text style={{ color: "purple", fontSize: 20, fontWeight: "500" }}>
              {operation}
            </Text>
          </Text>
          {firstNumberDisplay()}
        </View>

        <View style={Styles.row}>
          <Btn title="C" isGray onPress={clear} />
          <Btn title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
          <Btn title="%" isGray onPress={() => handleOperationPress("%")} />
          <Btn title="/" isBlue onPress={() => handleOperationPress("/")} />
        </View>

        <View style={Styles.row}>
          <Btn title="7" onPress={() => handleNumberPress("7")} />
          <Btn title="8" onPress={() => handleNumberPress("8")} />
          <Btn title="9" onPress={() => handleNumberPress("9")} />
          <Btn title="X" isBlue onPress={() => handleOperationPress("*")} />
        </View>

        <View style={Styles.row}>
          <Btn title="4" onPress={() => handleNumberPress("4")} />
          <Btn title="5" onPress={() => handleNumberPress("5")} />
          <Btn title="6" onPress={() => handleNumberPress("6")} />
          <Btn title="-" isBlue onPress={() => handleOperationPress("-")} />
        </View>

        <View style={Styles.row}>
          <Btn title="1" onPress={() => handleNumberPress("1")} />
          <Btn title="2" onPress={() => handleNumberPress("2")} />
          <Btn title="3" onPress={() => handleNumberPress("3")} />
          <Btn title="+" isBlue onPress={() => handleOperationPress("+")} />
        </View>

        <View style={Styles.row}>
          <Btn title="." onPress={() => handleNumberPress(".")} />
          <Btn title="0" onPress={() => handleNumberPress("0")} />
          <Btn
            title="ce"
            onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
          />
          <Btn title="=" isBlue={true} onPress={() => getResult()} />
        </View>
      </View>
    </>
  );
};

export default Keyboard;
