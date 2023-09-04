import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { GlobalStyles } from "../../constants/styles";

const Summary = ({ expenses, periodName }) => {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>N{expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 7,
  },
  period: {
    fontSize: 13,
    fontFamily: "open-sans",
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
    color: GlobalStyles.colors.primary500,
  },
});
