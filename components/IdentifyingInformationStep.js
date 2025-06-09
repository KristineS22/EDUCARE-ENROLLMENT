import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

export default function IdentifyingInformationStep() {
  const [form, setForm] = useState({
    facilityName: '',
    barangay: '',
    city: '',
    province: '',
    region: '',
    lastName: '',
    firstName: '',
    middleName: '',
    suffix: '',
    nickname: '',
    sex: '',
    birthOrder: '',
    siblings: '',
    dob: '',
    birthRegistered: '',
    birthStreet: '',
    birthBarangay: '',
    birthCity: '',
    birthProvince: '',
    birthRegion: '',
    homeStreet: '',
    homeBarangay: '',
    homeCity: '',
    homeProvince: '',
    homeRegion: '',
    religion: '',
    ethnicity: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleRadio = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>I. Identifying Information</Text>

      {/* Facility Location */}
      <Text style={styles.label}>Facility Location</Text>
      <View style={styles.column5}>
        <TextInput
          style={styles.input}
          placeholder="Name of Facility"
          value={form.facilityName}
          onChangeText={(text) => handleChange('facilityName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Barangay"
          value={form.barangay}
          onChangeText={(text) => handleChange('barangay', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="City / Municipality"
          value={form.city}
          onChangeText={(text) => handleChange('city', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Province"
          value={form.province}
          onChangeText={(text) => handleChange('province', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Region"
          value={form.region}
          onChangeText={(text) => handleChange('region', text)}
        />
      </View>

      {/* Name */}
      <Text style={styles.label}>Name</Text>
      <View style={styles.column5}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={form.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={form.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Middle Name"
          value={form.middleName}
          onChangeText={(text) => handleChange('middleName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Ext. Jr. Sr."
          value={form.suffix}
          onChangeText={(text) => handleChange('suffix', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          value={form.nickname}
          onChangeText={(text) => handleChange('nickname', text)}
        />
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#003087',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 8,
  },
  column5: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    width: '18%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonWrapper: {
    marginTop: 30,
    alignItems: 'center',
  },
});