import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [low, setLow] = useState('');
  const [high, setHigh] = useState('');
  

  function calculate(text){
    setAge(text);
    if (age){
      const resultlow = (220-age)*0.65;
     setLow(resultlow)
      const resulthigh = (220-age)*0.85;
      setHigh(resulthigh);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style= {styles.input} value= {age} onChangeText={text => calculate(text)} ></TextInput>
      <Text style={styles.field} onChangeText={text => calculate(text)}>Hr limits</Text>
      <Text style={styles.field}>{low.toFixed(0)}-{high.toFixed(0)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:80,
    marginLeft:10,
  },
  field:{
    marginLeft:10,
  },
  input:{
      borderWidth: 3,
      marginLeft:10,
    borderColor: ('#1e90ff'),
  }
});