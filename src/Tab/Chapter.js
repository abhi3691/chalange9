import React,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class  Chapter extends Component  {
    render(){

  return (
    <View style={styles.container}>
      <Text style= {styles.ChapterText} >Chapter</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'skyblue'
},
ChapterText:{
    fontSize:30,
    fontWeight:'bold',
    color:'#fff'
}
  
})

