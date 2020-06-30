import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Alert, FlatList } from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Home = ({navigation, route})=> {
	const [data, setData] = useState([])
    const [voterID, setvoterID] = useState([])
    const [loading, setloading] = useState(true)
   
        const vali = (item) => {
        fetch("http://10.0.2.2:3000/" + voterID)
        .then(res => res.json())
        .then(results => {
            setData(results)
            console.log(results, item.userId, voterID)
            setloading(false)
            navigation.navigate("Profile", {item: results})
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    

    useEffect(() => {
        vali()
    }, [])

     const renderList = ((item) => {

        return (
            <ImageBackground
            style={styles.ImgStyle}
                source = {{uri:'https://images.unsplash.com/photo-1534293230397-c067fc201ab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}
                //resizeMode = 'contain'
                >
                <View style = {styles.cardStyle}>
                    <TextInput
                        label = "Voter's ID"
                        //value = {voterID}
                        mode = "outlined"
                        theme = {{colors:{primary: '#b02c30'}}}
                        onChangeText = {text => setvoterID(text)}
                    />
                    <Button
                        style = {styles.btnStyle}
                        icon="login"
                        mode="contained"
                        labelStyle = ""
                        theme = {{colors:{primary: '#8f8d88'}}}
                        onPress={() => vali(item)}
                        >
                        LOGIN
                    </Button>

                </View>

        </ImageBackground>
        )
    })

	return(
        <View>
            <FlatList 
                        data = {data}
                        renderItem = {({item}) => {
                            return renderList(item)
                        }}
                        keyExtractor = {item => `${item.userId}`}
                        refreshing = {loading}

            />
        </View>
	    )
}
export default Home

const styles = StyleSheet.create({
    ImgStyle: {
        flex: 1,
        width: width,
        height: height,
    },
    cardStyle: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },
    btnStyle: {
        marginTop: 10,
    }
}) 