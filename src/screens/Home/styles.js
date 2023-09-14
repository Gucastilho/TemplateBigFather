import { StyleSheet } from "react-native";


export const styles = StyleSheet.create ({

container:{
    backgroundColor: "#212121",
    flex: 1,
    
},

textTitle:{
color: "#FFF",
fontSize:25,

},

header:{
marginTop:20,
padding:30,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",

},

search:{
    justifyContent:"center",
    flexDirection:"row",
    alignItems:"center",
    borderColor:"rgba(144,149,160,0.5)",
    borderStyle:"solid",
    borderWidth: 1,
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40,
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
    padding:10,
   
    

},

input:{
    width:246,
    height:30,
    marginLeft:10,  
},

searchIcon: {
    paddingLeft: 20,

},


viewTitle:{
    padding:15,
},

textSemiTitle:{
    color:"#fff",
    fontSize:15,

},

boby:{

},
})