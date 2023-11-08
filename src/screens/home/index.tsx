import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const Home = () => {

  const route = useRoute();

  console.log("route", route);
  console.log("route.params", route.params);

  console.log("route.params", route.params.user);
  console.log("route.params", route.params.pass);  

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text>Username : {route.params.user}</Text>
      <Text>Password : {route.params.pass}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})