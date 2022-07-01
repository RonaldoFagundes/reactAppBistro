import React ,{useState} from  'react';
import { SafeAreaView, ScrollView, View,Text, TouchableOpacity, Image} from "react-native";
import Estilos from '../styles/estilos';
import { LinearGradient } from 'expo-linear-gradient';

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import AsyncStorageSales from '@react-native-async-storage/async-storage';



export default function Vendas(){




 


var data = new Date();
var dia  = data.getDate().toString().padStart(2, '0');
var mes  = (data.getMonth()+1).toString().padStart(2, '0') ;
var ano  = data.getFullYear();
var today = dia+"/"+mes+"/"+ano;



const [selectedPrinter, setSelectedPrinter] = React.useState();


  const prod_one = 'abacaxi';
  const[produtoOne, setProdutoOne] = useState({
    count:0,
    preco:10, 
    pgtoDn:0,
    qtdDn:0,
    totalDn:0,
    pgtoCt:0,
    qtdCt:0,
    totalCt:0,
    totalAll:0,
    abastecimento:'10'
});

const prod_two = 'banoffee';
const[produtoTwo, setProdutoTwo] = useState({
  count:0, 
  preco:10,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0,
  abastecimento:'10'
});

const prod_three ='bombom';
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

const prod_four ='brigadeirao';
const[produtoFour, setProdutoFour] = useState({
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

const prod_five ='cheasecake';
const[produtoFive, setProdutoFive] = useState({
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

const prod_six ='geleia';
const[produtoSix, setProdutoSix] = useState({
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

const prod_seven ='limao';
const[produtoSeven, setProdutoSeven] = useState({
  count:0, 
  preco:5,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0,
  abastecimento:'10'
});

const prod_eight ='ninho';
const[produtoEight, setProdutoEight] = useState({
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

const prod_nine ='pudim';
const[produtoNine, setProdutoNine] = useState({
  count:0, 
  preco:10,
  pgtoDn:0,
  qtdDn:0,
  totalDn:0,
  pgtoCt:0,
  qtdCt:0,
  totalCt:0,
  totalAll:0,
  abastecimento:'10'
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
             case prod_four: 
              setProdutoFour({
              ...produtoFour, count :(quantidade),
                produtoFour,pgtoDn:(produtoFour.pgtoDn = 0) ,
                produtoFour,qtdDn:(produtoFour.qtdDn = 0),
                produtoFour,pgtoCt:(produtoFour.pgtoCt =0),
                produtoFour,qtdCt:(produtoFour.qtdCt =0),
                produtoFour,totalAll:(produtoFour.totalAll =0)           
             })  
             break;
             case prod_five: 
              setProdutoFive({
              ...produtoFive, count :(quantidade),
                produtoFive,pgtoDn:(produtoFive.pgtoDn = 0) ,
                produtoFive,qtdDn:(produtoFive.qtdDn = 0),
                produtoFive,pgtoCt:(produtoFive.pgtoCt =0),
                produtoFive,qtdCt:(produtoFive.qtdCt =0),
                produtoFive,totalAll:(produtoFive.totalAll =0)           
             })  
             break; 
             case prod_six: 
             setProdutoSix({
             ...produtoSix, count :(quantidade),
               produtoSix,pgtoDn:(produtoSix.pgtoDn = 0) ,
               produtoSix,qtdDn:(produtoSix.qtdDn = 0),
               produtoSix,pgtoCt:(produtoSix.pgtoCt =0),
               produtoSix,qtdCt:(produtoSix.qtdCt =0),
               produtoSix,totalAll:(produtoSix.totalAll =0)           
            })  
            break;
            case prod_seven: 
             setProdutoSeven({
             ...produtoSeven, count :(quantidade),
               produtoSeven,pgtoDn:(produtoSeven.pgtoDn = 0) ,
               produtoSeven,qtdDn:(produtoSeven.qtdDn = 0),
               produtoSeven,pgtoCt:(produtoSeven.pgtoCt =0),
               produtoSeven,qtdCt:(produtoSeven.qtdCt =0),
               produtoSeven,totalAll:(produtoSeven.totalAll =0)           
            })  
            break;
            case prod_eight: 
             setProdutoEight({
             ...produtoEight, count :(quantidade),
               produtoEight,pgtoDn:(produtoEight.pgtoDn = 0) ,
               produtoEight,qtdDn:(produtoEight.qtdDn = 0),
               produtoEight,pgtoCt:(produtoEight.pgtoCt =0),
               produtoEight,qtdCt:(produtoEight.qtdCt =0),
               produtoEight,totalAll:(produtoEight.totalAll =0)           
            })  
            break;
            case prod_nine: 
            setProdutoNine({
            ...produtoNine, count :(quantidade),
              produtoNine,pgtoDn:(produtoNine.pgtoDn = 0) ,
              produtoNine,qtdDn:(produtoNine.qtdDn = 0),
              produtoNine,pgtoCt:(produtoNine.pgtoCt =0),
              produtoNine,qtdCt:(produtoNine.qtdCt =0),
              produtoNine,totalAll:(produtoNine.totalAll =0)           
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
      case prod_four:       
      setProdutoFour({
       ...produtoFour,count:(produtoFour.count +valor)
     }) 
     break;
      case prod_five:       
      setProdutoFive({
       ...produtoFive,count:(produtoFive.count +valor)
     }) 
     break;
     case prod_six:       
      setProdutoSix({
       ...produtoSix,count:(produtoSix.count +valor)
     }) 
     break;
     case prod_seven:       
      setProdutoSeven({
       ...produtoSeven,count:(produtoSeven.count +valor)
     }) 
     break;
     case prod_eight :       
      setProdutoEight({
       ...produtoEight,count:(produtoEight.count +valor)
     }) 
     break;
     case prod_nine:       
      setProdutoNine({
       ...produtoNine,count:(produtoNine.count +valor)
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
   key==prod_four && produtoFour.count>=1 ?
    setProdutoFour({
      ...produtoFour,count:(produtoFour.count -valor)
    }) 
   :false;
   key==prod_five && produtoFive.count>=1 ?
   setProdutoFive({
     ...produtoFive,count:(produtoFive.count -valor)
   }) 
  :false;
  key==prod_six && produtoSix.count>=1 ?
   setProdutoSix({
     ...produtoSix,count:(produtoSix.count -valor)
   }) 
  :false;
  key==prod_seven && produtoSeven.count>=1 ?
   setProdutoSeven({
     ...produtoSeven,count:(produtoSeven.count -valor)
   }) 
  :false;
  key==prod_eight && produtoEight.count>=1 ?
  setProdutoEight({
    ...produtoEight,count:(produtoEight.count -valor)
  }) 
 :false;
 key==prod_nine && produtoNine.count>=1 ?
   setProdutoNine({
     ...produtoNine,count:(produtoNine.count -valor)
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
        case prod_four:
          setProdutoFour ({
            ...produtoFour,count:(valor),
               produtoFour,pgtoDn:(produtoFour.pgtoDn = valor) ,
               produtoFour,qtdDn:(produtoFour.qtdDn = valor),
               produtoFour,pgtoCt:(produtoFour.pgtoCt =valor),
               produtoFour,qtdCt:(produtoFour.qtdCt =valor),
               produtoFour,totalAll:(produtoFour.totalAll =valor)
          })
          break;
        case prod_five:
          setProdutoFive ({
            ...produtoFive,count:(valor),
               produtoFive,pgtoDn:(produtoFive.pgtoDn = valor) ,
               produtoFive,qtdDn:(produtoFive.qtdDn = valor),
               produtoFive,pgtoCt:(produtoFive.pgtoCt =valor),
               produtoFive,qtdCt:(produtoFive.qtdCt =valor),
               produtoFive,totalAll:(produtoFive.totalAll =valor)
          })
          break;
          case prod_six:
            setProdutoSix ({
              ...produtoSix,count:(valor),
                 produtoSix,pgtoDn:(produtoSix.pgtoDn = valor) ,
                 produtoSix,qtdDn:(produtoSix.qtdDn = valor),
                 produtoSix,pgtoCt:(produtoSix.pgtoCt =valor),
                 produtoSix,qtdCt:(produtoSix.qtdCt =valor),
                 produtoSix,totalAll:(produtoSix.totalAll =valor)
            })
            break;
            case prod_seven:
            setProdutoSeven ({
              ...produtoSeven,count:(valor),
                 produtoSeven,pgtoDn:(produtoSeven.pgtoDn = valor) ,
                 produtoSeven,qtdDn:(produtoSeven.qtdDn = valor),
                 produtoSeven,pgtoCt:(produtoSeven.pgtoCt =valor),
                 produtoSeven,qtdCt:(produtoSeven.qtdCt =valor),
                 produtoSeven,totalAll:(produtoSeven.totalAll =valor)
            })
            break;
            case prod_eight:
            setProdutoEight ({
              ...produtoEight,count:(valor),
                 produtoEight,pgtoDn:(produtoEight.pgtoDn = valor) ,
                 produtoEight,qtdDn:(produtoEight.qtdDn = valor),
                 produtoEight,pgtoCt:(produtoEight.pgtoCt =valor),
                 produtoEight,qtdCt:(produtoEight.qtdCt =valor),
                 produtoEight,totalAll:(produtoEight.totalAll =valor)
            })
            break;
            case prod_nine:
            setProdutoNine ({
              ...produtoNine,count:(valor),
                 produtoNine,pgtoDn:(produtoNine.pgtoDn = valor) ,
                 produtoNine,qtdDn:(produtoNine.qtdDn = valor),
                 produtoNine,pgtoCt:(produtoNine.pgtoCt =valor),
                 produtoNine,qtdCt:(produtoNine.qtdCt =valor),
                 produtoNine,totalAll:(produtoNine.totalAll =valor)
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
   key == prod_four && produtoFour.count>=1?
   setProdutoFour({
    ...produtoFour,count:(produtoFour.count -valor) , 
       produtoFour,pgtoDn:(produtoFour.pgtoDn + produtoFour.preco),
       produtoFour,qtdDn:(produtoFour.qtdDn+valor),
       produtoFour,totalAll:(produtoFour.totalAll = produtoFour.pgtoDn + produtoFour.pgtoCt +produtoFour.preco )
   }) 
   :false;
   key == prod_five && produtoFive.count>=1?
   setProdutoFive({
    ...produtoFive,count:(produtoFive.count -valor) , 
       produtoFive,pgtoDn:(produtoFive.pgtoDn + produtoFive.preco),
       produtoFive,qtdDn:(produtoFive.qtdDn+valor),
       produtoFive,totalAll:(produtoFive.totalAll = produtoFive.pgtoDn + produtoFive.pgtoCt +produtoFive.preco )
   }) 
   :false;
   key == prod_six && produtoSix.count>=1?
   setProdutoSix({
    ...produtoSix,count:(produtoSix.count -valor) , 
       produtoSix,pgtoDn:(produtoSix.pgtoDn + produtoSix.preco),
       produtoSix,qtdDn:(produtoSix.qtdDn+valor),
       produtoSix,totalAll:(produtoSix.totalAll = produtoSix.pgtoDn + produtoSix.pgtoCt +produtoSix.preco )
   }) 
   :false;
   key == prod_seven && produtoSeven.count>=1?
   setProdutoSeven({
    ...produtoSeven,count:(produtoSeven.count -valor) , 
       produtoSeven,pgtoDn:(produtoSeven.pgtoDn + produtoSeven.preco),
       produtoSeven,qtdDn:(produtoSeven.qtdDn+valor),
       produtoSeven,totalAll:(produtoSeven.totalAll = produtoSeven.pgtoDn + produtoSeven.pgtoCt +produtoSeven.preco )
   }) 
   :false;
   key == prod_eight && produtoEight.count>=1?
   setProdutoEight({
    ...produtoEight,count:(produtoEight.count -valor) , 
       produtoEight,pgtoDn:(produtoEight.pgtoDn + produtoEight.preco),
       produtoEight,qtdDn:(produtoEight.qtdDn+valor),
       produtoEight,totalAll:(produtoEight.totalAll = produtoEight.pgtoDn + produtoEight.pgtoCt +produtoEight.preco )
   }) 
   :false;
   key == prod_nine && produtoNine.count>=1?
   setProdutoNine({
    ...produtoNine,count:(produtoNine.count -valor) , 
       produtoNine,pgtoDn:(produtoNine.pgtoDn + produtoNine.preco),
       produtoNine,qtdDn:(produtoNine.qtdDn+valor),
       produtoNine,totalAll:(produtoNine.totalAll = produtoNine.pgtoDn + produtoNine.pgtoCt +produtoNine.preco )
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
   key == prod_four && produtoFour.count>=1?
   setProdutoFour({
    ...produtoFour,count:(produtoFour.count -valor) , 
       produtoFour,pgtoCt:(produtoFour.pgtoCt + produtoFour.preco),
       produtoFour,qtdCt:(produtoFour.qtdCt+valor),
       produtoFour,totalAll:(produtoFour.totalAll = produtoFour.pgtoCt + produtoFour.pgtoDn +produtoFour.preco )
      })
   :false;
   key == prod_five && produtoFive.count>=1?
   setProdutoFive({
    ...produtoFive,count:(produtoFive.count -valor) , 
       produtoFive,pgtoCt:(produtoFive.pgtoCt + produtoFive.preco),
       produtoFive,qtdCt:(produtoFive.qtdCt+valor),
       produtoFive,totalAll:(produtoFive.totalAll = produtoFive.pgtoCt + produtoFive.pgtoDn +produtoFive.preco )
   })
   :false;
   key == prod_six && produtoSix.count>=1?
   setProdutoSix({
    ...produtoSix,count:(produtoSix.count -valor) , 
       produtoSix,pgtoCt:(produtoSix.pgtoCt + produtoSix.preco),
       produtoSix,qtdCt:(produtoSix.qtdCt+valor),
       produtoSix,totalAll:(produtoSix.totalAll = produtoSix.pgtoCt + produtoSix.pgtoDn +produtoSix.preco )
   })
   :false;
   key == prod_seven && produtoSeven.count>=1?
   setProdutoSeven({
    ...produtoSeven,count:(produtoSeven.count -valor) , 
       produtoSeven,pgtoCt:(produtoSeven.pgtoCt + produtoSeven.preco),
       produtoSeven,qtdCt:(produtoSeven.qtdCt+valor),
       produtoSeven,totalAll:(produtoSeven.totalAll = produtoSeven.pgtoCt + produtoSeven.pgtoDn +produtoSeven.preco )
   })
   :false;
   key == prod_eight && produtoEight.count>=1?
   setProdutoEight({
    ...produtoEight,count:(produtoEight.count -valor) , 
       produtoEight,pgtoCt:(produtoEight.pgtoCt + produtoEight.preco),
       produtoEight,qtdCt:(produtoEight.qtdCt+valor),
       produtoEight,totalAll:(produtoEight.totalAll = produtoEight.pgtoCt + produtoEight.pgtoDn +produtoEight.preco )
   })
   :false;
   key == prod_nine  && produtoNine.count>=1?
   setProdutoNine({
    ...produtoNine,count:(produtoNine.count -valor) , 
       produtoNine,pgtoCt:(produtoNine.pgtoCt + produtoNine.preco),
       produtoNine,qtdCt:(produtoNine.qtdCt+valor),
       produtoNine,totalAll:(produtoNine.totalAll = produtoNine.pgtoCt + produtoNine.pgtoDn +produtoNine.preco )
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
    price:" R$ "+produtoOne.preco,
    abs:produtoOne.abastecimento,
    notsell:produtoOne.count,
    dnqtd:produtoOne.qtdDn,
    dnvalor:" R$ "+produtoOne.pgtoDn,
    ctqtd:produtoOne.qtdCt,
    ctvalor:" R$ "+produtoOne.pgtoCt,
    total:" R$ "+produtoOne.totalAll
   });     
  } 
  
  if (produtoTwo.count > 0){
  array.push({
  produt:prod_two,
  price:" R$ "+produtoTwo.preco,
  abs:produtoTwo.abastecimento,
  notsell:produtoTwo.count,
  dnqtd:produtoTwo.qtdDn,
  dnvalor:" R$ "+produtoTwo.pgtoDn,
  ctqtd:produtoTwo.qtdCt,
  ctvalor:" R$ "+produtoTwo.pgtoCt,
  total:" R$ "+produtoTwo.totalAll
}); 
 }
 
 if (produtoThree.count > 0){
  array.push({
  produt:prod_three,
  price:" R$ "+produtoThree.preco,
  abs:produtoThree.abastecimento,
  notsell:produtoThree.count,
  dnqtd:produtoThree.qtdDn,
  dnvalor:" R$ "+produtoThree.pgtoDn,
  ctqtd:produtoThree.qtdCt,
  ctvalor:" R$ "+produtoThree.pgtoCt,
  total:" R$ "+produtoThree.totalAll
}); 
 }

 if (produtoFour.count > 0){
  array.push({
  produt:prod_four,
  price:" R$ "+produtoFour.preco,
  abs:produtoFour.abastecimento,
  notsell:produtoFour.count,
  dnqtd:produtoFour.qtdDn,
  dnvalor:" R$ "+produtoFour.pgtoDn,
  ctqtd:produtoFour.qtdCt,
  ctvalor:" R$ "+produtoFour.pgtoCt,
  total:" R$ "+produtoFour.totalAll
}); 
 }

 if (produtoFive.count > 0){
  array.push({
  produt:prod_five,
  price:" R$ "+produtoFive.preco,
  abs:produtoFive.abastecimento,
  notsell:produtoFive.count,
  dnqtd:produtoFive.qtdDn,
  dnvalor:" R$ "+produtoFive.pgtoDn,
  ctqtd:produtoFive.qtdCt,
  ctvalor:" R$ "+produtoFive.pgtoCt,
  total:" R$ "+produtoFive.totalAll
}); 
 }

 if (produtoSix.count > 0){
  array.push({
  produt:prod_six,
  price:" R$ "+produtoSix.preco,
  abs:produtoSix.abastecimento,
  notsell:produtoSix.count,
  dnqtd:produtoSix.qtdDn,
  dnvalor:" R$ "+produtoSix.pgtoDn,
  ctqtd:produtoSix.qtdCt,
  ctvalor:" R$ "+produtoSix.pgtoCt,
  total:" R$ "+produtoSix.totalAll
}); 
 }

if (produtoSeven.count > 0){
  array.push({
  produt:prod_seven,
  price:" R$ "+produtoSeven.preco,
  abs:produtoSeven.abastecimento,
  notsell:produtoSeven.count,
  dnqtd:produtoSeven.qtdDn,
  dnvalor:" R$ "+produtoSeven.pgtoDn,
  ctqtd:produtoSeven.qtdCt,
  ctvalor:" R$ "+produtoSeven.pgtoCt,
  total:" R$ "+produtoSeven.totalAll
}); 
}

if (produtoEight.count > 0){
  array.push({
  produt:prod_eight,
  price:" R$ "+produtoEight.preco,
  abs:produtoSeven.abastecimento,
  notsell:produtoEight.count,
  dnqtd:produtoEight.qtdDn,
  dnvalor:" R$ "+produtoEight.pgtoDn,
  ctqtd:produtoEight.qtdCt,
  ctvalor:" R$ "+produtoSeven.pgtoCt,
  total:" R$ "+produtoEight.totalAll
}); 
}

if (produtoNine.count > 0){
  array.push({
  produt:prod_nine,
  price:" R$ "+produtoNine.preco,
  abs:produtoNine.abastecimento,
  notsell:produtoNine.count,
  dnqtd:produtoNine.qtdDn,
  dnvalor:" R$ "+produtoNine.pgtoDn,
  ctqtd:produtoNine.qtdCt,
  ctvalor:" R$ "+produtoNine.pgtoCt,
  total:" R$ "+produtoNine.totalAll
}); 
}


 var quantidade_total_dn = 
 produtoOne.qtdDn +
 produtoTwo.qtdDn + 
 produtoThree.qtdDn + 
 produtoFour.qtdDn + 
 produtoFive.qtdDn  +  
 produtoSix.qtdDn +
 produtoSeven.qtdDn  +
 produtoEight.qtdDn  +
 produtoNine.qtdDn  ;  

 var valor_total_dn = 
 produtoOne.pgtoDn + 
 produtoTwo.pgtoDn + 
 produtoThree.pgtoDn + 
 produtoFour.pgtoDn + 
 produtoFive.pgtoDn  +  
 produtoSix.pgtoDn +  
 produtoSeven.pgtoDn  +
 produtoEight.pgtoDn  +
 produtoNine.pgtoDn  ;

 var quantidade_total_ct = 
 produtoOne.qtdCt + 
 produtoTwo.qtdCt + 
 produtoThree.qtdCt + 
 produtoFour.qtdCt + 
 produtoFive.qtdCt +  
 produtoSix.qtdCt +
 produtoSeven.qtdCt  +
 produtoEight.qtdCt  +
 produtoNine.qtdCt  ;

 var valor_total_ct = 
 produtoOne.pgtoCt + 
 produtoTwo.pgtoCt + 
 produtoThree.pgtoCt + 
 produtoFour.pgtoCt + 
 produtoFive.pgtoCt  +  
 produtoSix.pgtoCt +
 produtoSeven.pgtoCt  +
 produtoEight.pgtoCt  +
 produtoNine.pgtoCt  ;


var total_nao_vendidos = 
produtoOne.count + 
 produtoTwo.count + 
 produtoThree.count + 
 produtoFour.count + 
 produtoFive.count  +  
 produtoSix.count +
 produtoSeven.count  +
 produtoEight.count  +
 produtoNine.count  ;


var valor_total_recebido = valor_total_dn + valor_total_ct ;

var qtd_abastecido = quantidade_total_dn + quantidade_total_ct + total_nao_vendidos;



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
               <td colspan="20">${today}</td>
             </tr>
             <tr>
               <th colspan="20">Relatório de Vendas</th>
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





           <tfoot>             
             <tr>

                <td colspan="2">Totais</td>

                <td>${qtd_abastecido}</td>

                <td>${total_nao_vendidos}</td>                

                <td colspan="3">${quantidade_total_dn}</td>

                <td colspan="4">R$ ${valor_total_dn}</td>

                <td colspan="3">${quantidade_total_ct}</td>

                <td colspan="4">R$ ${valor_total_ct}</td>

                <td colspan="1">R$ ${valor_total_recebido}</td>

 

            </tr>
           </tfoot>  


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
colors={['rgba(251, 195, 95, 1.0)', 'rgba(251, 195, 95, 0.5)']}  style={{flex:1}}>
 <View style={Estilos.viewHeader}> 
    <View style={Estilos.viewImgHeader}>
      <Image 
       source={require('../assets/logo.jpg')}
       style={Estilos.imgHeader}
     />       
    </View>   
    <Text style={Estilos.textHeader}>Bistrô di Totta</Text>
 </View>
 </LinearGradient>




<LinearGradient
  colors={['rgba(111, 0, 0, 1)', 'rgba(140, 51, 51,0.8)','rgba(115, 0, 0, 0.7)']} style={{flex:1}}>

<View style={Estilos.containnerMain}>




{/* produto_one */}
<View style={Estilos.containnerProduto}>
 <View style={Estilos.viewAbastecer}>
     <Image 
       source={require('../assets/abacaxi.png')}
       style={Estilos.viewAbastecerImg}/>  
  <LinearGradient
  colors={['#a73737', '#F00000']}  style={Estilos.gradientTouchXL}> 
   <TouchableOpacity onPress={(value)=>setAbastecer(prod_one, produtoOne.abastecimento) & getAbastecer(prod_one) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>
 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_one, "0") & getZerar(prod_one) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
  </LinearGradient>
  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_one, "1") & getAdd(prod_one) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
  </LinearGradient>
  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_one, "1") & getRemove(prod_one) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity> 
  </LinearGradient> 
 </View>
 <View style={Estilos.viewInfo}>
   <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoOne.count} ${prod_one}(s) `}</Text>      
  </View>
  <View style={Estilos.viewVendas}>    
     <Text style={Estilos.textVendas}>Vendas</Text> 
    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
   <TouchableOpacity onPress={(value)=>setPgtoDn(prod_one, "1") & getPgtoDn(prod_one) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
 </LinearGradient>
 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_one, "1") & getPgtoCt(prod_one) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity> 
  </LinearGradient>
  </View> 
  <View style={Estilos.viewSubTotal}>
   <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoOne.pgtoDn},00  ${produtoOne.qtdDn}  vendas`}</  Text> 
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoOne.pgtoCt},00  ${produtoOne.qtdCt}  vendas`}</Text>      
  </View>
</View>

{/* produto_two */}
<View style={Estilos.containnerProduto}>

 <View style={Estilos.viewAbastecer}>
  
     <Image 
       source={require('../assets/banoffee.png')}
       style={Estilos.viewAbastecerImg}
     />      

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}> 
    <TouchableOpacity onPress={(value)=>setAbastecer(prod_two, produtoTwo.abastecimento) & getAbastecer(prod_two) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>


 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_two, "0") & getZerar(prod_two) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_two, "1") & getAdd(prod_two) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
 </LinearGradient>


 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_two, "1") & getRemove(prod_two) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>
  </LinearGradient>
  
  </View>


  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel : ${produtoTwo.count} ${prod_two}(s)`}</Text>     
   </View>

  <View style={Estilos.viewVendas}> 
   
     <Text style={Estilos.textVendas}>Vendas</Text> 

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_two, "1") & getPgtoDn(prod_two) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
 </LinearGradient>


 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_two, "1") & getPgtoCt(prod_two) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity> 
 </LinearGradient>

  </View>



  <View style={Estilos.viewSubTotal}> 

  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoTwo.pgtoDn},00  ${produtoTwo.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoTwo.pgtoCt},00  ${produtoTwo.qtdCt}  vendas`}</Text>      
  </View>

</View>



{/* produto_three */}


<View style={Estilos.containnerProduto}>

  <View style={Estilos.viewAbastecer}>
  
    <Image 
       source={require('../assets/bombom.png')}
       style={Estilos.viewAbastecerImg}
     />        
      

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}> 
  <TouchableOpacity onPress={(value)=>setAbastecer(prod_three, produtoThree.abastecimento) &     getAbastecer(prod_three) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_three, "0") & getZerar(prod_three) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_three, "1") & getAdd(prod_three) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_three, "1") & getRemove(prod_three) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>  
 </LinearGradient>      
      
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoThree.count} ${prod_three}(s)  `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 
    
     <Text style={Estilos.textVendas}>Vendas</Text>    

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_three, "1") & getPgtoDn(prod_three) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_three, "1") & getPgtoCt(prod_three) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity>
  </LinearGradient>

  </View>


  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoThree .pgtoDn},00  ${produtoThree.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoThree.pgtoCt},00  ${produtoThree.qtdCt}  vendas`}</Text>      
  </View>

</View>



{/* produto_four */}


<View style={Estilos.containnerProduto}>

  <View style={Estilos.viewAbastecer}>
  
    <Image 
       source={require('../assets/brigadeirao.png')}
       style={Estilos.viewAbastecerImg}
     />        
      

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}> 
  <TouchableOpacity onPress={(value)=>setAbastecer(prod_four, produtoFour.abastecimento) &     getAbastecer(prod_four) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_four, "0") & getZerar(prod_four) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_four, "1") & getAdd(prod_four) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_four, "1") & getRemove(prod_four) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>  
 </LinearGradient>      
      
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoFour.count} ${prod_four}(s) `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 
    
     <Text style={Estilos.textVendas}>Vendas</Text>    

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_four, "1") & getPgtoDn(prod_four) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_four, "1") & getPgtoCt(prod_four) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity>
  </LinearGradient>

  </View>


  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoFour .pgtoDn},00  ${produtoFour.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoFour.pgtoCt},00  ${produtoFour.qtdCt}  vendas`}</Text>      
  </View>

</View>






{/* produto_five */}


<View style={Estilos.containnerProduto}>

  <View style={Estilos.viewAbastecer}>
  
    <Image 
       source={require('../assets/cheasecake.png')}
       style={Estilos.viewAbastecerImg}
     />        
      

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}> 
  <TouchableOpacity onPress={(value)=>setAbastecer(prod_five, produtoFive.abastecimento) &     getAbastecer(prod_five) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_five, "0") & getZerar(prod_five) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_five, "1") & getAdd(prod_five) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_five, "1") & getRemove(prod_five) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>  
 </LinearGradient>      
      
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoFive.count}  ${prod_five}(s) `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 
    
     <Text style={Estilos.textVendas}>Vendas</Text>    

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_five, "1") & getPgtoDn(prod_five) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_five, "1") & getPgtoCt(prod_five) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity>
  </LinearGradient>

  </View>


  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoFive .pgtoDn},00  ${produtoFive.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoFive.pgtoCt},00  ${produtoFive.qtdCt}  vendas`}</Text>      
  </View>

</View>






{/* produto_six */}

<View style={Estilos.containnerProduto}>

  <View style={Estilos.viewAbastecer}>
  
    <Image 
       source={require('../assets/geleia.png')}
       style={Estilos.viewAbastecerImg}
     />        
      

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}> 
  <TouchableOpacity onPress={(value)=>setAbastecer(prod_six, produtoSix.abastecimento) &     getAbastecer(prod_six) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_six, "0") & getZerar(prod_six) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_six, "1") & getAdd(prod_six) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_six, "1") & getRemove(prod_six) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>  
 </LinearGradient>      
      
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoSix.count}  ${prod_six}(s) `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 
    
     <Text style={Estilos.textVendas}>Vendas</Text>    

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_six, "1") & getPgtoDn(prod_six) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_six, "1") & getPgtoCt(prod_six) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity>
  </LinearGradient>

  </View>


  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoSix .pgtoDn},00  ${produtoSix.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoSix.pgtoCt},00  ${produtoSix.qtdCt}  vendas`}</Text>      
  </View>

</View>


{/* produto_seven */}

<View style={Estilos.containnerProduto}>

  <View style={Estilos.viewAbastecer}>
  
    <Image 
       source={require('../assets/limao.png')}
       style={Estilos.viewAbastecerImg}
     />        
      

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}> 
  <TouchableOpacity onPress={(value)=>setAbastecer(prod_seven, produtoSeven.abastecimento) &     getAbastecer(prod_seven) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_seven, "0") & getZerar(prod_seven) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_seven, "1") & getAdd(prod_seven) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_seven, "1") & getRemove(prod_seven) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>  
 </LinearGradient>      
      
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoSeven.count}  ${prod_seven}(s) `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 
    
     <Text style={Estilos.textVendas}>Vendas</Text>    

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_seven, "1") & getPgtoDn(prod_seven) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_seven, "1") & getPgtoCt(prod_seven) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity>
  </LinearGradient>

  </View>


  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoSeven .pgtoDn},00  ${produtoSeven.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoSeven.pgtoCt},00  ${produtoSeven.qtdCt}  vendas`}</Text>      
  </View>

</View>



{/* produto_eight */}

<View style={Estilos.containnerProduto}>

  <View style={Estilos.viewAbastecer}>
  
    <Image 
       source={require('../assets/ninho.png')}
       style={Estilos.viewAbastecerImg}
     />        
      

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}> 
  <TouchableOpacity onPress={(value)=>setAbastecer(prod_eight,produtoEight.abastecimento) &     getAbastecer(prod_eight) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_eight, "0") & getZerar(prod_eight) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_eight, "1") & getAdd(prod_eight) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_eight, "1") & getRemove(prod_eight) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>  
 </LinearGradient>      
      
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoEight.count}  ${prod_eight}(s) `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 
    
     <Text style={Estilos.textVendas}>Vendas</Text>    

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_eight, "1") & getPgtoDn(prod_eight) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_eight, "1") & getPgtoCt(prod_eight) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity>
  </LinearGradient>

  </View>


  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoEight .pgtoDn},00  ${produtoEight.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoEight.pgtoCt},00  ${produtoEight.qtdCt}  vendas`}</Text>      
  </View>

</View>






{/* produto_nine */}

<View style={Estilos.containnerProduto}>

  <View style={Estilos.viewAbastecer}>
  
    <Image 
       source={require('../assets/pudim.png')}
       style={Estilos.viewAbastecerImg}
     />        
      

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}> 
  <TouchableOpacity onPress={(value)=>setAbastecer(prod_nine, produtoNine.abastecimento) &     getAbastecer(prod_nine) }>
    <Text style={Estilos.touchText}>Abastecer</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchM}> 
  <TouchableOpacity onPress={(value)=>setZerar(prod_nine, "0") & getZerar(prod_nine) }>
    <Text style={Estilos.touchText}>zerar</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setAdd(prod_nine, "1") & getAdd(prod_nine) }>
    <Text style={Estilos.touchText}>+ 1</Text>
  </TouchableOpacity>
 </LinearGradient>

 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchS}> 
  <TouchableOpacity onPress={(value)=>setRemove(prod_nine, "1") & getRemove(prod_nine) }>
    <Text style={Estilos.touchText}>- 1</Text>
  </TouchableOpacity>  
 </LinearGradient>      
      
  </View>

  <View style={Estilos.viewInfo}>
      <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoNine.count}  ${prod_nine}(s) `}</Text>      
  </View>

  <View style={Estilos.viewVendas}> 
    
     <Text style={Estilos.textVendas}>Vendas</Text>    

    <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
    <TouchableOpacity onPress={(value)=>setPgtoDn(prod_nine, "1") & getPgtoDn(prod_nine) }>
    <Text style={Estilos.touchText}>Dinheiro</Text>
  </TouchableOpacity>
  </LinearGradient>


  <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchL}> 
  <TouchableOpacity onPress={(value)=>setPgtoCt(prod_nine, "1") & getPgtoCt(prod_nine) }>
    <Text style={Estilos.touchText}>Cartão</Text>
  </TouchableOpacity>
  </LinearGradient>

  </View>


  <View style={Estilos.viewSubTotal}> 
  <Text style={Estilos.textInfo}>{`Valor em dinheiro R$ ${produtoNine .pgtoDn},00  ${produtoNine.qtdDn}  vendas`}</  Text>
  <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoNine.pgtoCt},00  ${produtoNine.qtdCt}  vendas`}</Text>      
  </View>

</View>




{/* acrecentar daqui para cima */}

 



 <View style={Estilos.viewAmount}>

 <Text style={Estilos.textInfo}>
  {`Valor total Dinheiro R$ ${
  produtoOne.pgtoDn + 
  produtoTwo.pgtoDn +
  produtoThree.pgtoDn + 
  produtoFour.pgtoDn + 
  produtoFive.pgtoDn + 
  produtoSix.pgtoDn +
  produtoSeven.pgtoDn +
  produtoEight.pgtoDn +
  produtoNine.pgtoDn
  },00 `}  
 </Text>

  <Text style={Estilos.textInfo}>
    {`Valor total Cartões R$ ${
      produtoOne.pgtoCt + 
      produtoTwo.pgtoCt + 
      produtoThree.pgtoCt + 
      produtoFour.pgtoCt + 
      produtoFive.pgtoCt + 
      produtoSix.pgtoCt +
      produtoSeven.pgtoCt +
      produtoEight.pgtoCt +
      produtoNine.pgtoCt
      },00 `}
   </Text>

  <Text style={Estilos.textInfo}>
    {`Valor total R$ ${
      produtoOne.totalAll + 
      produtoTwo.totalAll + 
      produtoThree.totalAll + 
      produtoFour.totalAll + 
      produtoFive.totalAll + 
      produtoSix.totalAll  +
      produtoSeven.totalAll +
      produtoEight.totalAll +
      produtoNine.totalAll
      },00 `}
  </Text>

  </View>



<LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}>
  <TouchableOpacity onPress={printToFile}>
    <Text style={Estilos.touchText}>Share</Text>
  </TouchableOpacity>
 </LinearGradient>



 <LinearGradient
  colors={['#a73737', '#F00000']} 
 style={Estilos.gradientTouchXL}>
  <TouchableOpacity onPress={print}>
    <Text style={Estilos.touchText}>Safe</Text>
  </TouchableOpacity>
 </LinearGradient>
 



 

</View>

  </LinearGradient>
 </ScrollView>
</SafeAreaView>
  );
}