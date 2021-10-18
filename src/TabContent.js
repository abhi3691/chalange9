import React,{ Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class TabContent extends Component  {
  render(){ 
  return (
    <View style={styles.container}>
        <View  style={styles.searchContainer} >   
        <Icon
        name ='search' size={35}
        />
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
    justifyContent:'flex-start',
    borderRadius:8,
    backgroundColor:'#fff',
    elevation:4,
    paddingLeft:25,
    
    
    
  },
  TextInput:{
      
    
      width:'100%',
      height:20,
      paddingLeft:10,
      fontWeight:'bold',
      
      
      



  },
})