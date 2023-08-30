import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState(' ');
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);
  

  function calculate(age){
    setAge(age);
    
      const low = (220-age) * 0.65;
      setLow(low)
      const high = (220-age) * 0.85;
      setHigh(high)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style= {styles.input} value= {age} onChangeText={age => calculate(age)} keyboardType='decimal-pad' ></TextInput>
      <Text style={styles.field} onChangeText={text => calculate(text)}>Hr limits</Text>
      <Text style={styles.field}>{low.toFixed()}-{high.toFixed()} </Text>
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