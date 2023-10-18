import React, {useState} from "react";
import { Text, TouchableOpacity, View, Image, Button, } from "react-native";
import { styles } from "./styles";
import { Audio } from 'expo-av';
import {AsyncStorage} from '@react-native-async-storage/async-storage';




export default function ItensBebidas({id,imagem,nomeBebida,valor}) {

  const [sound,setSound] = useState();

  const tocaSom = async () => {

    const {sound} = await Audio.Sound.createAsync(
      require("../../../assets/audioCompra.mp3")
    );

    setSound(sound);

    await sound.playAsync();



  }
  
  //Função para salvar o produto a lista de desejos
  // Vamos usar o armazenamento local no cache do aparelho

  async function addListItem(id, imageDrinks,nomeBebida,valor){

    const addProduto = [{

      id: id,
      imageDrinks:imageDrinks,
      nomeBebida: nomeBebida,
      valor:valor,
    }]

    // captura a lista de compra existente 

    const listaDeDesejo = await AsyncStorage.getItem('listaDeDesejos');

    // verifica se a lista ja existe

      if(listaDeDesejoSalva !== null){
    // a lista ja existe

        const listaDeDesejos = JSON.parse(listaDeDesejoSalva)

        listaDeDesejo.push({

        id: id,
        imageDrinks:imageDrinks,
        nomeBebida: nomeBebida,
        valor:valor,
        })

        //Guarda no asycStorege

        const listaDeDesejoSalva = JSON.stringify(addListItem)

        console.log('A lista ja existe')
  }else {
    //A lista nao existe, ai salva o primeiro item
    // converte a lista para string 

    const listaDesejosAtt = JSON.stringify(addProduto);

    //Gusrda a lista 

    await AsyncStorage.setItem('ListaDeDesejos' ,listaDesejosAtt );
    console.log('add item na lista')
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


        <Button title='title' onPress={(addListItem) => (id, nomeBebida, preco) }></Button>

      </View> 
    </View> 
</>
}