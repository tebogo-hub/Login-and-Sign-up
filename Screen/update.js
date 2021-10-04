import React, {  useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from "./Firebase/config";



export default function Home({ navigation,route }) {
    let {id} = route.params
  const Home = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
      alert("Sign In successfully")
      { navigation.navigate("Display") }
      var user = userCredential.user;
    })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

 
  const [ArtistName, setArtistName] = useState('');
  const [Track, setTrack] = useState('');
  const [Album, setAlbum] = useState('');
  const [Website, setWebsite] = useState('');
 
  const handleSubmit = ()=> {
    const user = firebase.auth().currentUser.uid
    firebase.firestore().collection('Bookmarks').doc(user).collection('music').doc(id).update({ 
ArtistName, Track,Album,Website

    }).then(()=>{
        alert("successfully updated")
    })
  };
  return (
    <View style={styles.container}>
      
      <Text style={styles.Text}>WOONSTUDIO <Text style={{color: '#333'}}>BOOKMARK</Text> </Text>
      <TextInput placeholder="Artist Name" style={styles.TextInput} onChangeText={(ArtistName)=>setArtistName(ArtistName)} />
      <TextInput placeholder="Track" style={styles.TextInput} onChangeText={(Track)=>setTrack(Track)} />
      <TextInput placeholder="Album" style={styles.TextInput} onChangeText={(Album)=>setAlbum(Album)} />
      <TextInput placeholder="Website" style={styles.TextInput} onChangeText={(Website)=>setWebsite(Website)}/>

 

      <TouchableOpacity style={styles.Text2}>
        <Text style={styles.Text2} onPress={()=>handleSubmit()}>update</Text>
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
    boxShadow: '1px 1px  3px rgba(0,0,0,0.9)',
    flexShrink: '0',
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '10%',
  },
  TextInput: {
    borderWidth: '1px',
    borderColor: '#333',
    width: '300px',
    height: '40px',
    paddingLeft: '10px',
    marginBottom: '10px',
    color: 'white'
  },
  Text2: {
    margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial black',
    color: 'white',
    paddingTop: '2%',
    backgroundColor: '#333',
  
    
  },
  Text: {
    margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'arial black',
    color: 'white',
    paddingTop: '2%', 
 
  },
  Add:{
    fontFamily:'arial',
    color: 'white',
    marginTop: '5%',
    fontSize: 15,
    fontFamily: 'arial black',
    
  }

});