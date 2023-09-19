import { React } from "react";
import { FlatList } from "react-native";
import bebida2 from "../../../assets/absolutVodka2.png";
import bebida1 from "../../../assets/absolutVodka1.png";
import bebida3 from "../../../assets/absolutVodka3.png";
import { ItensBebidas2 } from "./item";

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
];

export default function catalogo1() {
  return (
    <ItensBebidas2>
      <FlatList
            data={catalogo}
            renderItem={({ItensBebidas2}) => (<ItensBebidas2 {...ItensBebidas2}/>)}
            keyExtractor={({id})=> (String(id))}
      />
            

      
    </ItensBebidas2>
  );
}