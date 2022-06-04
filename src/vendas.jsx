import React ,{useState} from  'react';
import { SafeAreaView, ScrollView, View,Text, TouchableOpacity, Image} from "react-native";
import Estilos from '../styles/estilos';
import { LinearGradient } from 'expo-linear-gradient';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import AsyncStorageSales from '@react-native-async-storage/async-storage';



export default function Vendas(){

const data = new Date().toLocaleString(); 

const prod_one = 'banoffee';
const prod_two = 'puddim';
const prod_three ='mousse';





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
  totalAll:0
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
  totalAll:0
});


    // metodos asynStorage
const setAbastecer =  (key,value)=>{
  AsyncStorageSales.setItem(key,value);
}

const getAbastecer = async(key)=>{ 
   
  const quantidade =  parseInt (await AsyncStorageSales.getItem(key));

          if (key == prod_one){

            setProdutoOne({
              ...produtoOne, count :(quantidade )
            })

          }  

   }


   const setAdd =  (key,value)=>{
    AsyncStorageSales.setItem(key,value);
  }

  const getAdd = async(key)=>{  

    const valor =  parseInt (await AsyncStorageSales.getItem(key));

    if (key == prod_one){

    setProdutoOne({
      ...produtoOne,count:(produtoOne.count + valor)
    })

    }
  }


  const setRemove =  (key,value)=>{
    AsyncStorageSales.setItem(key,value);
  }

  const getRemove = async(key)=>{  

    const valor =  parseInt (await AsyncStorageSales.getItem(key));

    if (key == prod_one & produtoOne.count>=1){

    setProdutoOne({
      ...produtoOne,count:(produtoOne.count - valor)
    })

    }
  }


  const setZerar =  (key,value)=>{
    AsyncStorageSales.setItem(key,value);
  }

  const getZerar = async(key)=>{ 
     
    const valor =  parseInt (await AsyncStorageSales.getItem(key));

    if (key == prod_one){
  setProdutoOne({
    ...produtoOne,count:(0),
       produtoOne,pgtoDn:(produtoOne.pgtoDn = valor) ,
       produtoOne,qtdDn:(produtoOne.qtdDn = valor),
       produtoOne,pgtoCt:(produtoOne.pgtoCt =valor),
       produtoOne,qtdCt:(produtoOne.qtdCt =valor),
       produtoOne,totalAll:(produtoOne.totalAll =valor)
  })
  }
}
  
   
const setPgtoDn =  (key,value)=>{
  AsyncStorageSales.setItem(key,value);
}

const getPgtoDn = async(key)=>{ 
   
  const valor =  parseInt (await AsyncStorageSales.getItem(key));


  if ( key == prod_one & produtoOne.count>=1 ){


setProdutoOne({
  ...produtoOne,count:(produtoOne.count -valor) ,    
     produtoOne,pgtoDn:(produtoOne.pgtoDn + produtoOne.preco) ,
     produtoOne,qtdDn:(produtoOne.qtdDn+valor),
     produtoOne,totalAll:(produtoOne.totalAll = produtoOne.pgtoDn + produtoOne.pgtoCt + produtoOne.preco)  
  }) 

}

}



const setPgtoCt =  (key,value)=>{
  AsyncStorageSales.setItem(key,value);
}

const getPgtoCt = async(key)=>{ 
   
  const valor =  parseInt (await AsyncStorageSales.getItem(key));


  if ( key == prod_one & produtoOne.count>=1 ){


    setProdutoOne({
      ...produtoOne,count:(produtoOne.count -valor) , 
         produtoOne,pgtoCt:(produtoOne.pgtoCt + produtoOne.preco),
         produtoOne,qtdCt:(produtoOne.qtdCt+valor),
         produtoOne,totalAll:(produtoOne.totalAll = produtoOne.pgtoCt + produtoOne.pgtoDn + produtoOne.preco )
     })

  }

}







   const clearStorage =()=>{
    AsyncStorageSales.clear(); 

    setProdutoOne({
      ...produtoOne, count :(0)
    })
  }






  







