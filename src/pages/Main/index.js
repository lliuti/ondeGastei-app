import React, { useState, useEffect } from 'react';
import { Alert, StatusBar, StyleSheet, View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons/';

import api from '../../services/api';

export default function Main({ navigation }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadExpenses();
    if (expenses !== []) {
      getStoredExpenses();
    };
  }, []);

  async function loadExpenses() {
    const response = await api.get('/expenses');
    setExpenses(response.data);
    await AsyncStorage.setItem('expenses', JSON.stringify(response.data));
  };

  async function getStoredExpenses() {
    const stored = await AsyncStorage.getItem('expenses');
    setExpenses(JSON.parse(stored));
    console.log(stored);
  };
  

  return (
    <>
    <View style={styles.topContainer}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Create');
        }}>
        <FontAwesome5 name='plus' size={42} color='#eee'/>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      {expenses.map(expense => (
        <View key={expense.id} style={styles.expenseBox}>
          <View style={styles.expenseType}>
            <FontAwesome5 name={expense.type} size={26} color='#eee'/>
          </View>
          <View style={styles.expenseDescription}>
            <Text style={styles.defaultText}>{expense.description}</Text>
          </View>
          <View style={styles.expensePrice}>
            <Text style={styles.defaultText}>R$ {expense.price}</Text>
          </View>
        </View>
      ))}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  topContainer: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingTop: 30 + StatusBar.currentHeight,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  expenseBox: {
    backgroundColor: '#333',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    elevation: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  expenseType: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  expenseDescription: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  expensePrice: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  defaultText: {
    fontSize: 20,
    color: '#eee',
  },
});
