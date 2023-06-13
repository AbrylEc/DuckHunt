import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../components/Config";
import { db } from "../components/Config";
import { getDatabase, ref, onValue } from "firebase/database";

export default function Registro({ navigation }) {
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");
  const [nick, setNick] = useState("");
  const [edad, setEdad] = useState("");
  // const [datos, setDatos] = useState("");

  function registrar() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, correo, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        guardar(correo, nick, edad);

        Alert.alert("Mensaje", "Usuario registrado con exito");
        navigation.navigate("Juego");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error");
        // ..
      });
  }

  //Función para guardar los datos en un json
  function guardar(correoE, nickE, edadE) {
    /* Se elimina la línea 45 debido a que ya se encuentra
  implementada en el archivo Config.js*/
    // const db = getDatabase();
    set(ref(db, "jugadores/" + nick), {
      email: correoE,
      nick: nickE,
      age: edadE,
    });
  }

  //Función eliminar
  // function eliminar(id) {
  //   // remove(ref(db, 'jugadores/' + id))
  //   // Alert.alert("Eliminar registro", "¿Desea eliminar este registro?", [
  //   //   {
  //   //     text: "Cancelar",
  //   //   },
  //   //   {
  //   //     text: "Eliminar",
  //   //     onPress: () => {
  //   //       const nuevosRegistros = datos.filter((item, i) => i != index);
  //   //       setDatos(nuevosRegistros);
  //   //     },
  //   //   },
  //   // ]);
  // }

  // function leer() {
  //   const starCountRef = ref(db, "jugadores/");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setDatos(data);

  //     const dataArray = Object.entries(data).map(([key, value]) => ({
  //       /*Agregar ... permite que se guarden los registros nuevos sin que se borren
  //     los que ya existen*/
  //       key,
  //       ...value,
  //     }));

  //     setDatos(dataArray);
  //     console.log(datos);
  //   });
  // }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Stage02.png")}
        style={styles.backgroundImage}
      >
        <TextInput
          placeholder="Ingrese su e-mail"
          keyboardType="email-address"
          onChangeText={(text) => setCorreo(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Ingrese un nick"
          onChangeText={(text) => setNick(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Ingrese su edad"
          onChangeText={(text) => setEdad(text)}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          placeholder="Ingrese una contraseña"
          onChangeText={(text) => setPass(text)}
          style={styles.input}
        />

        <TouchableOpacity style={styles.btn} onPress={() => registrar()}>
          <Text style={styles.txtBtn}>REGISTRAR</Text>
        </TouchableOpacity>

        {/* <Button title="Leer" onPress={() => leer()} /> */}

        {/* 
        <FlatList
          data={datos}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nick}</Text>
              <Button title="Eliminar" onPress={() => eliminar()} />
            </View>
          )}
        /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 90,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    color: "#fff",
    height: 30,
    width: '85%',
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "black",
    margin: 20,
  },
  txtBtn: {
    color: "#fff",
    fontWeight: "bold"
  },
  input: {
    width: '80%',
    textAlign : "center",
    borderBottomWidth: 1, // Ancho de la línea inferior de guía
    borderBottomColor: 'black', // Color de la línea inferior de guía (opcional)
    paddingVertical: 5, // Espacio vertical interno del TextInput
  },

});