/* const storage = (key,value)=>{
    AsyncStorageSales.setItem(key,value);
}


const fillStorage = async(key)=>{  
   
  const saldo =  parseInt(await AsyncStorageSales.getItem(key));

         setProdutoTwo({
         ...produtoTwo, count :(saldo)
       })
   }


   const addStorage = async(key)=>{  
   
    const saldo =  parseInt(await AsyncStorageSales.getItem(key));
  
           setProdutoTwo({
           ...produtoTwo, count :(saldo + produtoTwo.count )
         })
     }

     const removeStorage = async(key)=>{     
      const saldo =  parseInt(await AsyncStorageSales.getItem(key));
    
             setProdutoTwo({
             ...produtoTwo, count :(produtoTwo.count - saldo)
           })
       }



   const setDn = (key,value)=>{
    AsyncStorageSales.setItem(key,value);
  }

const calcDn = async(key)=>{      
    const saldo =  parseFloat( await AsyncStorageSales.getItem(key) );
    
           setProdutoOne({
           ...produtoOne, preco :(saldo)
         })        
     }
  
      const clearDn =()=>{
        AsyncStorageSales.clear(); 

        setProdutoOne({
          ...produtoOne, preco :(0)
        })
      } */







 /*
const[sales, setSales] = useState({
  count:0,
  preco:12, 
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0
});



   --const [sales,setSales]=useState(0);

const storeSales = (key,value)=>{
         -- AsyncStorageSales.setItem(key,value)  
   const jsonValue = JSON.stringify(value)
   AsyncStorageSales.setItem('@storage_Key', jsonValue)
}


const clearSales =()=>{
  AsyncStorageSales.clear();  
  setSales({
    ...sales,count:("")           
   })
}


const surchSales = async (key)=>{
     --  const dados = await AsyncStorageSales.getItem(key);   
  
  const jsonValue = await AsyncStorageSales.getItem('@storage_Key')
     --  return jsonValue != null ? JSON.parse(jsonValue) : null;

    
   setSales({
    ...sales,count:(jsonValue) ,                
   })


}
*/






const abastecr = async (abastece,value)=>{


  switch (abastece){
   case prod_one:  
     
    setProdutoOne({
      ...produtoOne, count :(10),
         produtoOne,pgtoDn:(produtoOne.pgtoDn = 0) ,
         produtoOne,qtdDn:(produtoOne.qtdDn = 0),
         produtoOne,pgtoCt:(produtoOne.pgtoCt =0),
         produtoOne,qtdCt:(produtoOne.qtdCt =0),
         produtoOne,totalAll:(produtoOne.totalAll =0)           
      })   
   

   break;
   case prod_two:    
    setProdutoTwo({
      ...produtoTwo, count :(10),
         produtoTwo,pgtoDn:(produtoTwo.pgtoDn = 0) ,
         produtoTwo,qtdDn:(produtoTwo.qtdDn = 0),
         produtoTwo,pgtoCt:(produtoTwo.pgtoCt =0),
         produtoTwo,qtdCt:(produtoTwo.qtdCt =0),
         produtoTwo,totalAll:(produtoTwo.totalAll =0)           
  })   
  break;
  case prod_three: 
    setProdutoThree({
      ...produtoThree, count :(10),
         produtoThree,pgtoDn:(produtoThree.pgtoDn = 0) ,
         produtoThree,qtdDn:(produtoThree.qtdDn = 0),
         produtoThree,pgtoCt:(produtoThree.pgtoCt =0),
         produtoThree,qtdCt:(produtoThree.qtdCt =0),
         produtoThree,totalAll:(produtoThree.totalAll =0)           
  }) 
  break;
}

     /*
       if(abastece== prod_one ){
       setProdutoOne({
            ...produtoOne, count :(10),
               produtoOne,pgtoDn:(produtoOne.pgtoDn = 0) ,
               produtoOne,qtdDn:(produtoOne.qtdDn = 0),
               produtoOne,pgtoCt:(produtoOne.pgtoCt =0),
               produtoOne,qtdCt:(produtoOne.qtdCt =0),
               produtoOne,totalAll:(produtoOne.totalAll =0)           
        })          
      }else if(abastece== prod_two ){
        setProdutoTwo({
          ...produtoTwo, count :(10),
             produtoTwo,pgtoDn:(produtoTwo.pgtoDn = 0) ,
             produtoTwo,qtdDn:(produtoTwo.qtdDn = 0),
             produtoTwo,pgtoCt:(produtoTwo.pgtoCt =0),
             produtoTwo,qtdCt:(produtoTwo.qtdCt =0),
             produtoTwo,totalAll:(produtoTwo.totalAll =0)           
      }) 
      }
       */
    }

