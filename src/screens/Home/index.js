import foto1 from "../../../assets/icon.png";
import React from "react";
import { Octicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { styles } from "./styles";

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
      <View>
        <Text style={styles.textSemiTitle}>Vodka</Text>
      </View>
      <View style={styles.boby}></View>
    </View>
  );
}
