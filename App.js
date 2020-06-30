import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Department from './screens/Department';

import WddVote from './screens/WddVote';
import WddVoteSecondPage from './screens/WddVoteSecondPage';
import WddVoteThirdPage from './screens/WddVoteThirdPage';

import GddVote from './screens/GddVote';
import GddVoteSecondPage from './screens/GddVoteSecondPage';
import GddVoteThirdPage from './screens/GddVoteThirdPage';

import MddVote from './screens/MddVote';
import MddVoteSecondPage from './screens/MddVoteSecondPage';
import MddVoteThirdPage from './screens/MddVoteThirdPage';

import Biometric from './screens/Biometric';
import Login from './screens/Home';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();


function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
            options = {{
              title: "Login Page",
              headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#006aff",
              }
          }}
          />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options = {{
            title: "Profile",
            headerTintColor: "white",
              headerStyle: {
                backgroundColor: "#006aff",
            }
        }}
          />
          <Stack.Screen
            name = "Department"
            component = {Department}
            options = {{
              title: "Choose Your Department",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "WddVote"
            component = {WddVote}
            options = {{
              title: "President Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "GddVote"
            component = {GddVote}
            options = {{
              title: "President Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "MddVote"
            component = {MddVote}
            options = {{
              title: "President Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "Biometric"
            component = {Biometric}
            options = {{
              title: "FingerPrint",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "WddVoteSecondPage"
            component = {WddVoteSecondPage}
            options = {{
              title: "Vice President Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "WddVoteThirdPage"
            component = {WddVoteThirdPage}
            options = {{
              title: "Department Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "GddVoteSecondPage"
            component = {GddVoteSecondPage}
            options = {{
              title: "Vice President Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "GddVoteThirdPage"
            component = {GddVoteThirdPage}
            options = {{
              title: "Department Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "MddVoteSecondPage"
            component = {MddVoteSecondPage}
            options = {{
              title: "Vice President Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
          <Stack.Screen
            name = "MddVoteThirdPage"
            component = {MddVoteThirdPage}
            options = {{
              title: "Department Section",
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: "#006aff"
              }
            }}  
          />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
        <App />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbbb63',
    //marginTop: Constants.statusBarHeight,
  },
});
