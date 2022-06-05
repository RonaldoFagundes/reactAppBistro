import React from 'react';
import { SafeAreaView,ScrollView, View,  TouchableOpacity,  Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Estilos from '../styles/estilos';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';







export default function Estoque(){



/* const html = `
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
`; */


 const [selectedPrinter, setSelectedPrinter] = React.useState();



 const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html:createDynamicTable() ,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  } 




  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html:createDynamicTable(),
    });

    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }



  /* const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  } */

  



  /* const array = [ 
    {produt:"Banoffee",price:"R$ 15,00",abs:"10",notsell:"02",dnqtd:"03",dnvalor:"R$ 45,00",ctqtd:"05",ctvalor:"R$ 75,00",total:"R$ 120,00"},

    {produt:"Pudim",price:"R$ 12,00",abs:"8",notsell:"01",dnqtd:"02",dnvalor:"R$ 24,00",ctqtd:"05",ctvalor:"R$ 60,00",total:"R$ 72,00"},

    {produt:"Mousse",price:"R$ 10,00",abs:"7",notsell:"02",dnqtd:"03",dnvalor:"R$ 30,00",ctqtd:"02",ctvalor:"R$ 20,00",total:"R$ 50,00"},

    {produt:"Pote",price:"R$ 18,00",abs:"0",notsell:"0",dnqtd:"0",dnvalor:"0",ctqtd:"0",ctvalor:"0",total:"0"},

    {produt:"Taça",price:"R$ 20,00",abs:"5",notsell:"02",dnqtd:"02",dnvalor:"R$ 40,00",ctqtd:"01",ctvalor:"R$ 20,00",total:"R$ 60,00"}, 
   ] */


const array = [];

const produto_one_aba = 10;
const produto_two_aba = 10;



   if (produto_one_aba > 0){
  array.push({
   produt:"Banoffee",
   price:15,
   abs:10,
   notsell:2,
   dnqtd:3,
   dnvalor:45,
    ctqtd:5,
    ctvalor:75,
    total: 120
   }); 
  } 
          
  
  
  if (produto_two_aba > 0){
array.push({
  produt:"Pudim",
  price:12,
  abs:8,
  notsell:1,
  dnqtd:2,
  dnvalor:24,
  ctqtd:5,
  ctvalor:60,
  total:84
}); 
 }
   




const createDynamicTable =()=>{

  var table ="";

  for (let i in array ){

    const item = array[i];
    table = table + `
    
      <tr>
         <td>${item.produt}</td>
         <td>${item.price}</td>
         <td>${item.abs}</td>         
         <td>${item.notsell}</td> 
         <td colspan="3">${item.dnqtd}</td> 
         <td colspan="4">${item.dnvalor}</td> 
         <td colspan="3">${item.ctqtd}</td> 
         <td colspan="4">${item.ctvalor}</td> 
         <td>${item.total}</td> 
      </tr>


    `
  } 
  // console.log(table); 

   const html = `
   <!DOCTYPE html>
   <html>
    <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
     
      
     <style>
       #div {
         width: 1000px;
         height: 600px;
         background-color: rgba(27, 59, 78, 1);
         background-image: linear-gradient(to bottom, transparent, rgba(27, 59, 78, 0.5));
         padding: 20px;
         margin-left: 50px;
         margin-top: 80px
       }
       table {
         height: auto;
         width: 98%;
         padding: 5px;
         border-collapse: separate;
         border-spacing: 2px;
         background-color: rgba(0, 0, 0, 0.3);
         margin: 10px;
       }
       th {
         font-size: 1.6em;
         text-transform: capitalize;
         color: rgba(221, 240, 210, 0.9);
         background-color: black;
       }
       tr,
       td {
         border: 2px solid black;
         text-align: center;
         font-family: 'Open Sans', sans-serif;
         font-weight: bold;
         font-size: 1.1em;
         line-height: 1.66667em;
         color: rgba(256, 234, 211, 0.8);
         text-transform: capitalize;
         padding: 2px;
       }
     </style>
   
   
    </head>    
     <body style="text-align: center;">
   

       <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
          Bistrô Di Totta
       </h1>
   
       <img
         src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
         style="width: 90vw;" />  
   
       <div id="div">
         <table>  
           <colgroup>
             <col />
             <col />
             <col />
             <col />
             <col style="background-color: rgba(17, 19, 88,1);" />
             <col />
             <col />
             <col style="background-color: rgba(17, 19, 88,1);" />
             <col />
             <col />
             <col />
             <col style="background-color: rgba(147, 09, 18,1);" />
             <col />
             <col />
             <col style="background-color: rgba(147, 09, 18,1);" />
             <col />
             <col />
             <col />
             <col style="background-color: rgba(47, 109, 118,1);" />
           </colgroup>  
           <thead>
             <tr>
               <th colspan="20">Relatório de Vendas</th>
             </tr>
             <tr>
               <th id="showDate" colspan="20"></th>
             </tr>

             <tr>
               <td colspan="1" rowspan="3">Produto</td>
               <td colspan="1" rowspan="3">Preço</td>
               <td colspan="1" rowspan="3">Abastecimento</td>
               <td colspan="1" rowspan="3">não vendidos</td>
               <td colspan="14" style="background-color: rgba(27, 59, 78,1);">Vendidos</td>
               <td colspan="1" rowspan="3">Total</td>
             </tr>

             <tr>
               <td colspan="7">Dinheiro</td>
               <td colspan="7">Cartão</td>
             </tr>

             <tr>
               <td colspan="3">qtd</td>
               <td colspan="4">valor</td>
               <td colspan="3">qtd</td>
               <td colspan="4">valor</td>
             </tr>
             
           </thead>  

           <tbody id="tbody" style="color:white">
          
            <tr>
            ${table}
            </tr>
             
           </tbody>  

           <tfoot></tfoot>  
         </table>  
       </div>  
     </body>
   </html>
   `;

   return html;


} 












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

    <TouchableOpacity onPress={printToFile}  
      style={Estilos.touchAbleR}>
     <Text style={Estilos.touchText}>Gerar Relatório</Text>
    </TouchableOpacity>


  <TouchableOpacity onPress={print}  
    style={Estilos.touchAbleR}>
    <Text style={Estilos.touchText}>Ptint</Text>
  </TouchableOpacity>





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

