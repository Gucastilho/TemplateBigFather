import React, {useState} from "react";
import { Text, TouchableOpacity, View, Image, } from "react-native";
import { styles } from "./styles";
import { Audio } from 'expo-av';




export default function ItensBebidas({imagem,nomeBebida,valor}) {

  const [sound,setSound] = useState();

  const tocaSom = async () => {

    const {sound} = await Audio.Sound.createAsync(
      require("../../../assets/audioCompra.mp3")
    );

    setSound(sound);

    await sound.playAsync();



  }
  

  

  
  return <>
      <View style={styles.backgroundBebidas}>
      <View style={styles.viewDrinks}>
        <Image style={styles.imageDrinks} source={imagem} />
      </View>
      <View style={styles.infoDrinks}>
        <Text style={styles.textInfoDrinks}>{nomeBebida}</Text>
      </View>
      <View>
        <Text style={styles.textInfoDrinks}>{valor}</Text>
      </View>
      <View style={styles.viewTouchableOpacityDrinks}>
        <TouchableOpacity style={styles.TouchableOpacityDrinks} onPress={tocaSom}>
          <Text style={styles.textComprar}>COMPRAR</Text>
        </TouchableOpacity>
      </View> 
    </View> 
</>
}