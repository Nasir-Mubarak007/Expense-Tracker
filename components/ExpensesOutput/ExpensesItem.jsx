import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { getFormatedDate } from "../../utility/date";
import { useNavigation } from "@react-navigation/native";

const ExpensesItem = ({ id, description, date, amount }) => {
  const navigation = useNavigation();
  function expenseMangeHandler() {
    navigation.navigate("ManageExpenses", { expenseId: id });
  }
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={expenseMangeHandler}
        style={({ pressed }) => {
          pressed && styles.pressed;
        }}
      >
        <View style={styles.expenseItem}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>N{amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    marginVertical: 8,
    overflow: "hidden",
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 9,
    alignItems: "center",
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 14,
    fontFamily: "open-sans",
    marginBottom: 4,
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: "gold",
  },

  amountContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary100,
  },

  amount: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    color: GlobalStyles.colors.primary700,
  },
});
