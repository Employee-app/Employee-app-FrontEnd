import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput } from 'react-native-paper';
import {WddVote} from './WddVote'

const Verify = ({navigation}) => {
  //const {votePresident,voteVicePresident,voteDepartment} = props.route.params.item
  
  return(
  <Text>{WddVote()}</Text>
  )
}


export default Verify