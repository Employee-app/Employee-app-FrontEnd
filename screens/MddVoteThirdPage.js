import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import {Card, RadioButton, FAB} from 'react-native-paper';

const MddVoteThirdPage = ({navigation,route}) => {
    const [checked, setChecked] = useState('SAB')
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

    const submitData = () => {
        fetch("http://10.0.2.2:3000/send-data", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                voteDepartment: checked,
                department: "Mobile Development Department"
                
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
                        value = 'SAB'
                        status = {checked === 'SAB' ? 'checked': 'unchecked'}
                        onPress = {() => setChecked('SAB')}
                    />
                        
                        <View style = {{flexDirection:'row'}}>
                            <Image 
                                style = {{height:50, width: 50, borderRadius: 25}}
                                source = {{uri: "https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                            />
                            <Text style={{margin: 10}}>Shadrach Albert Bigah</Text> 
                        </View>
                  </View> 
                    
                            
                        </Card> 
                </View>

                <View style={{flexDirection:'row'}}>
                    <Card style = {{flex: 1, margin: 3, padding: 5}}>
                    <View  style={{flexDirection: 'row'}}>
                       <RadioButton
                        value = 'EFD'
                        status = {checked === 'EFD' ? 'checked': 'unchecked'}
                        onPress = {() => setChecked('EFD')}
                    />
                        
                            <View style = {{flexDirection:'row'}}>
                               <Image 
                                style = {{height:50, width: 50, borderRadius: 25}}
                                source = {{uri: "https://images.unsplash.com/photo-1559718062-361155fad299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"}}
                            />
                            <Text style={{margin: 10}}>Esinam Fafa Dzigbodi</Text> 
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

export default MddVoteThirdPage

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