import { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import ExpenseOutput from "../components/ExpensesOutput";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpense } from "../utility/http";

const AllExpenses = () => {
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

  return (
    <ExpenseOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
      fallback={"No Expenses Available Yet"}
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
