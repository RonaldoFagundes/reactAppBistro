import React ,{useState} from  'react';
import { SafeAreaView, ScrollView, View,Text, TouchableOpacity, Image} from "react-native";
import Estilos from '../styles/estilos';
import { LinearGradient } from 'expo-linear-gradient';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import AsyncStorageSales from '@react-native-async-storage/async-storage';



export default function Vendas(){



const data = new Date().toLocaleString(); 

const [selectedPrinter, setSelectedPrinter] = React.useState();




const prod_one = 'banoffee';
const prod_two = 'puddim';
const prod_three ='mousse';
const prod_four ='mousse';
const prod_five ='mousse';
const prod_six ='mousse';
const prod_seven ='mousse';
const prod_eight ='mousse';
const prod_nine ='mousse';
const prod_ten ='mousse';





  const[produtoOne, setProdutoOne] = useState({
    count:0,
    preco:12, 
    pgtoDn:0,
    qtdDn:0,
    totalDn:0,
    pgtoCt:0,
    qtdCt:0,
    totalCt:0,
    totalAll:0,
    abastecimento:'10'
});


const[produtoTwo, setProdutoTwo] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0,
  abastecimento:'10'
});

const[produtoThree, setProdutoThree] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0,
  abastecimento:'10'
});

const[produtoFour, setProdutoFour] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0
});

const[produtoFive, setProdutoFive] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0
});

const[produtoSix, setProdutoSix] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0
});

const[produtoSeven, setProdutoSeven] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0
});

const[produtoEight, setProdutoEight] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0
});

const[produtoNine, setProdutoNine] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0
});


const[produtoTen, setProdutoTen] = useState({
  count:0, 
  preco:15,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0
});




    // metodos asynStorage

 const setAbastecer =  (key,value)=>{
  AsyncStorageSales.setItem(key,value);
}

