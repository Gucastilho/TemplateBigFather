import foto1 from "../../../assets/icon.png";
import React from "react";
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { BodyMenu } from "../../component/bodyMenu/Index";
import { VideoCastis } from "../../component/videoCastis";
import { ItensBebidas, itensBebidas } from "../../component/itemBebidas/item-bebidas";
import { ItensBebidas2 } from "../../component/itemBebidas2/item";
import { Audio } from 'expo-av';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Imprima_400Regular } from "@expo-google-fonts/dev";

export function Home() {

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="three-bars" size={24} color="#fff" />
        <View style={styles.search}>
        <AntDesign name="search1" size={24} color="#FFF" />
        <TextInput style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>Encontre sua bebida favorita e compre no melhor valor</Text>
      </View>
    <ScrollView>
      <View style={styles.viewSemiTitleGin}>
        <Text style={styles.textSemiTitle}>Gin</Text>
      </View>
      <View style={styles.boby}>
        <ItensBebidas/>
        
      </View>
      <View style={styles.viewSemiTitleGin}>
        <Text style={styles.textSemiTitle}>Whisky</Text>
      </View>
      <View style={styles.boby}>
          <ItensBebidas2/>
        
      </View>
      <View style={styles.viewtextTitleVideo}>
        <Text style={styles.textTitle}>Conheça nosso espaço para tomar seu drink de qualidade</Text>
      </View>
      <VideoCastis></VideoCastis>
    </ScrollView>
      <View>
        <View style={styles.viewBodyMenu}>
        <BodyMenu></BodyMenu>
         
        </View>
      </View>
    </View>
  );
}