const addOne=(addone,value)=>{
   switch (addone) {
     case prod_one:       
      setProdutoOne({
        ...produtoOne,count:(produtoOne.count +1)
      })
     break;
     case prod_two:
      setProdutoTwo({
        ...produtoTwo,count:(produtoTwo.count +1)
      })       
     break;
     case prod_three: 
     
     setProdutoThree({
      ...produtoThree,count:(produtoThree.count +1)
    }) 
     break;
   }  
  /*
  if(addone== prod_one ){
   setProdutoOne({
     ...produtoOne,count:(produtoOne.count +1)
   })
  }else if (addone== prod_two ){   
    setProdutoTwo({
      ...produtoTwo,count:(produtoTwo.count +1)
    }) 
  }
  */
}


const removeOne =(remove,value)=>{     
  remove ==prod_one &&  produtoOne.count>=1 ?    
  setProdutoOne({
    ...produtoOne,count:(produtoOne.count -1)
  })
  :false;

  remove==prod_two && produtoTwo.count>=1 ?
  setProdutoTwo({
    ...produtoTwo,count:(produtoTwo.count -1)
  }) 
 :false;

  remove==prod_three && produtoThree.count>=1 ?
  setProdutoThree({
    ...produtoThree,count:(produtoThree.count -1)
  }) 
 :false;
}

  /*
   if( remove ==prod_one &&  produtoOne.count>=1   ){       
    setProdutoOne({
      ...produtoOne,count:(produtoOne.count -1)
    })
   }else if (remove==prod_two && produtoTwo.count>=1){
    setProdutoTwo({
      ...produtoTwo,count:(produtoTwo.count -1)
    })
   }
  */


const zerar=(zera,value)=>{
switch(zera){
  case prod_one:
    setProdutoOne({
      ...produtoOne,count:(0),
         produtoOne,pgtoDn:(produtoOne.pgtoDn = 0) ,
         produtoOne,qtdDn:(produtoOne.qtdDn = 0),
         produtoOne,pgtoCt:(produtoOne.pgtoCt =0),
         produtoOne,qtdCt:(produtoOne.qtdCt =0),
         produtoOne,totalAll:(produtoOne.totalAll =0)
    })
  break;
  case prod_two:
    setProdutoTwo({
      ...produtoTwo,count:(0),
         produtoTwo,pgtoDn:(produtoTwo.pgtoDn = 0) ,
         produtoTwo,qtdDn:(produtoTwo.qtdDn = 0),
         produtoTwo,pgtoCt:(produtoTwo.pgtoCt =0),
         produtoTwo,qtdCt:(produtoTwo.qtdCt =0),
         produtoTwo,totalAll:(produtoTwo.totalAll =0)
    })
  break;
  case prod_three:
    setProdutoThree ({
      ...produtoThree,count:(0),
         produtoThree,pgtoDn:(produtoThree.pgtoDn = 0) ,
         produtoThree,qtdDn:(produtoThree.qtdDn = 0),
         produtoThree,pgtoCt:(produtoThree.pgtoCt =0),
         produtoThree,qtdCt:(produtoThree.qtdCt =0),
         produtoThree,totalAll:(produtoThree.totalAll =0)
    })
    break;
}
  /*
  if(zera == prod_one ){
  setProdutoOne({
    ...produtoOne,count:(0),
       produtoOne,pgtoDn:(produtoOne.pgtoDn = 0) ,
       produtoOne,qtdDn:(produtoOne.qtdDn = 0),
       produtoOne,pgtoCt:(produtoOne.pgtoCt =0),
       produtoOne,qtdCt:(produtoOne.qtdCt =0),
       produtoOne,totalAll:(produtoOne.totalAll =0)
  })
  }else if (zera==prod_two){
     setProdutoTwo({
      ...produtoTwo,count:(0),
         produtoTwo,pgtoDn:(produtoTwo.pgtoDn = 0) ,
         produtoTwo,qtdDn:(produtoTwo.qtdDn = 0),
         produtoTwo,pgtoCt:(produtoTwo.pgtoCt =0),
         produtoTwo,qtdCt:(produtoTwo.qtdCt =0),
         produtoTwo,totalAll:(produtoTwo.totalAll =0)
    })
  }
 */
}


