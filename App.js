import React from 'react'
import { View,Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Video from './src/Tab/Video';
import Chapter from './src/Tab/Chapter';
import Resources from './src/Tab/Resources';
import QNBank from './src/Tab/QNBank';
import TabContent from './src/TabContent'; 
const Tab = createMaterialTopTabNavigator()
const stack = createStackNavigator()

function MyStack(){
  return(
    <stack.Navigator>
      <stack.Screen
      name ='Tab'
      component ={MYTab}
      options ={{headerTitle :'Search for a service',headerTitleAlign : 'center'}}
      
      />
    </stack.Navigator>
  )
}


function MYTab (){
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarStyle : {fontSize : 8},
      tabBarItemStyle  :{width:100 },
      tabBarStyle      :{backgroundColor:'#fff'}
      
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


