import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import Header from '../../components/drawerHeader'

const Home = () => {

  // const route = useRoute();

  // console.log("route", route);
  // console.log("route.params", route.params);

  // console.log("route.params", route.params.user);
  // console.log("route.params", route.params.pass);  

  return (
    <View style={{
      flex:1,
      marginTop:24
    }}>
      <Header/>
      <Text>Home page</Text>
      {/* <Text>Username : {route.params.user}</Text>
      <Text>Password : {route.params.pass}</Text> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})