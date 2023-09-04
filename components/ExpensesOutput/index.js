import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Summary from "./Summary";
import List from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const ExpenseOutput = ({ expenses, expensesPeriod, fallback }) => {
  let content = <Text style={styles.infoText}>{fallback}</Text>;

  if (expenses.length > 0) {
    content = <List expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <Summary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 16,
    textAlign: "center",
    marginTop: 33,
  },
});
