import  React from "react";
import { FlatList } from "react-native";
import gin1 from "../../../assets/gin1.png"
import gin2 from "../../../assets/gin2.png"
import gin3 from "../../../assets/gin3.png"
import gin4 from "../../../assets/gin4.png"
import gin5 from "../../../assets/gin5.png"
import gin6 from "../../../assets/gin6.png"
import gin7 from "../../../assets/gin7.png"






import ItensBebidas from "./item";

const catalogo1 = [
  {
    id: "bebida1",
    imagem: gin1,
    nomeBebida: "Vanfall London Dry Gin ",
    valor: "R$: 399.99",
  },
  {
    id: "bebida2",
    imagem: gin2,
    nomeBebida: "Gin Espanhol  Rose  ",
    valor: "R$: 159.99",
  },

  {
    id: "bebida3",
    imagem: gin3,
    nomeBebida: " Las Californias Gin  ",
    valor: "R$: 299.99",
  },
  {
    id: "bebida4",
    imagem: gin4,
    nomeBebida: "Gin Beefeater   ",
    valor: "R$:99.99 ",
  },
  {
    id: "bebida5",
    imagem:gin5 ,
    nomeBebida: " GIN FLORAL  ",
    valor: "R$:299.99 ",
  },
  {
    id: "bebida6",
    imagem:gin6 ,
    nomeBebida: " Tanqueray ",
    valor: "R$:199.99 ",
  },
  {
    id: "bebida7",
    imagem: gin7,
    nomeBebida: " Gin Bombay Sapphire ",
    valor: "R$:149,99 ",
  },
  
];

export default function catalogo2() {
  return (
      <FlatList
            horizontal={true}
            data={catalogo1}
            renderItem={({item}) => <ItensBebidas {...item}/>}
            keyExtractor={({id})=> (String(id))}
      />
  );
}
