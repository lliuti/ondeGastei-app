import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons/'

import api from '../../services/api';

export default function Create({ navigation }) {
  const [type, setType] = useState('question');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [showTypes, setShowTypes] = useState(false);

  async function createExpense() {
    const response = await api.post('/expenses', {
      type,
      description: desc,
      price,
    });

    console.log(response);
  };

  return (
    <>
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Main');
        }}>
          <FontAwesome5 name='chevron-left' size={42} color='#333'/>
        </TouchableOpacity>
      </View>
      <View style={styles.newExpenseContainer}>
        <View style={styles.expenseBox}>
          <View style={styles.expenseType}>
            <TouchableOpacity onPress={() => showTypes === false ? setShowTypes(true) : setShowTypes(false)}>
              <FontAwesome5 name={type} size={26} color='#ccc'/>
            </TouchableOpacity>
            {showTypes === false ? null : (
              <View style={styles.iconGroup}>
                <TouchableOpacity onPress={() => {
                  setType('utensils');
                  setShowTypes(false);
                }}>
                  <FontAwesome5 style={styles.icon} name='utensils' size={26} color='#444'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setType('tshirt');
                  setShowTypes(false);
                }}>
                  <FontAwesome5 style={styles.icon} name='tshirt' size={26} color='#444'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setType('car-alt');
                  setShowTypes(false);
                }}>
                  <FontAwesome5 style={styles.icon} name='car-alt' size={26} color='#444'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setType('dollar-sign');
                  setShowTypes(false);
                }}>
                  <FontAwesome5 style={styles.icon} name='dollar-sign' size={26} color='#444'/>
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.expenseDescription}>
            <TextInput value={desc} onChangeText={text => setDesc(text)} style={styles.input} placeholderTextColor='#444' placeholder='Descrição'/>
          </View>
          <View style={styles.expensePrice}>
            {/* <Text style={styles.defaultText}>R$ 00,00</Text> */}
            <TextInput value={price} onChangeText={text => setPrice(text)} style={styles.input} keyboardType='number-pad' placeholderTextColor='#444' placeholder='00,00'/>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={createExpense} style={styles.createExpenseButton}>
        <FontAwesome5 color='#f5f5f5' name='plus' size={26}/>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  iconGroup: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 30,
  },
  createExpenseButton: {
    alignItems: 'center',
  },
  topContainer: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingTop: 30 + StatusBar.currentHeight,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  newExpenseContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  expenseBox: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    elevation: 10,
    marginVertical: 5,
    marginBottom: 0,
    borderRadius: 15,
  },
  expenseType: {
    flexDirection: 'row',
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
  input: {
    color: '#000',
    fontSize: 22,
  },
  defaultText: {
    fontSize: 20,
    color: '#333',
  },
});

