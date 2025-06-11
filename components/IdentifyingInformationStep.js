import React, { useState, useEffect } from "react";
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
} from "react-native";
import { Picker } from "@react-native-picker/picker";

// Import the options from dataOptions.js
import {
  suffixOptions,
  birthOrderOptions,
  siblingsOptions,
  religionOptions,
  regionOptions,
  ethnicityOptions,
} from "./DataOptions";

export default function IdentifyingInformationStep({ route }) {
  // Get the data passed from previous screens
  const { dob, age, birthday } = route?.params || {};

  const [form, setForm] = useState({
    facilityName: "",
    barangay: "",
    city: "",
    province: "",
    region: "",
    lastName: "",
    firstName: "",
    middleName: "",
    suffix: "",
    nickname: "",
    sex: "",
    birthOrder: "",
    siblings: "",
    dob: "",
    birthRegistered: "",
    birthStreet: "",
    birthBarangay: "",
    birthCity: "",
    birthProvince: "",
    birthRegion: "",
    // Added missing home address fields
    homeStreet: "",
    homeBarangay: "",
    homeCity: "",
    homeProvince: "",
    homeRegion: "",
    religion: "",
    ethnicity: "",
  });

  // Auto-populate date of birth when component mounts
  useEffect(() => {
    if (dob) {
      setForm((prev) => ({
        ...prev,
        dob: dob,
      }));
    }
  }, [dob]);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const renderRadioGroup = (name, selected, sublabel) => (
    <View style={styles.fieldContainer}>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          onPress={() => handleChange(name, "Male")}
          style={styles.radioButton}
        >
          <View style={styles.circle}>
            {selected === "Male" && <View style={styles.checked} />}
          </View>
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleChange(name, "Female")}
          style={styles.radioButton}
        >
          <View style={styles.circle}>
            {selected === "Female" && <View style={styles.checked} />}
          </View>
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sublabel}>{sublabel}</Text>
    </View>
  );

  const renderYesNoRadioGroup = (name, selected, sublabel) => (
    <View style={styles.fieldContainer}>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          onPress={() => handleChange(name, "Yes")}
          style={styles.radioButton}
        >
          <View style={styles.circle}>
            {selected === "Yes" && <View style={styles.checked} />}
          </View>
          <Text style={styles.radioText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleChange(name, "No")}
          style={styles.radioButton}
        >
          <View style={styles.circle}>
            {selected === "No" && <View style={styles.checked} />}
          </View>
          <Text style={styles.radioText}>No</Text>
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

  const InputField = ({ value, onChangeText, placeholder, sublabel, editable = true }) => (
    <View style={styles.fieldContainer}>
      <TextInput
        style={[styles.input, !editable && { backgroundColor: "#f0f0f0" }]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
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
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={true}
          bounces={true}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true}
        >
          <Text style={styles.sectionTitle}>I. Identifying Information</Text>

          {/* Facility Location */}
          <Text style={styles.label}>Facility Location</Text>
          <View style={styles.column5}>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.facilityName}
                onChangeText={(text) => handleChange("facilityName", text)}
                placeholder="Enter facility name"
                sublabel="Name of Facility"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.barangay}
                onChangeText={(text) => handleChange("barangay", text)}
                placeholder="Enter barangay"
                sublabel="Barangay"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.city}
                onChangeText={(text) => handleChange("city", text)}
                placeholder="Enter city/municipality"
                sublabel="City / Municipality"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.province}
                onChangeText={(text) => handleChange("province", text)}
                placeholder="Enter province"
                sublabel="Province"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.region}
                onValueChange={(value) => handleChange("region", value)}
                options={regionOptions}
                sublabel="Region"
              />
            </View>
          </View>

          {/* Name */}
          <Text style={styles.label}>Name</Text>
          <View style={styles.column5}>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.lastName}
                onChangeText={(text) => handleChange("lastName", text)}
                placeholder="Enter last name"
                sublabel="Last Name"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.firstName}
                onChangeText={(text) => handleChange("firstName", text)}
                placeholder="Enter first name"
                sublabel="First Name"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.middleName}
                onChangeText={(text) => handleChange("middleName", text)}
                placeholder="Enter middle name"
                sublabel="Middle Name (Optional)"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.suffix}
                onValueChange={(value) => handleChange("suffix", value)}
                placeholder="Jr., Sr., ect."
                options={suffixOptions}
                sublabel="Ext. (Jr., Sr., ect.) (Optional)"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.nickname}
                onChangeText={(text) => handleChange("nickname", text)}
                placeholder="Enter nickname"
                sublabel="Nickname"
              />
            </View>
          </View>

          {/* Personal Information Row */}
          <View style={styles.column5}>
            {/* Sex */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Sex</Text>
              {renderRadioGroup("sex", form.sex)}
            </View>

            {/* Birth Order */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Birth Order</Text>
              <DropdownPicker
                selectedValue={form.birthOrder}
                onValueChange={(value) => handleChange("birthOrder", value)}
                options={birthOrderOptions}
              />
            </View>

            {/* Number of Siblings */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>No. of Siblings</Text>
              <DropdownPicker
                selectedValue={form.siblings}
                onValueChange={(value) => handleChange("siblings", value)}
                options={siblingsOptions}
              />
            </View>

            {/* Date of Birth */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Date of Birth</Text>
              <InputField
                value={form.dob}
                onChangeText={() => {}}
                editable={false}
              />
            </View>

            {/* Birth Registration */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Birth Registered?</Text>
              {renderYesNoRadioGroup("birthRegistered", form.birthRegistered)}
            </View>
          </View>

          {/* Place of Birth */}
          <Text style={styles.label}>Birthplace</Text>
          <View style={styles.column5}>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.birthStreet}
                onChangeText={(text) => handleChange("birthStreet", text)}
                placeholder="Enter street address"
                sublabel="No. & Street Address"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.birthBarangay}
                onChangeText={(text) => handleChange("birthBarangay", text)}
                placeholder="Enter barangay"
                sublabel="Barangay"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.birthCity}
                onChangeText={(text) => handleChange("birthCity", text)}
                placeholder="Enter city/municipality"
                sublabel="City / Municipality"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.birthProvince}
                onChangeText={(text) => handleChange("birthProvince", text)}
                placeholder="Enter province"
                sublabel="Province"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.birthRegion}
                onValueChange={(value) => handleChange("birthRegion", value)}
                options={regionOptions}
                sublabel="Region"
              />
            </View>
          </View>

          {/* Home Address */}
          <Text style={styles.label}>Home Address</Text>
          <View style={styles.column5}>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.homeStreet}
                onChangeText={(text) => handleChange("homeStreet", text)}
                placeholder="Enter street address"
                sublabel="No. & Street Address"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.homeBarangay}
                onChangeText={(text) => handleChange("homeBarangay", text)}
                placeholder="Enter barangay"
                sublabel="Barangay"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.homeCity}
                onChangeText={(text) => handleChange("homeCity", text)}
                placeholder="Enter city/municipality"
                sublabel="City / Municipality"
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                value={form.homeProvince}
                onChangeText={(text) => handleChange("homeProvince", text)}
                placeholder="Enter province"
                sublabel="Province"
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.homeRegion}
                onValueChange={(value) => handleChange("homeRegion", value)}
                options={regionOptions}
                sublabel="Region"
              />
            </View>
          </View>

          {/* Religion and Ethnicity */}
          <View style={styles.column2}>
            <View style={styles.inputWrapper2}>
              <Text style={styles.label}>Religion</Text>
              <DropdownPicker
                selectedValue={form.religion}
                onValueChange={(value) => handleChange("religion", value)}
                options={religionOptions}
              />
            </View>
            <View style={styles.inputWrapper2}>
              <Text style={styles.label}>Ethnicity</Text>
              <DropdownPicker
                selectedValue={form.ethnicity}
                onValueChange={(value) => handleChange("ethnicity", value)}
                options={ethnicityOptions}
              />
            </View>
          </View>
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
  container: {
    padding: 16,
    paddingBottom: 50,
    minHeight: 800, // Ensure minimum height for scrolling
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
    marginVertical: 8,
  },
  column5: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  column2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  inputWrapper: {
    width: "19%",
    marginBottom: 10,
  },
  inputWrapper2: {
    width: "19%",
    marginBottom: 10,
  },
  fieldContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
    minHeight: 40,
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
    minHeight: 40,
    justifyContent: "center",
  },
  picker: {
    height: 40,
  },
  radioGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    backgroundColor: "#fff",
    minHeight: 40,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
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
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  sublabel: {
    fontSize: 11,
    color: "#000",
    marginTop: 4,
    textAlign: "left",
    fontWeight: "450",
  },
});