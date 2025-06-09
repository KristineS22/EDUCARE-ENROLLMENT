import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>II. Family Information</Text>

      {/* Parent/Guardian Info */}
      <Text style={styles.label}>Name</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Last Name" value={form.lastName} onChangeText={(text) => handleChange('lastName', text)} />
        <TextInput style={styles.input} placeholder="First Name" value={form.firstName} onChangeText={(text) => handleChange('firstName', text)} />
        <TextInput style={styles.input} placeholder="Middle Name" value={form.middleName} onChangeText={(text) => handleChange('middleName', text)} />
        <TextInput style={styles.input} placeholder="Ext. Jr. Sr." value={form.suffix} onChangeText={(text) => handleChange('suffix', text)} />
      </View>

      <View style={styles.row}>
        {renderRadioGroup('sex', form.sex)}
        <TextInput style={styles.input} placeholder="Date of Birth" value={form.dob} onChangeText={(text) => handleChange('dob', text)} />
        <TextInput style={styles.input} placeholder="Civil Status" value={form.civilStatus} onChangeText={(text) => handleChange('civilStatus', text)} />
        <TextInput style={styles.input} placeholder="Relationship" value={form.relationship} onChangeText={(text) => handleChange('relationship', text)} />
      </View>

      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Highest Education" value={form.education} onChangeText={(text) => handleChange('education', text)} />
        <TextInput style={styles.input} placeholder="Occupation" value={form.occupation} onChangeText={(text) => handleChange('occupation', text)} />
        <TextInput style={styles.input} placeholder="Monthly Income" value={form.income} onChangeText={(text) => handleChange('income', text)} />
        <View style={styles.input} /> {/* Empty spacer for alignment */}
      </View>

      {/* Emergency Contact Info */}
      <Text style={styles.label}>Emergency Contact</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Last Name" value={form.eLastName} onChangeText={(text) => handleChange('eLastName', text)} />
        <TextInput style={styles.input} placeholder="First Name" value={form.eFirstName} onChangeText={(text) => handleChange('eFirstName', text)} />
        <TextInput style={styles.input} placeholder="Middle Name" value={form.eMiddleName} onChangeText={(text) => handleChange('eMiddleName', text)} />
        <TextInput style={styles.input} placeholder="Ext. Jr. Sr." value={form.eSuffix} onChangeText={(text) => handleChange('eSuffix', text)} />
      </View>

      <View style={styles.row}>
        {renderRadioGroup('eSex', form.eSex)}
        <TextInput style={styles.input} placeholder="Date of Birth" value={form.eDob} onChangeText={(text) => handleChange('eDob', text)} />
        <TextInput style={styles.input} placeholder="Civil Status" value={form.eCivilStatus} onChangeText={(text) => handleChange('eCivilStatus', text)} />
        <TextInput style={styles.input} placeholder="Relationship" value={form.eRelationship} onChangeText={(text) => handleChange('eRelationship', text)} />
      </View>

      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Highest Education" value={form.eEducation} onChangeText={(text) => handleChange('eEducation', text)} />
        <TextInput style={styles.input} placeholder="Occupation" value={form.eOccupation} onChangeText={(text) => handleChange('eOccupation', text)} />
        <TextInput style={styles.input} placeholder="Monthly Income" value={form.eIncome} onChangeText={(text) => handleChange('eIncome', text)} />
        <TextInput style={styles.input} placeholder="Contact Number" value={form.eContact} onChangeText={(text) => handleChange('eContact', text)} />
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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    width: '23%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  radioText: {
    marginLeft: 4,
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
});
