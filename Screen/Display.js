import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { firebase } from "./Firebase/config";


function displayy() {
    const [data, setData] = useState([]);
    let id = firebase.auth().currentUser.uid
    useEffect(() => {
        firebase.firestore().collection("Bookmarks").doc(id).collection("music").onSnapshot((snapshot) => {
            console.log()
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setData(data);
        });

    }, []);
    return data;
}
const Display = ({navigation}) => {
    let id = firebase.auth().currentUser.uid;
    const handleOnDelete = (user) => {
        firebase.firestore().collection("Bookmarks").doc(id).collection("music").doc(user).delete().then(() => {
            alert("Deleted")
        });
    }
    const handleupdate = (id) =>{
        navigation.navigate('update',{id:id})

    }
    const array = displayy()
    return (
        <View style={styles.container}>
            {array.map(data => {
                return (<View>
                    <Text style={styles.Text}>WOONSTUDIO <Text style={{color: '#333'}}>BOOKMARK</Text> </Text>
                    <Text>{data.ArtistName}</Text>
                    <Text>{data.Track}</Text>
                    <Text>{data.Album}</Text>
                    <Text>{data.Website}</Text>
                    <TouchableOpacity style={styles.addwrapper} onPress={() => handleOnDelete(data.id)}>
                        <View>
                            <Text>delete</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addwrapper2} onPress={() => handleupdate(data.id)}>
                        <View>
                            <Text>Update</Text>
                        </View>
                    </TouchableOpacity>
                </View>)
            })}
        </View>
    )
}
//teejay@gmail.com
export default Display;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#bea925',
        boxShadow: '1px 1px 3px rgba(0,0,0,0.5)',
        flexShrink: '0',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '20%',


    },
    addwrapper:{
        width: '60px',
        height: '60px',
        backgroundColor: '#FFF',
        borderRadius: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: '1px',
        boxShadow: '1px 1px 3px rgba(0,0,0,0.5)',
        marginLeft: '70%',
        marginbottom: '20%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: '0px',
        fontFamily: 'arial black',
    },
    addwrapper2:{
        width: '60px',
        height: '60px',
        backgroundColor: '#96be25',
        borderRadius: '60px',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: '1px',
        boxShadow: '1px 1px 3px rgba(0,0,0,0.5)',
        marginLeft: '90%',
        marginbottom: '20%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: '0px',
        fontFamily: 'arial black',
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


})