import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpensesListScreen from '@/screens/ExpenseListScreen'; // Adjust the import path as needed
import AddExpenseScreen from '@/screens/AddExpenseScreen'; // Adjust the import path as needed
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [expenses, setExpenses] = useState([
    {title: 'Text Expense', amount: 50.0},
  ]);

  const handleAddExpense = expense => {
    setExpenses(currentExpenses => [expense, ...currentExpenses]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Expenses">
        <Stack.Screen
          name="Expenses"
          options={({navigation}) => ({
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('AddExpense')}
                title="Add"
              />
            ),
          })}>
          {() => <ExpensesListScreen expenses={expenses} />}
        </Stack.Screen>
        <Stack.Screen name="AddExpense" options={{title: 'Add Expense'}}>
          {() => <AddExpenseScreen onAddExpense={handleAddExpense} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
