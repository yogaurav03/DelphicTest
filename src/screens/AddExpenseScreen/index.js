import React, {useState} from 'react';
import {Button, TextInput, View, Text, StyleSheet} from 'react-native';

const AddExpenseScreen = ({onAddExpense}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    onAddExpense({title, amount: parseFloat(amount)});
    setTitle('');
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text>Title:</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      <Text>Amount:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        keyboardType="numeric"
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
  },
});

export default AddExpenseScreen;
