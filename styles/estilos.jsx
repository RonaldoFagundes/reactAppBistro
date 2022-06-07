import {StyleSheet , StatusBar} from 'react-native';



export default StyleSheet.create({   

    containnerBody:{
       flex: 1,
       paddingTop: StatusBar.currentHeight,
   },

     viewHeader:{
         width:'auto',
         height:120,          
         flexDirection:'row',
         alignItems:'center',
         padding:10,
       }, 
     viewImgHeader:{
        width:'16%',
        height:'90%',             
     },
     imgHeader:{
        width:'150%',
        height:'100%',
        resizeMode:'contain',
        borderRadius: 100 / 2       
     },     
     textHeader:{         
        fontSize:26, 
        fontWeight: 'bold', 
        color:'#cc0000',
        marginLeft:'20%'       
     },


    containnerMain:{
        width:'100%',
        height:'auto',
        flex:1,      
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',       
     },


    containnerProduto:{
        width:'97%',       
        backgroundColor: 'rgba(255, 255, 223, 0.7)',
        marginTop:10,         
        padding:5,
        alignItems:'center',        
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'black',
        borderRadius: 35    
    },
    viewAbastecer:{
        width:'98%',
        height:70,  
        backgroundColor: 'rgba(255, 255, 223, 0.7)',       
        flexDirection: "row",        
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingTop:5,
        paddingBottom:5,        
        margin:5,
        borderRadius: 30,                
    }, 
    viewAbastecerImg:{
        width:60,
        height:50,
        resizeMode:'contain',
        borderRadius: 50/2      
        },

    viewInfo:{
        width:'97%',
        maxHeight:50, 
        alignItems:'center',
   },
    textInfo:{   
        fontWeight: 'bold',     
        color:'#663300',
        fontSize:14,  
        textAlign:'center',      
    },

    viewVendas:{
        width:'97%',
        height:60,        
        backgroundColor: 'rgba(255, 255, 223, 0.7)',
        flexDirection: "row",
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5,  
        margin:5,
        borderRadius: 30       
    },   
   textVendas:{   
    fontWeight: 'bold',     
    color:'#663300',
    fontSize:14,          
},
    

   viewSubTotal:{
    width:'95%',
    height:60,   
    backgroundColor: 'rgba(255, 255, 223, 0.7)',
    marginTop:5,     
    justifyContent:'space-evenly',
    alignItems:'center',
    borderRadius: 30     
},




gradientTouchS:{ 
    width:40,
    height:35,   
    borderRadius:50,    
    alignItems:'center',
    justifyContent:'center'
   },
   gradientTouchM:{ 
    width:60,
    height:35,   
    borderRadius:50,    
    alignItems:'center',
    justifyContent:'center'
   },
 gradientTouchL:{ 
    width:80,
    height:35,   
    borderRadius:50,    
    alignItems:'center',
    justifyContent:'center'
   },  
   gradientTouchXL:{ 
    width:95,
    height:35,
    marginTop:10,
    marginBottom:10,   
    borderRadius:50,    
    alignItems:'center',
    justifyContent:'center'
   },
   touchText:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize:14,
    color:'white'     
},



    viewAmount:{
        width:'97%',
        height:80,
        backgroundColor: 'rgba(255, 255, 223, 0.7)',         
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:10,
        borderWidth:2,
        borderStyle:'solid',
        borderColor:'black',         
        borderRadius: 30         
    },




     
     
     
     
});