const getAbastecer = async(key)=>{ 
   
  const quantidade =  parseInt (await AsyncStorageSales.getItem(key));
          switch (key){
             case prod_one:
              setProdutoOne({
                ...produtoOne, count :(quantidade),
                   produtoOne,pgtoDn:(produtoOne.pgtoDn = 0) ,
                   produtoOne,qtdDn:(produtoOne.qtdDn = 0),
                   produtoOne,pgtoCt:(produtoOne.pgtoCt =0),
                   produtoOne,qtdCt:(produtoOne.qtdCt =0),
                   produtoOne,totalAll:(produtoOne.totalAll =0)           
                })   
             break;
             case prod_two:    
              setProdutoTwo({
             ...produtoTwo, count :(quantidade),
                produtoTwo,pgtoDn:(produtoTwo.pgtoDn = 0) ,
                produtoTwo,qtdDn:(produtoTwo.qtdDn = 0),
                produtoTwo,pgtoCt:(produtoTwo.pgtoCt =0),
                produtoTwo,qtdCt:(produtoTwo.qtdCt =0),
                produtoTwo,totalAll:(produtoTwo.totalAll =0)           
              })   
             break;           
             case prod_three: 
              setProdutoThree({
              ...produtoThree, count :(quantidade),
                produtoThree,pgtoDn:(produtoThree.pgtoDn = 0) ,
                produtoThree,qtdDn:(produtoThree.qtdDn = 0),
                produtoThree,pgtoCt:(produtoThree.pgtoCt =0),
                produtoThree,qtdCt:(produtoThree.qtdCt =0),
                produtoThree,totalAll:(produtoThree.totalAll =0)           
             }) 
             break;    
           }
         }




   const setAdd =  (key,value)=>{
    AsyncStorageSales.setItem(key,value);
  }

  const getAdd = async(key)=>{  
    const valor =  parseInt (await AsyncStorageSales.getItem(key));
    switch (key) {
      case prod_one:       
       setProdutoOne({
         ...produtoOne,count:(produtoOne.count +valor)
       })
      break;
      case prod_two:
       setProdutoTwo({
         ...produtoTwo,count:(produtoTwo.count +valor)
       })       
      break;
      case prod_three:       
      setProdutoThree({
       ...produtoThree,count:(produtoThree.count +valor)
     }) 
      break;
    }   
  }



  const setRemove =  (key,value)=>{
    AsyncStorageSales.setItem(key,value);
  }

  const getRemove = async(key)=>{ 
    const valor =  parseInt (await AsyncStorageSales.getItem(key));
    key ==prod_one &&  produtoOne.count>=1 ?    
    setProdutoOne({
      ...produtoOne,count:(produtoOne.count -valor)
    })
    :false;  
    key==prod_two && produtoTwo.count>=1 ?
    setProdutoTwo({
      ...produtoTwo,count:(produtoTwo.count -valor)
    }) 
   :false;  
    key==prod_three && produtoThree.count>=1 ?
    setProdutoThree({
      ...produtoThree,count:(produtoThree.count -valor)
    }) 
   :false;
  }




  const setZerar =  (key,value)=>{
    AsyncStorageSales.setItem(key,value);
  }

  const getZerar = async(key)=>{      
    const valor =  parseInt (await AsyncStorageSales.getItem(key));
    switch(key){
      case prod_one:
        setProdutoOne({
          ...produtoOne,count:(valor),
             produtoOne,pgtoDn:(produtoOne.pgtoDn = valor) ,
             produtoOne,qtdDn:(produtoOne.qtdDn = valor),
             produtoOne,pgtoCt:(produtoOne.pgtoCt =valor),
             produtoOne,qtdCt:(produtoOne.qtdCt =valor),
             produtoOne,totalAll:(produtoOne.totalAll =valor)
        })
      break;
      case prod_two:
        setProdutoTwo({
          ...produtoTwo,count:(valor),
             produtoTwo,pgtoDn:(produtoTwo.pgtoDn = valor) ,
             produtoTwo,qtdDn:(produtoTwo.qtdDn = valor),
             produtoTwo,pgtoCt:(produtoTwo.pgtoCt =valor),
             produtoTwo,qtdCt:(produtoTwo.qtdCt =valor),
             produtoTwo,totalAll:(produtoTwo.totalAll =valor)
        })
      break;
      case prod_three:
        setProdutoThree ({
          ...produtoThree,count:(valor),
             produtoThree,pgtoDn:(produtoThree.pgtoDn = valor) ,
             produtoThree,qtdDn:(produtoThree.qtdDn = valor),
             produtoThree,pgtoCt:(produtoThree.pgtoCt =valor),
             produtoThree,qtdCt:(produtoThree.qtdCt =valor),
             produtoThree,totalAll:(produtoThree.totalAll =valor)
        })
        break;
    }
}
  
   



const setPgtoDn =  (key,value)=>{
  AsyncStorageSales.setItem(key,value);
}

const getPgtoDn = async(key)=>{    
  const valor =  parseInt (await AsyncStorageSales.getItem(key));  
  key  == prod_one && produtoOne.count>=1?
  setProdutoOne({
    ...produtoOne,count:(produtoOne.count -valor) , 
       produtoOne,pgtoDn:(produtoOne.pgtoDn + produtoOne.preco),
       produtoOne,qtdDn:(produtoOne.qtdDn+valor),
       produtoOne,totalAll:(produtoOne.totalAll = produtoOne.pgtoDn + produtoOne.pgtoCt + produtoOne.preco )
   })
   :false;
   key == prod_two && produtoTwo.count>=1?
   setProdutoTwo({
    ...produtoTwo,count:(produtoTwo.count -valor) , 
       produtoTwo,pgtoDn:(produtoTwo.pgtoDn + produtoTwo.preco),
       produtoTwo,qtdDn:(produtoTwo.qtdDn+valor),
       produtoTwo,totalAll:(produtoTwo.totalAll = produtoTwo.pgtoDn + produtoTwo.pgtoCt +produtoTwo.preco )
   }) 
   :false;
   key == prod_three && produtoThree.count>=1?
   setProdutoThree({
    ...produtoThree,count:(produtoThree.count -valor) , 
       produtoThree,pgtoDn:(produtoThree.pgtoDn + produtoThree.preco),
       produtoThree,qtdDn:(produtoThree.qtdDn+valor),
       produtoThree,totalAll:(produtoThree.totalAll = produtoThree.pgtoDn + produtoThree.pgtoCt +produtoThree.preco )
   }) 
   :false;
  }








const setPgtoCt =  (key,value)=>{
  AsyncStorageSales.setItem(key,value);
}

