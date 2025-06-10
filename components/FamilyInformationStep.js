import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Picker } from "@react-native-picker/picker";

// Import the options from dataOptions.js
import {
  civilStatusOptions,
  relationshipOptions,
  educationLevelOptions,
  monthlyIncomeOptions,
  occupationOptions,
} from './DataOptions';

export default function FamilyInformationStep() {
  const [form, setForm] = useState({
    // Parent/Guardian
    lastName: '',
    firstName: '',
    middleName: '',
    suffix: '',
    sex: '',
    dob: '',
    civilStatus: '',
    relationship: '',
    education: '',
    occupation: '',
    income: '',

    // Emergency Contact
    eLastName: '',
    eFirstName: '',
    eMiddleName: '',
    eSuffix: '',
    eSex: '',
    eDob: '',
    eCivilStatus: '',
    eRelationship: '',
    eEducation: '',
    eOccupation: '',
    eIncome: '',
    eContact: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const renderRadioGroup = (name, selected) => (
    <View style={[styles.radioGroup, styles.input]}>
      <TouchableOpacity onPress={() => handleChange(name, 'Male')} style={styles.radioButton}>
        <View style={styles.circle}>
          {selected === 'Male' && <View style={styles.checked} />}
        </View>
        <Text style={styles.radioText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChange(name, 'Female')} style={styles.radioButton}>
        <View style={styles.circle}>
          {selected === 'Female' && <View style={styles.checked} />}
        </View>
        <Text style={styles.radioText}>Female</Text>
      </TouchableOpacity>
    </View>
  );

  const DropdownPicker = ({ selectedValue, onValueChange, options }) => (
    <View style={[styles.pickerContainer, styles.input]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>II. Family Information</Text>

      {/* Parent/Guardian Info */}
      <Text style={styles.label}>Name</Text>
      <View style={styles.row}>
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
      </View>

      <View style={styles.row}>
        {renderRadioGroup('sex', form.sex)}
        <TextInput 
          style={styles.input} 
          placeholder="Date of Birth" 
          value={form.dob} 
          onChangeText={(text) => handleChange('dob', text)} 
        />
        <DropdownPicker
          selectedValue={form.civilStatus}
          onValueChange={(value) => handleChange('civilStatus', value)}
          options={civilStatusOptions}
        />
        <DropdownPicker
          selectedValue={form.relationship}
          onValueChange={(value) => handleChange('relationship', value)}
          options={relationshipOptions}
        />
      </View>

      <View style={styles.row}>
        <DropdownPicker
          selectedValue={form.education}
          onValueChange={(value) => handleChange('education', value)}
          options={educationLevelOptions}
        />
        <DropdownPicker
          selectedValue={form.occupation}
          onValueChange={(value) => handleChange('occupation', value)}
          options={occupationOptions}
        />
        <DropdownPicker
          selectedValue={form.income}
          onValueChange={(value) => handleChange('income', value)}
          options={monthlyIncomeOptions}
        />
        <View style={styles.input} /> {/* Empty spacer for alignment */}
      </View>

      {/* Emergency Contact Info */}
      <Text style={styles.label}>Emergency Contact</Text>
      <View style={styles.row}>
        <TextInput 
          style={styles.input} 
          placeholder="Last Name" 
          value={form.eLastName} 
          onChangeText={(text) => handleChange('eLastName', text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="First Name" 
          value={form.eFirstName} 
          onChangeText={(text) => handleChange('eFirstName', text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Middle Name" 
          value={form.eMiddleName} 
          onChangeText={(text) => handleChange('eMiddleName', text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Ext. Jr. Sr." 
          value={form.eSuffix} 
          onChangeText={(text) => handleChange('eSuffix', text)} 
        />
      </View>

      <View style={styles.row}>
        {renderRadioGroup('eSex', form.eSex)}
        <TextInput 
          style={styles.input} 
          placeholder="Date of Birth" 
          value={form.eDob} 
          onChangeText={(text) => handleChange('eDob', text)} 
        />
        <DropdownPicker
          selectedValue={form.eCivilStatus}
          onValueChange={(value) => handleChange('eCivilStatus', value)}
          options={civilStatusOptions}
        />
        <DropdownPicker
          selectedValue={form.eRelationship}
          onValueChange={(value) => handleChange('eRelationship', value)}
          options={relationshipOptions}
        />
      </View>

      <View style={styles.row}>
        <DropdownPicker
          selectedValue={form.eEducation}
          onValueChange={(value) => handleChange('eEducation', value)}
          options={educationLevelOptions}
        />
        <DropdownPicker
          selectedValue={form.eOccupation}
          onValueChange={(value) => handleChange('eOccupation', value)}
          options={occupationOptions}
        />
        <DropdownPicker
          selectedValue={form.eIncome}
          onValueChange={(value) => handleChange('eIncome', value)}
          options={monthlyIncomeOptions}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Contact Number" 
          value={form.eContact} 
          onChangeText={(text) => handleChange('eContact', text)} 
          keyboardType="phone-pad"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 15,
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  checked: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  radioText: {
    fontSize: 14,
    color: '#333',
  },
  pickerContainer: {
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});