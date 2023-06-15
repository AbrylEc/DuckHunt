import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import Juego from '../screens/Juego';
import Registro from '../screens/Registro';

import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function MyStack() {
    return (
      //Creación de rutas
      <Stack.Navigator>
        <Stack.Screen name="Login" component= {Login} options={{ headerShown: false }} />
        <Stack.Screen name="Juego" component= {Juego} options={{ headerShown: false }}/>        
        <Stack.Screen name="Registro" component= {Registro} options={{ headerShown: false }}/>
      </Stack.Navigator>
   
    );
  }

export default function StackNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}