const getPgtoCt = async(key)=>{    
  const valor =  parseInt (await AsyncStorageSales.getItem(key));
  key  == prod_one && produtoOne.count>=1?
  setProdutoOne({
    ...produtoOne,count:(produtoOne.count -valor) , 
       produtoOne,pgtoCt:(produtoOne.pgtoCt + produtoOne.preco),
       produtoOne,qtdCt:(produtoOne.qtdCt+valor),
       produtoOne,totalAll:(produtoOne.totalAll = produtoOne.pgtoCt + produtoOne.pgtoDn + produtoOne.preco )
   })
   :false;
   key == prod_two && produtoTwo.count>=1?
   setProdutoTwo({
    ...produtoTwo,count:(produtoTwo.count -valor) , 
       produtoTwo,pgtoCt:(produtoTwo.pgtoCt + produtoTwo.preco),
       produtoTwo,qtdCt:(produtoTwo.qtdCt+valor),
       produtoTwo,totalAll:(produtoTwo.totalAll = produtoTwo.pgtoCt + produtoTwo.pgtoDn +produtoTwo.preco )
   }) 
   :false;
   key == prod_three && produtoThree.count>=1?
   setProdutoThree({
    ...produtoThree,count:(produtoThree.count -valor) , 
       produtoThree,pgtoCt:(produtoThree.pgtoCt + produtoThree.preco),
       produtoThree,qtdCt:(produtoThree.qtdCt+valor),
       produtoThree,totalAll:(produtoThree.totalAll = produtoThree.pgtoCt + produtoThree.pgtoDn +produtoThree.preco )
   }) 
   :false;
}



/* async function clearStorag () {
  await AsyncStorage.clear();
}

const clearStorage = async function() {
  try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
  } catch (error) {
      console.error('Error clearing app data.');
  }
} */







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





