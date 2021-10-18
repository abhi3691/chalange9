import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Video extends Component  {
  render(){ 
  return (
    <View style={styles.container}>
      <Text style ={styles.videoText} >videos</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'skyblue',
  },
  videoText:{
      fontSize:30,
      fontWeight:'bold',
      color:'#fff'
  }
})