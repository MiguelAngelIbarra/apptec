import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    if (email === 'usuario@example.com' && password === 'contraseña') {
      // Si las credenciales son correctas, puedes redirigir a la pantalla de inicio
      console.log('Inicio de sesión exitoso');
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
