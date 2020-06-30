import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, Dimensions, Alert } from 'react-native';
import {Card, Button, RadioButton, TextInput, FAB} from 'react-native-paper';

const WddVoteThirdPage = ({navigation,route}) => {
    const [checked, setChecked] = useState('EAG')
    const data = new FormData()
    const [disabled, setDisabled] = useState(false)


    const submitData = () => {
        fetch("http://10.0.2.2:3000/send-data", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                voteDepartment: checked,
                department: "Web Design Department"
                
            })
        })
        .then(res => res.json())
        .then(data => {
            navigation.navigate('Home')
            Alert.alert("Done Voting. Please Exit the App")
            
        }).catch(err => {
            Alert.alert("Something went wrong")
        })
    }

    return(
    <View style={styles.root}>
        <View>
            <View  style = {styles.textStyle}>
                <Text>Department Leader</Text>
            </View>
            <View>
                <View style={{flexDirection:'row'}}>
                  <Card style = {{flex: 1, margin: 3, padding: 5}}> 
                  <View style={{flexDirection: 'row'}}>
                      <RadioButton
                        value = 'EAG'
                        status = {checked === 'EAG' ? 'checked': 'unchecked'}
                        onPress = {() => setChecked('EAG')}
                    />
                        
                        <View style = {{flexDirection:'row'}}>
                            <Image 
                                style = {{height:50, width: 50, borderRadius: 25}}
                                source = {{uri: "https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                            />
                            <Text style={{margin: 10}}>Elizabeth Akosua Gyamoah</Text> 
                        </View>
                  </View> 
                    
                            
                        </Card> 
                </View>

                <View style={{flexDirection:'row'}}>
                    <Card style = {{flex: 1, margin: 3, padding: 5}}>
                    <View  style={{flexDirection: 'row'}}>
                       <RadioButton
                        value = 'SLA'
                        status = {checked === 'SLA' ? 'checked': 'unchecked'}
                        onPress = {() => setChecked('SLA')}
                    />
                        
                            <View style = {{flexDirection:'row'}}>
                               <Image 
                                style = {{height:50, width: 50, borderRadius: 25}}
                                source = {{uri: "https://images.unsplash.com/photo-1559718062-361155fad299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                            />
                            <Text style={{margin: 10}}>Syliva Lucky Abotsi</Text> 
                            </View> 
                    </View>
                    
                            
                        </Card> 
                </View>
                
            </View>
        </View>

        <View style={{flexDirection: 'column', flex: 1}}>
                    <FAB disabled = {disabled} onPress = {() =>submitData(setDisabled(!disabled))}
                        style={styles.fab}
                        theme = {{colors:{accent: '#006aff'}}}
                        icon="vote"
                        label = "Click to Vote"
                    />
            </View>
    </View>
    )
}

export default WddVoteThirdPage

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    textStyle: {
        alignItems: 'center',
        //flexDirection: 'row',
        //fontSize: 20
    },
    vicetextStyle: {
        alignItems: 'center',
        margin: 3
    },
    viewButton: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 5,
        marginTop: 6
    },
    fab: {
        position: "absolute",
        margin: 10,
        bottom: 0,
        right: 80
    }
})