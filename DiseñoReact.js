import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Banco del Bienestar</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Bienvenido</Text>
          <Text style={styles.instructionText}>Ingresa los 16 números de tu tarjeta</Text>
          <TextInput
            style={styles.input}
            placeholder="Número de tarjeta"
            maxLength={16}
            keyboardType="numeric"
          />
          <Text style={styles.instructionText}>Ingresa el NIP usado en el cajero</Text>
          <TextInput
            style={styles.input}
            placeholder="NIP"
            maxLength={4}
            keyboardType="numeric"
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <Button title="Validar" color="#004d40" onPress={() => { /* Add your validation logic here */ }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    backgroundColor: '#004d40',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
});