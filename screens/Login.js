import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert} from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Login =({navigation})=> {
    
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)

    const fetchData = () => {
        fetch("http://10.0.2.2:3000/")
        .then(res => res.json())
        .then(results => {
            //console.log(results)
            setData(results)
            setloading(false)
        }).catch(err => {
            Alert.alert("Something went wrong")
        })
    }


    useEffect(() => {
        fetchData()
    }, [])
     const renderList = ((item) => {
        return (
            <Card
                style = {styles.mycard}
                //onPress = {() => navigation.navigate('Profile', {item})}
                onPress = {() => navigation.navigate('Login', {item})}
                //onPress = {() => navigation.navigate('Department', {item})}
                >
            <View style = {styles.cardView}>
                <Image 
                    style = {styles.imgStyles}
                    source = {{uri: item.picture}}
                />
                <View>
                    <Text style = {styles.viewText}>{item.name}</Text>
                    <Text style = {styles.viewText}>{item.position}</Text>  
                </View>
            </View>
        </Card>
        )
    })

    return (
        <View style ={{flex: 1}}>
           
            <FlatList 
                data = {data}
                renderItem = {({item}) => {
                    return renderList(item)
                }}
                keyExtractor = {item => `${item._id}`}
                //onRefresh = {() => fetchData()}
                refreshing = {loading}
            />
            
        </View>

        
    );
}

const styles =StyleSheet.create ({
    mycard: {
        margin: 5,
        padding: 5,
    },
    imgStyles: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    cardView: {
        flexDirection: 'row',
    },
    viewText: {
        marginLeft: 10,
    },
})

export default Login;