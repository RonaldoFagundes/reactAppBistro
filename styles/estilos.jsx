import {StyleSheet , StatusBar} from 'react-native';



export default StyleSheet.create({   

    containnerBody:{
       flex: 1,
       paddingTop: StatusBar.currentHeight,
   },



     viewHeader:{
         width:'auto',
         maxHeight:100,         
        // boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.4)',    
         flexDirection:'row',
         alignItems:'center',
         padding:10,
          },      



     viewImgHeader:{
        width:'18%',
        height:200,      
     },
     imgHeader:{
        width:100,
        height:100,
        resizeMode:'contain',
        borderRadius: 100 / 2,
        marginTop:50
     },

 
     viewTextHeader:{
       marginLeft:'18%'
     },
     textHeader:{         
        fontSize:26, 
        fontWeight: 'bold', 
        color:'#cc0000'       
     },







    containnerMain:{
        width:'100%',
        maxHeight:1200,
        flex:1,      
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        
     },




    containnerProduto:{
        width:'97%',

       // minHeight:230, 
        backgroundColor: 'rgba(255, 255, 223, 0.7)',

        marginTop:10,         
        padding:5,
        alignItems:'center',        
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'black',
        borderRadius: 35,
      //  shadowRadius: 10    
    },

   



    viewProduto:{
        width:'98%',
        maxHeight:400,  

        backgroundColor: 'rgba(255, 255, 223, 0.7)',
        backgroundImage: 'linear-gradient(to top, transparent, rgba(251, 195, 95, 0.9))',
        boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.4)',

        flexDirection: "row",        
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingTop:5,
        paddingBottom:5,        
        margin:5,
        borderRadius: 30,
        shadowRadius: 10           
    }, 



   viewProdName:{
    width:'15%',
    height:50,
    
   },
    
    
 imgProdName:{
    width:60,
    height:50,
    resizeMode:'contain',
    borderRadius: 50/2,
    },


 touchAbleL:{
    width:'22%',
    height:35,
    backgroundColor:'#FF0000',       
    shadowRadius: 10,
    borderRadius:50,
    padding:7    
 },

 touchAbleM:{
    width:'18%',
    height:35,
    backgroundColor:'#FF0000',       
    shadowRadius: 10,
    borderRadius:50,
    padding:7    
 },

 touchAbleS:{
    width:'15%',
    height:35,
    backgroundColor:'#FF0000',       
    shadowRadius: 10,
    borderRadius:50,
    padding:7    
 },

 touchText:{
     textAlign:'center',
     fontWeight: 'bold',
     fontSize:14,
     color:'white' 
 },


    viewBtn:{
        width:'12%',
        maxHeight:50, 
        marginLeft:4     
    },
    viewBtnM:{
        marginLeft:4       
    },
    viewBtnB:{
        width:'25%',
        maxHeight:50,        
      shadowRadius: 10                     
    },





    viewInfo:{
        width:'97%',
        maxHeight:50, 
        alignItems:'center'
    },
    textInfo:{   
        fontWeight: 'bold',     
        color:'#663300',
        fontSize:14,  
        textAlign:'center',      
    },






    
    viewVendas:{
        width:'97%',
        maxHeight:400,
        
        backgroundColor: 'rgba(255, 255, 223, 0.7)',
        backgroundImage: 'linear-gradient(to top, transparent, rgba(251, 195, 95, 0.9))',
        boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.4)',


        flexDirection: "row",
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5,  
        margin:5,
        borderRadius: 30,
        shadowRadius: 10         
    },
     
    textVendas:{   
        fontWeight: 'bold',     
        color:'#663300',
        fontSize:14,
        textAlign:'center', 
        marginTop:15       
    },

    viewSubTotal:{
        width:'95%',
        maxHeight:100,

        backgroundColor: 'rgba(255, 255, 223, 0.7)',
        backgroundImage: 'linear-gradient(to top, transparent, rgba(251, 195, 95, 0.9))',
        boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.4)',

        marginTop:5, 
        textAlign:'center',
        borderRadius: 30,
        shadowRadius: 10   
    },






    viewAmount:{
        width:'97%',
        maxHeight:400,

        backgroundColor: 'rgba(255, 255, 223, 0.7)',   

        padding:5,
        alignItems:'center',
        marginTop:10,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'black',        
        shadowRadius: 10,
        borderRadius: 30,
        shadowRadius: 10      
    },


     viewRelatorio:{
        width:'50%',
        maxHeight:80,       
        padding:5,
        marginTop:10,
        marginBottom:10,            
        shadowRadius: 10, 
       },

       touchAbleR:{
        width:'50%',
        height:35,
        backgroundColor:'#FF0000',       
        shadowRadius: 10,
        borderRadius:50,
        padding:7 ,
        marginTop:10,
        marginBottom:10   
     },

     
     
     
});