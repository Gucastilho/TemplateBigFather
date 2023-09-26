import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({

    container:{
        backgroundColor: "#212121",
        flex: 1,
        
    },

    titleText:{
        color:'#fff',
        fontSize:30,
        marginTop: 20,
        marginLeft: 5,

    },

    viewInputButton:{
        flexDirection: 'row',
        alignItems:"center",
        marginBottom: 0,

    },

    input:{
        marginTop:15,
        borderRadius:16,
        backgroundColor: "rgba(144,149,160,0.5)",
        width:"80%",
        height:50,
        marginLeft:10,  
        color: '#fff',
        padding:5,
    },

    buttonAdd:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#04C23A',
        height:50,
        width:50,
        borderRadius:10,
        marginLeft:20,
        marginTop:15,
    },

    textMais:{
        color:'#fff',
        fontSize:30,
    }


})