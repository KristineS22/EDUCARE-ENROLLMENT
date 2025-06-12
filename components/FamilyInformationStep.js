import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { Picker } from "@react-native-picker/picker";

// Import the options from dataOptions.js
import {
  suffixOptions,
  civilStatusOptions,
  relationshipOptions,
  educationLevelOptions,
  monthlyIncomeOptions,
  occupationOptions,
} from './DataOptions';

export default function FamilyInformationStep({ route }) {
  // Get the data passed from previous screens (now properly connected)
  const { dob, age } = route?.params || {};

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

  const renderRadioGroup = (name, selected, sublabel) => (
    <View style={styles.fieldContainer}>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          onPress={() => handleChange(name, 'Male')}
          style={styles.radioButton}
        >
          <View style={styles.circle}>
            {selected === 'Male' && <View style={styles.checked} />}
          </View>
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleChange(name, 'Female')}
          style={styles.radioButton}
        >
          <View style={styles.circle}>
            {selected === 'Female' && <View style={styles.checked} />}
          </View>
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sublabel}>{sublabel}</Text>
    </View>
  );

  const DropdownPicker = ({ selectedValue, onValueChange, options, sublabel }) => (
    <View style={styles.fieldContainer}>
      <View style={styles.pickerContainer}>
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
      <Text style={styles.sublabel}>{sublabel}</Text>
    </View>
  );

  const InputField = ({ value, onChangeText, placeholder, sublabel, keyboardType = 'default' }) => (
    <View style={styles.fieldContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      <Text style={styles.sublabel}>{sublabel}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={true}
          bounces={true}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true}
          scrollEnabled={true}
        >
          <Text style={styles.sectionTitle}>II. Family Information</Text>

          {/* Parent/Guardian Info */}
          <Text style={styles.label}>Parent/Guardian Information *</Text>
          
          {/* Name Row */}
          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.lastName}
                onChangeText={(text) => handleChange('lastName', text)}
                placeholder="Enter last name"
                sublabel="Last Name"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.firstName}
                onChangeText={(text) => handleChange('firstName', text)}
                placeholder="Enter first name"
                sublabel="First Name"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.middleName}
                onChangeText={(text) => handleChange('middleName', text)}
                placeholder="Enter middle name"
                sublabel="Middle Name"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.suffix}
                onValueChange={(value) => handleChange('suffix', value)}
                options={suffixOptions}
                sublabel="Ext. Jr. Sr."
              />
            </View>
          </View>

          {/* Personal Details Row */}
          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              {renderRadioGroup('sex', form.sex, 'Sex')}
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.dob}
                onChangeText={(text) => handleChange('dob', text)}
                placeholder="MM/DD/YYYY"
                sublabel="Date of Birth"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.civilStatus}
                onValueChange={(value) => handleChange('civilStatus', value)}
                options={civilStatusOptions}
                sublabel="Civil Status"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.relationship}
                onValueChange={(value) => handleChange('relationship', value)}
                options={relationshipOptions}
                sublabel="Relationship"
              />
            </View>
          </View>

          {/* Professional Details Row */}
          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.education}
                onValueChange={(value) => handleChange('education', value)}
                options={educationLevelOptions}
                sublabel="Education Level"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.occupation}
                onValueChange={(value) => handleChange('occupation', value)}
                options={occupationOptions}
                sublabel="Occupation"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.income}
                onValueChange={(value) => handleChange('income', value)}
                options={monthlyIncomeOptions}
                sublabel="Monthly Income"
              />
            </View>
            <View style={styles.inputWrapper}>
              {/* Empty field placeholder */}
              <View style={styles.fieldContainer}>
                <View style={styles.emptySpace} />
                <Text style={styles.sublabel}> </Text>
              </View>
            </View>
          </View>

          {/* Emergency Contact Info */}
          <Text style={styles.label}>Emergency Contact Information *</Text>
          
          {/* Emergency Contact Name Row */}
          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.eLastName}
                onChangeText={(text) => handleChange('eLastName', text)}
                placeholder="Enter last name"
                sublabel="Last Name"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.eFirstName}
                onChangeText={(text) => handleChange('eFirstName', text)}
                placeholder="Enter first name"
                sublabel="First Name"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.eMiddleName}
                onChangeText={(text) => handleChange('eMiddleName', text)}
                placeholder="Enter middle name"
                sublabel="Middle Name"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.eSuffix}
                onValueChange={(value) => handleChange('eSuffix', value)}
                options={suffixOptions}
                sublabel="Ext. Jr. Sr."
              />
            </View>
          </View>

          {/* Emergency Contact Personal Details Row */}
          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              {renderRadioGroup('eSex', form.eSex, 'Sex')}
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.eDob}
                onChangeText={(text) => handleChange('eDob', text)}
                placeholder="MM/DD/YYYY"
                sublabel="Date of Birth"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.eCivilStatus}
                onValueChange={(value) => handleChange('eCivilStatus', value)}
                options={civilStatusOptions}
                sublabel="Civil Status"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.eRelationship}
                onValueChange={(value) => handleChange('eRelationship', value)}
                options={relationshipOptions}
                sublabel="Relationship"
              />
            </View>
          </View>

          {/* Emergency Contact Professional Details Row */}
          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.eEducation}
                onValueChange={(value) => handleChange('eEducation', value)}
                options={educationLevelOptions}
                sublabel="Education Level"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.eOccupation}
                onValueChange={(value) => handleChange('eOccupation', value)}
                options={occupationOptions}
                sublabel="Occupation"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.eIncome}
                onValueChange={(value) => handleChange('eIncome', value)}
                options={monthlyIncomeOptions}
                sublabel="Monthly Income"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.eContact}
                onChangeText={(text) => handleChange('eContact', text)}
                placeholder="Enter contact number"
                sublabel="Contact Number"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          {/* Add extra space at bottom for better scroll experience */}
          <View style={styles.bottomSpacer} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 100, // Extra space at bottom
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#003087",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 3,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputWrapper: {
    width: '24%',
    marginBottom: 15,
  },
  fieldContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
    minHeight: 40,
    fontSize: 14,
  },
  radioGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    minHeight: 40,
    gap: 25,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  radioText: {
    marginLeft: 4,
    fontSize: 12,
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
    height: 15,
    width: 15,
    borderRadius: 9,
    backgroundColor: '#00188D',
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    minHeight: 40,
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  sublabel: {
    fontSize: 11,
    color: "#000",
    marginTop: 4,
    textAlign: "left",
    fontWeight: "450",
  },
  emptySpace: {
    minHeight: 40,
    backgroundColor: 'transparent',
  },
  bottomSpacer: {
    height: 50,
  },
});