import  React from "react";
import { FlatList } from "react-native";
import bebida2 from "../../../assets/absolutVodka2.png";
import bebida1 from "../../../assets/absolutVodka1.png";
import bebida3 from "../../../assets/AbsolutVodka3.png";
import bebida4 from "../../../assets/AbsolutVodka4.png";
import bebida5 from "../../../assets/absolutVodka5.png"
import bebida6 from "../../../assets/absolutVodka6.png"
import bebida7 from "../../../assets/absolutVodka7.png"



import ItensBebidas2 from "./item";





const catalogo = [
  {
    id: "bebida1",
    imagem: bebida1,
    nomeBebida: "Absolute Pears ",
    valor: "R$: 199.99",
  },
  {
    id: "bebida2",
    imagem: bebida2,
    nomeBebida: "Absolute Mango  ",
    valor: "R$: 189.99",
  },

  {
    id: "bebida3",
    imagem: bebida3,
    nomeBebida: " Absolute Raspberri ",
    valor: "R$: 199.99",
  },
  {
    id: "bebida4",
    imagem: bebida4,
    nomeBebida: "Absolute Apech ",
    valor: "R$:199.99 ",
  },
  {
    id: "bebida5",
    imagem:bebida5 ,
    nomeBebida: " Absolut No Label ",
    valor: "R$:299.99 ",
  },
  {
    id: "bebida6",
    imagem:bebida6 ,
    nomeBebida: " Abasolute Los Angeles",
    valor: "R$:399.99 ",
  },
  {
    id: "bebida7",
    imagem: bebida7,
    nomeBebida: " Absolute Disco ",
    valor: "R$:399,99 ",
  },
  
];

export default function catalogo1() {
  return (
      <FlatList
            horizontal={true}
            data={catalogo}
            renderItem={({item}) => <ItensBebidas2 {...item}/>}
            keyExtractor={({id})=> (String(id))}
      />
  );
}
