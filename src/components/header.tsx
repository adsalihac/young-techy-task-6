import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

const Header = () => {
  const navigation = useNavigation();
  
  return (
    <View style={{
        height:50,
        backgroundColor:'red',
        justifyContent:'center'
    }}>
        <TouchableOpacity 
          onPress={()=>{
            navigation.goBack()
          }}
        style={{
            marginLeft:10,
            width:50,
            height:30,
            justifyContent:'center',
            alignItems:'center'
        }}>
         <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})