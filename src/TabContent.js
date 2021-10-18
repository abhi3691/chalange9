import React,{ Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class TabContent extends Component  {
  render(){ 
  return (
    <View style={styles.container}>
        <View  style={styles.searchContainer} >   
      <TextInput
      placeholder ='Search for Service'
      
      ></TextInput>
      </View>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',


  },
  searchContainer:{
    width:'90%',
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#eee',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    backgroundColor:'#fff',
    elevation:4,
    
    
  },
  TextInput:{
      
    
      width:'60%',
      height:20,
      paddingLeft:10,
      fontWeight:'bold',
      
      



  },
})