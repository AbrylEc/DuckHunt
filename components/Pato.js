import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Pato() {

    //Construímos un json
    const [posicion, setPosicion] = useState({x:0, y:0})

    function moverPato(){
        const MAX_X = 250;
        const MAX_Y = 600;

        /*En funciones randómicas se coloca el * para especificar el 
        número máximo aleatorio (350)*/
        const randomX = Math.floor(Math.random() * MAX_X);
        const randomY = Math.floor(Math.random() * MAX_Y);

        setPosicion ({ x: randomX, y: randomY });
       

    }

  return (
    <View style = {{ top: posicion.y, left: posicion.x, position: 'absolute'}}>
        <TouchableOpacity onPress={()=>moverPato() }>
        <Image 
        source = {require("../assets/duck.png")}
        style={styles.img}     
        />

        </TouchableOpacity>
       
      <Text>Pato</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width: 90,
        height: 90
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });