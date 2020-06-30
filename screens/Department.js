import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Card} from 'react-native-paper';


const Department = ({navigation, route}) => {
    return (
        <View style={styles.root}>
            <Card 
                style = {styles.cardStyle}
                onPress = {() => navigation.navigate('WddVote')}
            >
                <View style={styles.cardViewStyle}>
                    <Text>Web Development Department</Text>
                </View>
            </Card>

            <Card
                style = {styles.cardStyle}
                onPress = {() => navigation.navigate('MddVote')}
            >
                <View style={styles.cardViewStyle}>
                    <Text>Mobile Development Department</Text>
                </View>
            </Card>

            <Card
                style = {styles.cardStyle}
                onPress = {() => navigation.navigate('GddVote')}
            >
                <View style={styles.cardViewStyle}>
                    <Text>Graphic Design Department</Text>
                </View>
            </Card>
        </View>
    )
}

export default Department

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    cardViewStyle: {
        flexDirection: 'row',
        padding: 16,
    },
    cardStyle: {
        margin: 5
    }
})