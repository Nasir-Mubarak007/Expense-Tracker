import { useState } from "react";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import ExpenseOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utility/date";
import { fetchExpense } from "../utility/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getRequest() {
      try {
        const expenses = await fetchExpense();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Sorry, could'nt fetch expenses", error.message);
      }
      setIsLoading(false);
    }
    getRequest();
  }, []);

  if (isLoading) {
    return <LoadingOverlay text="Loading" />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay text={error} />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo;
  });
  return (
    <ExpenseOutput
      expenses={recentExpenses}
      expensesPeriod={"Last 7 days"}
      fallback={"No Expenses for The Last 7 Days"}
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
