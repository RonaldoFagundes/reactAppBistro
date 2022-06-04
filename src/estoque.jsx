import React from 'react';
import { SafeAreaView,ScrollView, View,  Button,  Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Estilos from '../styles/estilos';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';







export default function Estoque(){



const html = `
<html>

  <head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />

  </head>

  <body style="text-align: center;">

    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
       Bistrô Di Totta
    </h1>

    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />

   <div 
   
   style=" 
   background-color: rgba(255, 255, 223, 0.7);
   display:flex;
   justify-content:center; 
   align-items: center; padding:5 
   
   ">

         

    <table 
    style="
      border-collapse: separate; 
      border-spacing: 2px; 
      background-color: rgba(0, 0, 0, 0.4); 
           
     ">

      <thead>
       <tr>
        <th colspan="8" 
        style="
        font-size: 2.0em;
        text-transform: capitalize;
        color:rgba(221,240,210, 0.9);
        ">
        Relatório de Vendas</th>
       </tr>
       
       <tr>
         <td>Produto</td>
         <td>qtd Abastecida</td>
         <td>qtd Retornada</td>
         <td>Vendas em dinheiro</td>
         <td>Valor</td>
         <td>Vendas em Cartão</td>
         <td>Valor</td>
         <td>Total</td> 
       </tr>

      </thead>  

      <tbody>
        <td>Banoffee</td>
        <td>10</td>
        <td>2</td>
        <td>06</td>
        <td>R$ 78,00</td>
        <td>04</td>
        <td>R$ 62,00</td>
        <td>R$ 140,00</td> 

      </tbody>


     </table>

   </div>

  </body>
</html>
`;


// const [selectedPrinter, setSelectedPrinter] = React.useState();



/* const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  } */




  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html
    });

    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }



  /* const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  } */




  return (

   <SafeAreaView  style={Estilos.containnerBody}> 

    <ScrollView >
    


    {/* header */}
    
  <LinearGradient 
    
    colors={['rgba(251, 195, 95, 1.0)', 'rgba(251, 195, 95, 0.5)']} 
     style={{flex:1}}
     
     >
     <View style={Estilos.viewHeader}> 
        <View style={Estilos.viewImgHeader}>
          <Image 
           source={require('../assets/logo.jpg')}
           style={Estilos.imgHeader}
         />   
        </View>
        <View style={Estilos.viewTextHeader}>
           <Text style={Estilos.textHeader}>Bistrô di Totta</Text>
        </View>
     </View>
    
  </LinearGradient>

  
   <LinearGradient
    colors={['rgba(111, 0, 0, 1)', 'rgba(140, 51, 51,0.8)','rgba(115, 0, 0, 0.7)']} 
    style={{flex:1}}>

   <View style={{
     minHeight:700,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center'
       }}>

     <Text style={{color:'white',fontSize:30}}>Tela Estoque</Text>


    {/*  <View/>        
       
           <Button title='Print ios' onPress={print}  /> 

           <Button title='Print to PDF file ' onPress={printToFile}/>  


       {Platform.OS === 'ios' &&
        <>
          <View style={{margin:50}} />
          <Button title='Select printer' onPress={selectPrinter}/>

          <View style={{margin:50}} />

          {selectedPrinter ? 
          <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
        </>
      } 

    </View> */}





         </View>

      </LinearGradient>
    

     </ScrollView>

   </SafeAreaView>


  );





   
}

