import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons/'

export default function Create({ navigation }) {
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
      <Text>Teste</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingTop: 50 + StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#333'
  }
});