const pgtoDinheiro=(pgDn,value)=>{ 
  pgDn == prod_one &&  produtoOne.count>=1?
  setProdutoOne({
    ...produtoOne,count:(produtoOne.count -1) ,    
       produtoOne,pgtoDn:(produtoOne.pgtoDn + produtoOne.preco) ,
       produtoOne,qtdDn:(produtoOne.qtdDn+1),
       produtoOne,totalAll:(produtoOne.totalAll = produtoOne.pgtoDn + produtoOne.pgtoCt + produtoOne.preco)  
    }) 
   :false;

   pgDn == prod_two && produtoTwo.count>=1?
   setProdutoTwo({
    ...produtoTwo,count:(produtoTwo.count -1) ,    
       produtoTwo,pgtoDn:(produtoTwo.pgtoDn + produtoTwo.preco) ,
       produtoTwo,qtdDn:(produtoTwo.qtdDn+1),
       produtoTwo,totalAll:(produtoTwo.totalAll = produtoTwo.pgtoDn + produtoTwo.pgtoCt + produtoTwo.preco)  
    }) 
    :false;

    pgDn == prod_three && produtoThree.count>=1?
    setProdutoThree({
      ...produtoThree,count:(produtoThree.count -1) ,    
         produtoThree,pgtoDn:(produtoThree.pgtoDn + produtoThree.preco) ,
         produtoThree,qtdDn:(produtoThree.qtdDn+1),
         produtoThree,totalAll:(produtoThree.totalAll = produtoThree.pgtoDn + produtoThree.pgtoCt + produtoThree.preco)  
      }) 
      :false;

  /*
  if( pgDn == prod_one &&  produtoOne.count>=1){
    setProdutoOne({
      ...produtoOne,count:(produtoOne.count -1) ,    
         produtoOne,pgtoDn:(produtoOne.pgtoDn + produtoOne.preco) ,
         produtoOne,qtdDn:(produtoOne.qtdDn+1),
         produtoOne,totalAll:(produtoOne.totalAll = produtoOne.pgtoDn + produtoOne.pgtoCt + produtoOne.preco)  
      }) 
   }else if (pgDn == prod_two && produtoTwo.count>=1){
     setProdutoTwo({
      ...produtoTwo,count:(produtoTwo.count -1) ,    
         produtoTwo,pgtoDn:(produtoTwo.pgtoDn + produtoTwo.preco) ,
         produtoTwo,qtdDn:(produtoTwo.qtdDn+1),
         produtoTwo,totalAll:(produtoTwo.totalAll = produtoTwo.pgtoDn + produtoTwo.pgtoCt + produtoTwo.preco)  
      }) 
   }
  */

 }

