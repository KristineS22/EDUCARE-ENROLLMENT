import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegistrationScreen = ({ route }) => {
  const { dob, age } = route.params; 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    console.log('Registered:', { name, email, dob, age });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <Text>Child's Date of Birth: {dob}</Text>
      <Text>Child's Age: {age} year{age !== 1 ? 's' : ''}</Text>

      <TextInput
        style={styles.input}
        placeholder="Child's Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Parent's Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default RegistrationScreen;
