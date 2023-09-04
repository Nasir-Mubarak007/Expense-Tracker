import { FlatList, Text, View } from "react-native";
import React from "react";

import ExpensesItem from "./ExpensesItem";

function showlist(itemData) {
  return <ExpensesItem {...itemData.item} />;
}

const List = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={showlist}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
