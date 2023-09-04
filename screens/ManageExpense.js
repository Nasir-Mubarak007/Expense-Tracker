import { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";

import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import IconBtn from "../components/UI/iconBtn";
import { ExpensesContext } from "../store/expenses-context";
import { deleteExpense, postExpense, updateExpense } from "../utility/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  const editExpenseId = route.params?.expenseId;
  const isEditing = !!editExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(editExpenseId);
      expensesCtx.deleteExpense(editExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("Could'nt delete expense", error.message);
      setIsSubmitting(false);
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }
  async function confirmHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editExpenseId, expenseData);
        await updateExpense(editExpenseId, expenseData);
        alert("expense updated");
      } else {
        const id = await postExpense(expenseData);
        alert("expense added");
        expensesCtx.addExpense({ ...expenseData, id: id });
        navigation.goBack();
      }
    } catch (error) {
      setError("Could'nt save data", error.message);
      setIsSubmitting(false);
    }
  }

  if (isSubmitting) {
    return <LoadingOverlay text="submiting request" />;
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay text={error} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        existingValue={selectedExpense}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitBtnLabel={isEditing ? "Update" : "Add"}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconBtn
            icon="delete"
            color={GlobalStyles.colors.error500}
            size={32}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    paddingTop: 8,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
