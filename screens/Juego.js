import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Alert,
  Image, 
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";

import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../components/Config";

import Pato from "../components/Pato";

// import { firebaseConfig } from '../components/Config';

export default function Juego({ navigation }) {
  const [tiempo, setTiempo] = useState(10);

  useEffect(() => {
    // const temporizador = setInterval(() => {
    //   setTiempo((tiempoAnterior) => tiempoAnterior-1)
    // }, 1000 //Milisegundos
    // )

    //setInterval: Función exclusiva de RN para medir el tiempo
    const temporizador = setInterval(() => {
      setTiempo((tiempoAnterior) => {
        if (tiempoAnterior == 1) {
          clearInterval(temporizador); //Detiene el temporizador
        }
        return tiempoAnterior - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (tiempo == 0) {
      Alert.alert("GAME OVER", "Su puntuación es: ");
      setTiempo(10);
    }
  }, [tiempo]);
  /////////////////////////////////////////////////////////////////

  function logOut() {
    // const app = initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("Login");
      })
      .catch((error) => {
        // An error happened.
        Alert.alert("Error")
      });
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Stage02.png")} // Ruta de la imagen de fondo
        style={styles.backgroundImage}
      >

        <View style={styles.row}>

        {/* <Image source={require("../assets/duck_hunt_logo.png")} style={styles.imgT} /> */}
       
        <Text style={{ fontSize: 30 }}> {tiempo} </Text>

        <TouchableOpacity style={styles.btn} onPress={() => logOut()}>
          <Text style={styles.txt}>Atrás</Text>
        </TouchableOpacity>



        {/* <Text style ={styles.time}> {tiempo} </Text> */}

        <Pato />

        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imgT:{
    height: 25
  },
  row: {
    flexDirection: "row",
    alignItems: 'flex-start',
    marginBottom: 10,
  },
});
