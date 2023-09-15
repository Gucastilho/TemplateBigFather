import foto1 from "../../../assets/icon.png";
import React from "react";
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { BodyMenu } from "../../component/bodyMenu/Index";
import { ItensBebidas, itensBebidas } from "../../component/itemBebidas/item-bebidas";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
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
      <View style={styles.viewSemiTitle}>
        <Text style={styles.textSemiTitle}>Vodka</Text>
      </View>
      <View style={styles.boby}>
        <ItensBebidas />
        <ItensBebidas />
      </View>
      <View style={styles.viewSemiTitleGin}>
        <Text style={styles.textSemiTitle}>Gin</Text>
      </View>
      <View style={styles.boby}>
        <ItensBebidas />
        <ItensBebidas />
      </View>
      <View style={styles.viewSemiTitleGin}>
        <Text style={styles.textSemiTitle}>Whisky</Text>
      </View>
      <View style={styles.boby}>
        <ItensBebidas />
        <ItensBebidas />
      </View>
    </ScrollView>
      <View>
        <View style={styles.viewBodyMenu}>
         <BodyMenu></BodyMenu>

        </View>
      </View>
    </View>
  );
}
