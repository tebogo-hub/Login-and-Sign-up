import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from "./Firebase/config";


export default function Signup({ navigation }) {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const Signup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      alert("Sign up successfully")
      { navigation.navigate("Login") }
      var db = firebase.firestore();
      db.collection("users").doc(email).set({
        firstName: firstName,
        confirmPassword: confirmPassword,

      })
        .then(() => {
        }).catch((error) => {
          alert(error)
        })
    }).catch((error) => {
      alert(error)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}> WOONSTUDIO <Text style={{color: '#333'}}>SIGNUP</Text> </Text>

      <TextInput placeholder="Full Name" style={styles.TextInput} onChangeText={(firstName) => setFirstName(firstName)} />
      <TextInput placeholder="Email" style={styles.TextInput} onChangeText={(email) => setEmail(email)} />
      <TextInput placeholder="Password" style={styles.TextInput} onChangeText={(password) => setPassword(password)} />
      <TextInput placeholder="Confirm Password" style={styles.TextInput} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} />
      <TouchableOpacity style={styles.paragraph}>
        <Text style={styles.Text2} onPress={Signup}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#bea925',
    boxShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    flexShrink: '0',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '10%',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial',
    color: 'white',
    backgroundColor: '#063970',
    width: '100px',
    height: '30px',
    marginBottom: '10px',

  },
  TextInput: {
    borderWidth: '1px',
    borderColor: '#333',
    width: '300px',
    height: '40px',
    paddingLeft: '10px',
    marginBottom: '10px',
    // boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    color: 'white'

  },
  Text2: {
    color: 'white',

  },
  Text: {
       
    margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial black',
    color: '#FFF',
    paddingTop: '2%',
    // boxShadow: '1px 1px 3px rgba(0,0,0,0.5)',
},
})