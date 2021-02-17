
import React from 'react';
import {
   StyleSheet, Text, View ,TextInput,TouchableOpacity
  } from 'react-native';
export default function formRegistertion() {

  return (
    <View style={styles.regForm}>
      <Text style={styles.header}>Registertion</Text>
      <TextInput style={styles.input} placeholder='Full Name' autoFocus />
      <TextInput style={styles.input} placeholder='Email'/>
      <TextInput style={styles.input} placeholder='Phone' keyboardType='numeric' />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTxt}>sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  regForm:{
    alignSelf:'stretch',
    paddingLeft:40,
    paddingRight:40,
    width:500,
    textAlign:"center"
    
  },
  header:{
    borderBottomColor:'#199187',
    borderBottomWidth:1,
    paddingBottom:10,
    marginBottom:10,
    fontSize:20
  },
  input:{
    padding:30,
    marginBottom:10,
    borderColor:'#199187',
    borderWidth:1

  },
  button:{
    backgroundColor:'#199187',
    alignItems:"center",
    padding:30
  },
  buttonTxt:{
    color:'#fff',
    fontWeight:'bold'
  }

});
