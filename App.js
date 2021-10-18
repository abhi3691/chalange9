import React from 'react'
import { View,Text,StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { createStackNavigator } from '@react-navigation/stack';
import Video from './src/Tab/Video';
import Chapter from './src/Tab/Chapter';
import Resources from './src/Tab/Resources';
import QNBank from './src/Tab/QNBank';


const Tab = createMaterialTopTabNavigator()
const stack = createStackNavigator()

function MyStack(){
  return(
   
    <stack.Navigator >
      
      <stack.Screen
      name ='Tab'
      component ={MYTab}
      options ={{headerShown:false}}
    
      
      />
    </stack.Navigator>
  )
}


function MYTab (){
  return(
    
    <Tab.Navigator
    screenOptions={{
      tabBarStyle : {fontSize : 8,},
      tabBarItemStyle  :{width:100 },
      tabBarLabelStyle:{fontSize :12,},
      tabBarIndicatorStyle:{
        backgroundColor:'red'   
       },
     
      
      
      
    }}
    >
      
  
      <Tab.Screen  name ='Videos' component ={Video} 
                  options ={{
                    
                    tabBarActiveTintColor:'red',
                    tabBarInactiveTintColor:'gray',

                  
                  }}
      />
      <Tab.Screen  name ='Chapter' component ={Chapter}
                        options ={{
                          tabBarActiveTintColor:'red',
                          tabBarInactiveTintColor:'gray',

                        }}

      
      />

      
      <Tab.Screen  name ='Resources' component ={Resources} 
      
      options ={{
        
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',

       
      }}
      
      />
      <Tab.Screen  name ='QN Bank' component ={QNBank} 
                        options ={{
                          tabBarActiveTintColor:'red',
                          tabBarInactiveTintColor:'gray',

                          
                        }}
      
      
      />
    </Tab.Navigator>
  )
}

export default function APP (){
  return(
    <NavigationContainer>
       <MyStack/>
    </NavigationContainer>
   
  )
}







