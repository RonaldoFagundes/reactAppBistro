
import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";



import Sales from './src/vendas';

import Storage from './src/estoque';





const Tab    = createBottomTabNavigator();




export default function App() {


  return (  
    
     
 <NavigationContainer>
       
   <Tab.Navigator


initialRouteName='Sales' 

 screenOptions={({ route })=>({

  headerShown: false, 



   tabBarActiveBackgroundColor:'rgba(251, 195, 95, 1.0)',   
   tabBarInactiveBackgroundColor:'rgba(251, 195, 95, 0.5)',


   tabBarActiveTintColor:'rgba(125, 105, 53, 0.8)',
   tabBarInactiveTintColor:'rgba(125, 105, 53, 0.9)',



   tabBarIcon : ( { color, size} ) => {

     let iconName;    

      switch(route.name){
        case "Relatorio":
          iconName ="home" ;
          color="brown";
          break;
        case "Sales":
          //iconName="list" ;
          iconName="globe" ;
          color="brown";
         break;
         /* case "Estoque":
          iconName="grid";
          break; */
      }
      return <Ionicons name ={iconName}size ={size} color ={color}/>;
    }, 
  })}   

   /*  tabBarOptions={{
      activeTintColor:"#cc0000",
      inactiveTintColor:"#ff3333",      
      activeBackgroundColor:"rgba(255, 153, 51, 0.7)",
      inactiveBackgroundColor:"rgba(255, 153, 51, 0.5)",      
  }}  */
 

   




  >    
    <Tab.Screen name='Sales'     component={Sales}/>
    <Tab.Screen name='Relatorio' component={Storage}/>
    

   </Tab.Navigator>

 </NavigationContainer>
 
    
  );
}

 