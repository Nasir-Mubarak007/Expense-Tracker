import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./input";
import Button from "../UI/Button";
import { getFormatedDate } from "../../utility/date";
// import { useEffect } from "react";
// import { color } from "react-native-reanimated";
import { GlobalStyles } from "../../constants/styles";

export default function ExpenseForm({
  existingValue,
  onCancel,
  onSubmit,
  submitBtnLabel,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: existingValue ? existingValue.amount.toString() : "",
      isValid: true,
    },

    date: {
      value: existingValue ? getFormatedDate(existingValue.date) : "",
      isValid: true,
    },

    description: {
      value: existingValue ? existingValue.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitFormHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInput) => {
        return {
          amount: { value: currentInput.amount.value, isValid: amountIsValid },
          date: { value: currentInput.date.value, isValid: dateIsValid },
          description: {
            value: currentInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const amountIsInvalid = !inputs.amount.isValid;
  const dateIsInvalid = !inputs.date.isValid;
  const descriptionIsInvalid = !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          type="number-pad"
          label="Amount"
          inputConfig={{
            invalid: !inputs.amount.isValid,
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            invalid: !inputs.date.isValid,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
          style={styles.rowInput}
        />
      </View>
      <View style={styles.textRow}>
        {amountIsInvalid && (
          <Text style={[styles.errorText, { marginRight: "20%" }]}>
            Invalid Amount
          </Text>
        )}
        {dateIsInvalid && (
          <Text style={[styles.errorText, { marginLeft: "24%" }]}>
            Invalid Date
          </Text>
        )}
      </View>
      <Input
        label="Description"
        inputConfig={{
          invalid: !inputs.description.isValid,
          multiline: true,
          numberOfLines: 3,
          value: inputs.description.value,
          onChangeText: inputChangeHandler.bind(this, "description"),
        }}
      />
      {descriptionIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Description, please enter a valid description
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          {" "}
          {"Cancel"}
        </Button>
        <Button style={styles.button} onPress={submitFormHandler}>
          {" "}
          {submitBtnLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    color: "white",
    fontFamily: "open-sans-bold",
    textAlign: "center",
    marginVertical: 24,
  },

  button: {
    minWidth: 115,
    marginHorizontal: 8,
    overflow: "hidden",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
});
