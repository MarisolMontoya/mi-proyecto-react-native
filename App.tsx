import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const nombre: string = "Mariiiii";
const carrera: string = "Ing. en Sistemas";
const cuatrimestre: number = 9;
const promedio: number = 9.3;
const titulado: boolean = false;

/* =========================
   PANTALLA INICIO
========================= */
function InicioScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/ford.jpg')}
        style={styles.avatar}
      />

      <Text style={styles.titulo}>
        Bienvenida {nombre}
      </Text>

      <Text style={styles.subtitulo}>
        {carrera}
      </Text>

      <Text style={styles.descripcion}>
        Explora una experiencia moderna enfocada en tecnología,
        innovación y desarrollo móvil con React Native.
      </Text>

      <View style={styles.card}>
        <Text style={styles.dato}>
          Cuatrimestre: {cuatrimestre}
        </Text>

        <Text style={styles.dato}>
          Promedio: {promedio}
        </Text>

        <Text style={styles.dato}>
          Titulado: {String(titulado)}
        </Text>
      </View>

      {/* MENÚ */}
      <TouchableOpacity
        style={styles.boton}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.textoBoton}>
          Ir a Perfil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, { marginTop: 15 }]}
        onPress={() => navigation.navigate('Hobbies')}
      >
        <Text style={styles.textoBoton}>
          Ir a Hobbies
        </Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

/* =========================
   PANTALLA PERFIL
========================= */
function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pantalla de Perfil</Text>

      <Image
        source={require('./assets/ford.jpg')}
        style={styles.avatar}
      />

      <Text style={styles.dato}>
        Nombre: {nombre}
      </Text>

      <Text style={styles.dato}>
        Carrera: {carrera}
      </Text>

      <Text style={styles.dato}>
        Promedio: {promedio}
      </Text>
    </View>
  );
}

/* =========================
   PANTALLA LIBRE
========================= */
function HobbiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Mis Hobbies
      </Text>

      <Text style={styles.dato}>
        🎮 Videojuegos
      </Text>

      <Text style={styles.dato}>
        💻 Programación
      </Text>

      <Text style={styles.dato}>
        🎵 Música
      </Text>

      <Text style={styles.dato}>
        🚗 Autos
      </Text>
    </View>
  );
}

/* =========================
   APP PRINCIPAL
========================= */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#101820',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
        />

        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
        />

        <Stack.Screen
          name="Hobbies"
          component={HobbiesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* =========================
   ESTILOS
========================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  avatar: {
    width: 220,
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    color: '#d1d1d1',
    marginBottom: 15,
  },

  descripcion: {
    fontSize: 16,
    color: '#f5f5f5',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },

  card: {
    backgroundColor: '#1e2a38',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },

  dato: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#ff9800',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 15,
  },

  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});