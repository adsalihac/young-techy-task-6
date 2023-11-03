import { StyleSheet, Text, View  } from 'react-native'
import React from 'react'
import Header from './../../components/header'
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{
      flex:1,
      paddingTop:40
    }}>
      <Header/>
      <Text>Registration</Text>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({})