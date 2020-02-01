import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons/';

import api from '../../services/api';

export default function Main({ navigation }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    loadExpenses();
  }, []);

  async function loadExpenses() {
    const response = await api.get('/expenses');
    setExpenses(response.data);
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
            <FontAwesome5 name='utensils' size={26} color='#eee'/>
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
    paddingVertical: 50,
    paddingTop: 50 + StatusBar.currentHeight,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  expenseBox: {
    // flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    marginVertical: 5,
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
    color: '#eee',
  },
});
