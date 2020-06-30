import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, Dimensions,Alert } from 'react-native';
import {Card, Button, RadioButton, TextInput, FAB} from 'react-native-paper';


const GddVoteSecondPage = ({navigation, route}) => {
    const [checked, setChecked] = useState('PBB')
    const [disabled, setDisabled] = useState(false)


    const submitData = () => {
        fetch("http://10.0.2.2:3000/send-data", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                voteVicePresident: checked,
                department: "Graphics Design Department"
                
            })
        })
        .then(res => res.json())
        .then(data => {
            navigation.navigate('GddVoteThirdPage')
        }).catch(err => {
            Alert.alert("Something went wrong")
        })
    }

    return (
        <View style = {styles.root}>
            <View>
                <View  style = {styles.textStyle}>
                    <Text>Vice President</Text>
                </View>
                <View>
                    <View style={{flexDirection:'row'}}>
                    <Card style = {{flex: 1, margin: 3, padding: 5}}> 
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton
                            value = 'PBB'
                            status = {checked === 'PBB' ? 'checked': 'unchecked'}
                            onPress = {() => setChecked('PBB')}
                        />
                            
                            <View style = {{flexDirection:'row'}}>
                                <Image 
                                    style = {{height:50, width: 50, borderRadius: 25}}
                                    source = {{uri: "https://images.unsplash.com/photo-1548964095-b9a292144866?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                                />
                                <Text style={{margin: 10}}>Priscilla Beauty Brown</Text> 
                            </View>
                    </View> 
                        
                                
                            </Card> 
                    </View>
            </View>

                    <View style={{flexDirection:'row'}}>
                        <Card style = {{flex: 1, margin: 3, padding: 5}}>
                        <View  style={{flexDirection: 'row'}}>
                        <RadioButton
                            value = 'AAS'
                            status = {checked === 'AAS' ? 'checked': 'unchecked'}
                            onPress = {() => setChecked('AAS')}
                        />
                            
                                <View style = {{flexDirection:'row'}}>
                                <Image 
                                    style = {{height:50, width: 50, borderRadius: 25}}
                                    source = {{uri: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                                />
                                <Text style={{margin: 10}}>Amos Augustine Selasi</Text> 
                                </View> 
                        </View>
                        
                                
                            </Card> 
                    </View>
                    
                </View>

                <View style={{flexDirection: 'column', flex: 1}}>
                <FAB disabled = {disabled} onPress = {() =>submitData(setDisabled(!disabled))}
                        style={styles.fab}
                        small = {false}
                        theme = {{colors:{accent: '#006aff'}}}
                        icon="arrow-right"
                        //onPress={() => console.log('Pressed')}
                />
            </View>
    </View>
    )
}

export default GddVoteSecondPage

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
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        alignSelf: 'flex-end',
      },
})