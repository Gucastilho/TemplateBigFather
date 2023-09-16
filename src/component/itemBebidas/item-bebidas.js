import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, Button } from "react-native";
import { styles } from "./styles";
import iconpng from '../../../assets/icon.png';
import { Audio } from 'expo-av'; // Import Audio from expo-av

export function ItensBebidas() {
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(new Audio.Sound());

  
  return (
    <View style={styles.backgroundBebidas}>
      <View style={styles.viewDrinks}>
        <Image style={styles.imageDrinks} source={iconpng} />
      </View>
      <View style={styles.infoDrinks}>
        <Text style={styles.textInfoDrinks}>Absolute Pears</Text>
      </View>
      <View>
        <Text style={styles.textInfoDrinks}>R$199.99</Text>
      </View>
      <View style={styles.viewTouchableOpacityDrinks}>
        <TouchableOpacity style={styles.TouchableOpacityDrinks}>
          <Text style={styles.textComprar}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
