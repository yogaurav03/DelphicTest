import React from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';

const ExpensesListScreen = ({expenses}) => {
  console.log('expenses', expenses);
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>
        {item.title} - ${item.amount.toFixed(2)}
      </Text>
    </View>
  );

  // Render an empty list message
  const renderEmptyListComponent = () => (
    <View style={styles.emptyContainer}>
      <Text>No expenses added yet.</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={expenses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyListComponent}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  list: {
    flexGrow: 1, // Ensures the empty component is centered when list is empty
  },
});

export default ExpensesListScreen;
