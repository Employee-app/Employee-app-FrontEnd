import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Linking,Platform, Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Title, Card, Button} from 'react-native-paper';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

const Profile = (props, {route}) => {
    const {userId,name,picture,salary,phone,email,position} = props.route.params.item
    
    const openDial =() => {
        let phoneNumber = '';
        if (Platform.OS === 'android'){
            phoneNumber = `tel:${phone}`;
        }else {
            phoneNumber = `telprompt:${phone}`;
        }
        Linking.openURL(phoneNumber);
    };
    return (
        <View
            style = {styles.root}
        >
            <LinearGradient 
                colors = {['#edd38c', '#6bc1ff']}
                style = {{height: '20%'}}
            >
            
            </LinearGradient>
            <View style = {styles.linearViewStyle}>
                <Image style = {styles.linearImageStyle}
                    source = {{uri: picture}}
                />
            </View>

            <View style={{alignItems: 'center', margin: 15}}>
                <Title>{name}</Title>
                <Text>{position}</Text>
            </View>

            
            <Card
                style = {styles.cardStyle}
            >
                <View
                    style = {styles.cardViewStyle}
                   
                >
                    <AntDesign name="idcard" size={32} color="black" />
                    <Text style={styles.matTextStyle}>{userId}</Text>
                </View>

            </Card>

            <Card
                style = {styles.cardStyle}
                onPress = {() => {
                    Linking.openURL(`mailto:${email}`)
                }}
            
            >
                <View style = {styles.cardViewStyle}>
                    <MaterialIcons name="email" size={32} color="black" />
                    <Text style={styles.matTextStyle}>{email}</Text>
                </View>

            </Card>

            <Card
                style = {styles.cardStyle}
                onPress = {() => openDial}
            
            >
                <View
                    style = {styles.cardViewStyle}
                   
                >
                    <MaterialIcons name="local-phone" size={32} color="black" />
                    <Text style={styles.matTextStyle}>{phone}</Text>
                </View>

            </Card>

            <Card
                style = {styles.cardStyle}
            
            >
                <View style = {styles.cardViewStyle}>
                    <MaterialIcons name="attach-money" size={32} color="black" />
                    <Text style={styles.matTextStyle}>{salary}</Text>
                </View>

            </Card>
            <View style={styles.viewButton}>
                <Button
                    icon="delete"
                    mode="contained"
                    //onPress={() => props.navigation.navigate("Department")}>
                    onPress = {() => props.navigation.navigate("Biometric")}>
                    Click to Vote
                </Button>
            </View>
            
        </View>
    )
}

const styles =StyleSheet.create({
    root: {
        flex: 1
    },
    linearViewStyle: {
        alignItems: 'center'
    },
    linearImageStyle: {
        height: 140,
        width: 140,
        borderRadius: 70,
        marginTop: -50
    },
    cardStyle: {
        margin: 3,
    },
    cardViewStyle: {
        flexDirection: 'row',
        padding: 8,
    },
    matTextStyle: {
        marginLeft: 5,
        marginTop: 2,
        fontSize: 18,
    },
    viewButton: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 5
    }
})
export default Profile