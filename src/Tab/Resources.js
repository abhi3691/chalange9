import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Resources extends Component  {
  render(){ 
  return (
    <View style={styles.container}>
      <Text style= {styles.ResourcesText} >Resources</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue'
  },
  ResourcesText:{
    fontSize:30,
    fontWeight:'bold',
  }
})