const array = [];

    

   if (produtoOne.count > 0){
  array.push({
   produt:prod_one,
   price:produtoOne.preco,
   abs:produtoOne.abastecimento,
   notsell:produtoOne.count,
   dnqtd:produtoOne.qtdDn,
   dnvalor:produtoOne.pgtoDn,
    ctqtd:produtoOne.qtdCt,
    ctvalor:produtoOne.pgtoCt,
    total: produtoOne.totalAll
   }); 
  } 
          
  
  
  if (produtoTwo.count > 0){
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
    table = table + 
    `  
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















return(

<SafeAreaView  style={Estilos.containnerBody}> 
<ScrollView >

{/* header */}
<LinearGradient 
colors={['rgba(251, 195, 95, 1.0)', 'rgba(251, 195, 95, 0.5)']} 
 style={{flex:1}}>
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


<View style={Estilos.containnerMain}>
{/* produto_one */}
<View style={Estilos.containnerProduto}>
  <View style={Estilos.viewProduto}>
    <View style={Estilos.viewProdName}>
    <Image 
       source={require('../assets/banoffee.jpg')}
       style={Estilos.imgProdName}
     />        
    </View>  
   <TouchableOpacity onPress={(value)=>setAbastecer(prod_one, produtoOne.abastecimento) & getAbastecer(prod_one) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setZerar(prod_one, "0") & getZerar(prod_one) }   
    style={Estilos.touchAbleM}>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setAdd(prod_one, "1") & getAdd(prod_one) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setRemove(prod_one, "1") & getRemove(prod_one) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>       
 </View>

  <View style={Estilos.viewInfo}>
   <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoOne.count}   Banoffees `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 
    <View style={Estilos.viewProdName}>
     <Text style={Estilos.textVendas}>Vendas</Text> 
    </View>    

   <TouchableOpacity onPress={(value)=>setPgtoDn(prod_one, "1") & getPgtoDn(prod_one) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_one, "1") & getPgtoCt(prod_one) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity> 
  </View>

  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoOne.pgtoDn},00  ${produtoOne.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoOne.pgtoCt},00  ${produtoOne.qtdCt}  vendas`}</Text>      
  </View>

</View>


{/* produto_two */}
<View style={Estilos.containnerProduto}>
 <View style={Estilos.viewProduto}>
   <View style={Estilos.viewProdName}>
     <Image 
       source={require('../assets/pudim.png')}
       style={Estilos.imgProdName}
     />  
    </View> 


    <TouchableOpacity onPress={(value)=>setAbastecer(prod_two, produtoTwo.abastecimento) & getAbastecer(prod_two) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setZerar(prod_two, "0") & getZerar(prod_two) }   
    style={Estilos.touchAbleM}>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setAdd(prod_two, "1") & getAdd(prod_two) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setRemove(prod_two, "1") & getRemove(prod_two) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>
  
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel : ${produtoTwo.count}   Puddins`}</Text>     
   </View>

  <View style={Estilos.viewVendas}> 

    <View style={Estilos.viewProdName}>
     <Text style={Estilos.textVendas}>Vendas</Text> 
    </View>

    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_two, "1") & getPgtoDn(prod_two) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_two, "1") & getPgtoCt(prod_two) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity> 

  </View>



  <View style={Estilos.viewSubTotal}> 

  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoTwo.pgtoDn},00  ${produtoTwo.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoTwo.pgtoCt},00  ${produtoTwo.qtdCt}  vendas`}</Text>      
  </View>

</View>



{/* produto_three */}


<View style={Estilos.containnerProduto}>

  <View style={Estilos.viewProduto}>

    <View style={Estilos.viewProdName}>
    <Image 
       source={require('../assets/banoffee.jpg')}
       style={Estilos.imgProdName}
     />        
    </View>  


  <TouchableOpacity onPress={(value)=>setAbastecer(prod_three, produtoThree.abastecimento) &     getAbastecer(prod_three) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setZerar(prod_three, "0") & getZerar(prod_three) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setAdd(prod_three, "1") & getAdd(prod_three) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setRemove(prod_three, "1") & getRemove(prod_three) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>  
      
      
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoThree.count}   Mousses `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 

    <View style={Estilos.viewProdName}>
     <Text style={Estilos.textVendas}>Vendas</Text> 
    </View>


    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_three, "1") & getPgtoDn(prod_three) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_three, "1") & getPgtoCt(prod_three) }   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity>

  </View>


  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoThree .pgtoDn},00  ${produtoThree.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoThree.pgtoCt},00  ${produtoThree.qtdCt}  vendas`}</Text>      
  </View>

</View>







{/* acrecentar daqui para cima */}

 
 <View style={Estilos.viewAmount}>

  <Text style={Estilos.textInfo}>{`Valor total Dinheiro R$ ${produtoOne.pgtoDn + produtoTwo.pgtoDn + produtoThree.pgtoDn} ,00 `}</Text>

  <Text style={Estilos.textInfo}>{`Valor total Cartões R$ ${produtoOne.pgtoCt + produtoTwo.pgtoCt + produtoThree.pgtoCt} ,00 `}</Text>

  <Text style={Estilos.textInfo}>{`Valor total R$ ${produtoOne.totalAll + produtoTwo.totalAll + produtoThree.totalAll} ,00 `}</Text>











   {/*    //  Testando storage //

  <TouchableOpacity onPress={(value)=>setAdd(prod_one, "1") & getAdd(prod_one) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setRemove(prod_one, "1") & getRemove(prod_one) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setZerar(prod_one, "0") & getZerar(prod_one) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>


  <TouchableOpacity onPress={(value)=>setPgtoDn(prod_one, "1") & getPgtoDn(prod_one) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>Dn</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_one, "1") & getPgtoCt(prod_one) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>Ct</Text>
  </TouchableOpacity>


  <Text style={Estilos.textInfo}>{`qtd ${produtoOne.count} `}</Text>

  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoOne .pgtoDn},00  ${produtoOne.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoOne.pgtoCt},00  ${produtoOne.qtdCt}  vendas`}</Text> */}






  </View>

  
  <TouchableOpacity onPress={printToFile}  
    style={Estilos.touchAbleR}>
    <Text style={Estilos.touchText}>Drive</Text>
  </TouchableOpacity>


  <TouchableOpacity onPress={print}  
    style={Estilos.touchAbleR}>
    <Text style={Estilos.touchText}>Arquivo</Text>
  </TouchableOpacity>

 
 </View>

  </LinearGradient>
 </ScrollView>
</SafeAreaView>
  );
}