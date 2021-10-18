import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class QNBank extends Component  {
  render(){ 
  return (
    <View style={styles.container}>
      <Text style ={styles.QNBankText} >QNBank</Text>
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
  QNBankText:{
      fontSize:30,
      fontWeight:'bold',
      color:'#fff'
  }
})