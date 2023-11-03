import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={{
      flex:1,
      backgroundColor:'red'
    }}>
      <Text>Login</Text>
      <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('registration')
        }}
      style={{
        height:100,
        width:100,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text>Registration</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})