const pgtoCartao=(pgCt,value)=>{
  pgCt  == prod_one && produtoOne.count>=1?
  setProdutoOne({
    ...produtoOne,count:(produtoOne.count -1) , 
       produtoOne,pgtoCt:(produtoOne.pgtoCt + produtoOne.preco),
       produtoOne,qtdCt:(produtoOne.qtdCt+1),
       produtoOne,totalAll:(produtoOne.totalAll = produtoOne.pgtoCt + produtoOne.pgtoDn + produtoOne.preco )
   })
   :false;

   pgCt == prod_two && produtoTwo.count>=1?
   setProdutoTwo({
    ...produtoTwo,count:(produtoTwo.count -1) , 
       produtoTwo,pgtoCt:(produtoTwo.pgtoCt + produtoTwo.preco),
       produtoTwo,qtdCt:(produtoTwo.qtdCt+1),
       produtoTwo,totalAll:(produtoTwo.totalAll = produtoTwo.pgtoCt + produtoTwo.pgtoDn +produtoTwo.preco )
   }) 
   :false;

   pgCt == prod_three && produtoThree.count>=1?
   setProdutoThree({
    ...produtoThree,count:(produtoThree.count -1) , 
       produtoThree,pgtoCt:(produtoThree.pgtoCt + produtoThree.preco),
       produtoThree,qtdCt:(produtoThree.qtdCt+1),
       produtoThree,totalAll:(produtoThree.totalAll = produtoThree.pgtoCt + produtoThree.pgtoDn +produtoThree.preco )
   }) 
   :false;

 /*  if(pgCt  == prod_one && produtoOne.count>=1){
  setProdutoOne({
    ...produtoOne,count:(produtoOne.count -1) , 
       produtoOne,pgtoCt:(produtoOne.pgtoCt + produtoOne.preco),
       produtoOne,qtdCt:(produtoOne.qtdCt+1),
       produtoOne,totalAll:(produtoOne.totalAll = produtoOne.pgtoCt + produtoOne.pgtoDn + produtoOne.preco )
   })
  }else if (pgCt == prod_two && produtoTwo.count>=1){
    setProdutoTwo({
      ...produtoTwo,count:(produtoTwo.count -1) , 
         produtoTwo,pgtoCt:(produtoTwo.pgtoCt + produtoTwo.preco),
         produtoTwo,qtdCt:(produtoTwo.qtdCt+1),
         produtoTwo,totalAll:(produtoTwo.totalAll = produtoTwo.pgtoCt + produtoTwo.pgtoDn +produtoTwo.preco )
     }) 
  }
  */
  
}











// enviando info para o table teste_1//
var vendas = new Array();   
    
var absOne = 0;

   if (absOne>0){

for( var i=0; i < 1; i++) {

   vendas.push("Banoffee")  
   vendas.push(12)
   vendas.push(10)
   vendas.push(1)   
   vendas.push(3)
   vendas.push(36)  
   vendas.push(4)
   vendas.push(48)
   vendas.push(84)   
}


for( var i=0; i < 1; i++) {

  vendas.push("Pudim")  
  vendas.push(15)
  vendas.push(10)
  vendas.push(2)   
  vendas.push(5)
  vendas.push(75)  
  vendas.push(3)
  vendas.push(45)
  vendas.push(120)  

 }

 }else{


 for( var i=0; i < 1; i++) {

  vendas.push("Pudim")  
  vendas.push(15)
  vendas.push(10)
  vendas.push(2)   
  vendas.push(5)
  vendas.push(75)  
  vendas.push(3)
  vendas.push(45)
  vendas.push(120)  

 }

 }








  // enviando info para o table teste_2 //     
var prodtosNome = [];

var prodtosPreco = [];
var prodtosAbas = [];
var prodtosNot = [];
var prodtosDnQt = [];
var prodtosDnVa = [];
var prodtosCtQt = [];
var prodtosCtVa = [];
var prodtosTotal = [];


var prodOneAb = 0;

    if (prodOneAb>0){
prodtosNome.push('Banoffee');
    }
   else{
prodtosNome.push('pudim');
prodtosNome.push('pote');
prodtosNome.push('geleia');
prodtosNome.push('torta');
   }

for (let i = 0; i < prodtosNome.length; i++) {

         prodtosNome[i];
}















 
 




const html = `
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
	         <td>${vendas[0]}</td>
           	         
           <td>${vendas[1]}</td>	         
    
           <td>${vendas[2]}</td>	         
 
           <td>${vendas[3]}</td>	         

           <td colspan="3">${vendas[4]}</td>	 

           <td colspan="4">${vendas[5]}</td>	 

           <td  colspan="3">${vendas[6]}</td>	 

           <td  colspan="4">${vendas[7]}</td>	 

           <td>${vendas[8]}</td>
        </tr>



       <tr>
        <td>${vendas[9]}</td>
                   
        <td>${vendas[10]}</td>	         
 
        <td>${vendas[11]}</td>	         

        <td>${vendas[12]}</td>	         

        <td colspan="3">${vendas[13]}</td>	 

        <td colspan="4">${vendas[14]}</td>	 

        <td  colspan="3">${vendas[15]}</td>	 

        <td  colspan="4">${vendas[16]}</td>	 

        <td>${vendas[17]}</td>
     </tr>
          
        </tbody>  
        <tfoot></tfoot>  
      </table>  
    </div>   
 



   

       
       

     

    

        
         
   
    


  </body>
</html>
`;











