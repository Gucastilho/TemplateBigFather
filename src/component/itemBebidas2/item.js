import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, Button } from "react-native";
import { styles } from "./styles";
import Audio from 'expo-av'; // Import Audio from expo-av


export default function ItensBebidas2({imagem,nomeBebida,valor}) {
  // const [audioStatus, setAudioStatus] = useState(false);
  // const [sound, setSound] = useState(new Audio.Sound());

  
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
        <TouchableOpacity style={styles.TouchableOpacityDrinks}>
          <Text style={styles.textComprar}>COMPRAR</Text>
        </TouchableOpacity>
      </View> 
    </View> 
</>
}
