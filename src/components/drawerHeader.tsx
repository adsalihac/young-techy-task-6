import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 


const DrawerHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{
        height:50,
        backgroundColor:'red',
        justifyContent:'center'
    }}>
        <TouchableOpacity 
          onPress={()=>{
            navigation.toggleDrawer();
          }}
        style={{
            marginLeft:10,
            width:50,
            height:30,
            justifyContent:'center',
            alignItems:'center'
        }}>
       <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default DrawerHeader

const styles = StyleSheet.create({})