import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {firebase} from "./Firebase/config";


export default function Login({navigation}) {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const Login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            alert("Sign In successfully")
        {navigation.navigate("Home")}
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
      }

    return (
        <View style={styles.container}>
            <Text style={styles.Text2}>WOONSTUDIO <Text style={{color:'#333'}}>LOGIN </Text></Text>

            <TextInput placeholder="Email" style={styles.TextInput} onChangeText={(email) => setEmail(email)}/>
            <TextInput placeholder="Password" style={styles.TextInput} onChangeText={(password) => setPassword(password)}/> 
            <TouchableOpacity style={styles.paragraph} >
                <Text style={styles.Text3} onPress={Login} >Login</Text>
            </TouchableOpacity>

            <Text style={styles.Text}>Dont have an account ? <Text styles={{color:"DarkBlue"}} onPress={() => navigation.navigate('Signup')}>Sign up</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor:'#bea925',
        boxShadow:'1px 1px 3px rgba(0,0,0,0.5)',
        flexShrink:'0',
        marginLeft:'20%',
        marginRight:'20%',
        marginTop:'10%',
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
        color:'white'
    },
    Text2: {
       
        margin: 25,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'arial black',
        color: '#FFF',
        paddingTop: '2%',
        // boxShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    },
    Text3 :{
        color:'white',

    }
});
