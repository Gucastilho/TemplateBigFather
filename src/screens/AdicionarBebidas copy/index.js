import {React} from 'react'
import {Text,View,TextInput,TouchableOpacity} from 'react-native'
import { styles } from './styles'



export function TelaAdicionarBebidas(){

    return (

        <View style={styles.container}>
            <Text style={styles.titleText}>Adicione aqui a bebida que deseja ver em nossa loja</Text>
            <View style={styles.viewInputButton}>
            <TextInput 
            style={styles.input}
            placeholder='Digite aqui sua bebida desejada'
            placeholderTextColor='#737373'
            ></TextInput>
            <TouchableOpacity style={styles.buttonAdd}><Text style={styles.textMais}>+</Text></TouchableOpacity>
            </View>
        </View>


    )

}