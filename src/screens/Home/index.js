import foto1 from "../../../assets/icon.png";
import React from "react";
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
        <Text style={styles.textTitle}>Teste</Text>
      </View>
      <View style={styles.boby}>
        <TextInput style={styles.input} keyboardType="numeric"></TextInput>
        
      </View>
    </View>
  );
}
