import { React } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { styles } from "./sytles";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export function BodyMenu() {
  return (
    <View style={styles.bobyMenu}>
      <View>
        <Feather style={styles.icons} name="home" size={24} color="#fff" />
      </View>
      <View>
        <AntDesign style={styles.icons} name="hearto" size={24} color="#fff" />
      </View>
      <View>
        <AntDesign style={styles.icons} name="shoppingcart" size={24} color="#fff" />
      </View>
      <View>
        <AntDesign style={styles.icons} name="search1" size={24} color="#fff" />
      </View>
      <View>
        <Ionicons  name="person-outline" size={24} color="#fff" />
      </View>
    </View>
  );
}