const printToFile = async () => {
  // On iOS/android prints the given html. On web prints the HTML from the current page.

  const { uri } = await Print.printToFileAsync({
    html
  });

  console.log('File has been saved to:', uri);
  await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
}













return(

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
 style={{flex:1}}

>

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

   {/* 
    <Button color={'#FF0000'}  onPress={(value)=>abastecer(prod_one,value)} title="Abastecer" /> 
    */}
   <TouchableOpacity onPress={(value)=>abastecer(prod_one,value)}   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Abastecer</Text>
   </TouchableOpacity>

    {/* <View style={Estilos.viewBtnM} >
         <Button color={'#FF0000'} onPress={(value)=>zerar(prod_one,value)} title="zerar" />
    </View> */}
   <TouchableOpacity onPress={(value)=>zerar(prod_one,value)}   
    style={Estilos.touchAbleM}>
    <Text style={Estilos.touchText}>Zerar</Text>
   </TouchableOpacity>

  {/* <View style={Estilos.viewBtn}>      
      <Button color={'#FF0000'} onPress={(value)=>addOne(prod_one,value)}  title="+ 1"/>
    </View>
 */}
 <TouchableOpacity onPress={(value)=>addOne(prod_one,value)}   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>

   {/*  <View style={Estilos.viewBtn}>
      <Button color={'#FF0000'}onPress={ (value)=> removeOne (prod_one,value)} title="- 1" />
    </View>    */}
   <TouchableOpacity onPress={(value)=>removeOne(prod_one,value)}   
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
    {/* <View style={Estilos.viewBtnB}>
      <Button color={'#FF0000'} onPress={(value)=> pgtoDinheiro (prod_one,value)}  title="Dinheiro" />
    </View>  */}
   <TouchableOpacity onPress={(value)=>pgtoDinheiro(prod_one,value)}   
     style={Estilos.touchAbleL}>
     <Text style={Estilos.touchText}>Dinheiro</Text>
   </TouchableOpacity>

    {/*  <View style={Estilos.viewBtnB}>
      <Button color={'#FF0000'} onPress={(value)=> pgtoCartao (prod_one,value)}  title="Cartão" />
    </View> */} 
   <TouchableOpacity onPress={(value)=>pgtoCartao(prod_one,value)}   
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

    {/* <View style={Estilos.viewBtnM}>
      <Button color={'#FF0000'} onPress={(value)=>abastecer(prod_two,value)} title="Abastecer" />
    </View>  */}
   <TouchableOpacity onPress={(value)=>abastecer(prod_two,value)}   
    style={Estilos.touchAbleL}>
    <Text style={Estilos.touchText}>Abastecer</Text>
    </TouchableOpacity>
    
    
  {/*   <View style={Estilos.viewBtnM} >
      <Button color={'#FF0000'} onPress={(value)=>zerar(prod_two,value)} title="zerar" />
    </View> */}
     
   <TouchableOpacity onPress={(value)=>zerar(prod_two,value)}   
    style={Estilos.touchAbleM}>

    <Text style={Estilos.touchText}>Zerar</Text>
  </TouchableOpacity>




{/*     <View style={Estilos.viewBtn}>      
      <Button color={'#FF0000'} onPress={(value)=>addOne(prod_two,value)}  title="+ 1"/>
    </View>
 */}

<TouchableOpacity onPress={(value)=>addOne(prod_two,value)}   
    style={Estilos.touchAbleS}>

    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>


    {/* <View style={Estilos.viewBtn}>
      <Button color={'#FF0000'}onPress={ (value)=> removeOne (prod_two,value)} title="- 1" />
    </View> */} 

    <TouchableOpacity onPress={(value)=>removeOne(prod_two,value)}   
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

{/*     <View style={Estilos.viewBtnB}>
      <Button color={'#FF0000'} onPress={(value)=> pgtoDinheiro (prod_two,value)}  title="Dinheiro" />
    </View> */} 

<TouchableOpacity onPress={(value)=>pgtoDinheiro(prod_two,value)}   
    style={Estilos.touchAbleL}>

    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>


{/* <View style={Estilos.viewBtnB}>
      <Button color={'#FF0000'} onPress={(value)=> pgtoCartao (prod_two,value)}  title="Cartão" />
    </View>  */}

<TouchableOpacity onPress={(value)=>pgtoCartao(prod_two,value)}   
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


  {/*   <View style={Estilos.viewBtnM}>
      <Button color={'#FF0000'}  onPress={(value)=>abastecer(prod_three,value)} title="Abastecer" />
    </View>  */}


  <TouchableOpacity onPress={(value)=>abastecer(prod_three,value)}   
    style={Estilos.touchAbleL}>

    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>



  {/*   <View style={Estilos.viewBtnM} >
         <Button color={'#FF0000'} onPress={(value)=>zerar(prod_three,value)} title="zerar" />
    </View> */}

  <TouchableOpacity onPress={(value)=>zerar(prod_three,value)}   
    style={Estilos.touchAbleM}>

    <Text style={Estilos.touchText}>Zerar</Text>
  </TouchableOpacity>


    
    {/* <View style={Estilos.viewBtn}>      
      <Button color={'#FF0000'} onPress={(value)=>addOne(prod_three,value)}  title="+ 1"/>
    </View> */}

  <TouchableOpacity onPress={(value)=>addOne(prod_three,value)}   
    style={Estilos.touchAbleS}>

    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>




{/* <View style={Estilos.viewBtn}>
      <Button color={'#FF0000'}onPress={ (value)=> removeOne (prod_three,value)} title="- 1" />
    </View>  */}  


  <TouchableOpacity onPress={(value)=>removeOne(prod_three,value)}   
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


   {/*<View style={Estilos.viewBtnB}>
      <Button color={'#FF0000'} onPress={(value)=> pgtoDinheiro (prod_three,value)}  title="Dinheiro" />
    </View>  */}


   <TouchableOpacity onPress={(value)=>pgtoDinheiro(prod_three,value)}   
    style={Estilos.touchAbleL}>

    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>



{/* <View style={Estilos.viewBtnB}>
      <Button color={'#FF0000'} onPress={(value)=> pgtoCartao (prod_three,value)}  title="Cartão" />
    </View>  */}


  <TouchableOpacity onPress={(value)=>pgtoCartao(prod_three,value)}   
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




       {/* Testando storage */}


  <TouchableOpacity onPress={(value)=>setAbastecer(prod_one, produtoOne.abastecimento) & getAbastecer(prod_one) }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>



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







 {/*  <TouchableOpacity onPress={(value)=>storage("1","10") & fillStorage("1") }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>fill</Text>
  </TouchableOpacity>
 */}




  <Text style={Estilos.textInfo}>{`qtd ${produtoOne.count} `}</Text>

  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoOne .pgtoDn},00  ${produtoOne.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoOne.pgtoCt},00  ${produtoOne.qtdCt}  vendas`}</Text>


  {/* <TouchableOpacity onPress={(value)=>clearStorage()}   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>clear</Text>
  </TouchableOpacity> 
 
  <TouchableOpacity onPress={(value)=>setDn('2','85' ) & calcDn('2') }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>set Dn</Text>
  </TouchableOpacity> 
  
  <Text style={Estilos.textInfo}>{`soma ${produtoOne.preco} `}</Text>

  <TouchableOpacity onPress={(clearDn)}   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>clear</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>storage('1','1' ) & addStorage('1') }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>+</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={(value)=>storage('1','1' ) & removeStorage('1') }   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>-</Text>
  </TouchableOpacity>

 
  <Text style={Estilos.textInfo}>{`kye_1 ${produtoOne.count} `}</Text>

  <TouchableOpacity onPress={clearSales}   
    style={Estilos.touchAbleS}>
    <Text style={Estilos.touchText}>limpar</Text>
  </TouchableOpacity>  */} 






  </View>

 

   

{/*   <View  style={Estilos.viewRelatorio}>
   <Button color={'#FF0000'} title="Gerar Relatório" />
  </View> */}

  
  <TouchableOpacity onPress={printToFile}  
    style={Estilos.touchAbleR}>

    <Text style={Estilos.touchText}>Gerar Relatório</Text>
  </TouchableOpacity>


 </View>


 </LinearGradient>

 



</ScrollView>



</SafeAreaView>


  );




}