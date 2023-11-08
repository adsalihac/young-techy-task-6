import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

const Splash = () => {
   
    const navigation = useNavigation();

    React.useEffect(() => {
      setTimeout(() => {
        navigation.navigate('login');
      }, 3000);
    }, [])
    

  return (
    <LinearGradient style={styles.container}
      colors={['#4c669f', '#3b5998', '#192f6a']}
    >
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
      }}>Splash Screen</Text>
       <Ionicons name="md-checkmark-circle" size={50} color="white" />
  </LinearGradient>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})