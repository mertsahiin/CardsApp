import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
       
      },
        Container:{
        backgroundColor:'white',
        margin: 10,
        borderWidth:1,
        borderColor:'gray',
        borderRadius: 10,
        marginTop: 25,
        
    
      },
      Body: {
        padding: 10,
    
      },
      Title:{
        fontSize: 20,
        fontWeight: 'bold',
        margin:10,
        marginBottom: 3,
      },
      Text:{
        fontSize: 16,
        margin:10,
        marginTop: 3,
      },
      Button:{
        backgroundColor:'#00C2FF',
        padding: 10,
        alignItems:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,  
      },
      ButtonTitle:{
        fontWeight:'bold',
        color: 'white',
        fontSize:18,
      }
})