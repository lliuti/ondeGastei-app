import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons/'

import api from '../../services/api';

export default function Main() {
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  async function loadExpenses() {
    const response = await api.get('/expenses');
    setExpenses(response.data);
  };

  return (
    <View style={styles.container}>
      {expenses.map(expense => (
        <View key={expense.id} style={styles.expenseBox}>
          <View style={styles.expenseType}>
            <FontAwesome5 name='utensils' size={26}/>
          </View>
          <View style={styles.expenseDescription}>
            <Text style={styles.defaultText}>{expense.description}</Text>
          </View>
          <View style={styles.expensePrice}>
            <Text style={styles.defaultText}>{expense.price}</Text>
          </View>
        </View>
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#af9',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  expenseBox: {
    // flex: 1,
    backgroundColor: '#bf9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    marginVertical: 10,
  },
  expenseType: {
    borderRightColor: '#666',
    borderRightWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  expenseDescription: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRightColor: '#666',
    borderRightWidth: 1,
  },
  expensePrice: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  defaultText: {
    fontSize: 20,
  },
});
