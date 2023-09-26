import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import  {Home}  from './src/screens/Home';
import { BodyMenu } from './src/component/bodyMenu/Index';
import { TelaAdicionarBebidas } from './src/screens/AdicionarBebidas';





export default function App() {

 

  return <> 
      <StatusBar />
       <TelaAdicionarBebidas/>
      </>
  
}



