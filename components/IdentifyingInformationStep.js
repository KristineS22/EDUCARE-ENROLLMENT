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

  const renderRadioGroup = (name, selected) => (
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
  );

  const renderYesNoRadioGroup = (name, selected) => (
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
  );

  const DropdownPicker = ({ selectedValue, onValueChange, options }) => (
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
              <TextInput
                style={styles.input}
                placeholder="Name of Facility"
                value={form.facilityName}
                onChangeText={(text) => handleChange("facilityName", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Barangay"
                value={form.barangay}
                onChangeText={(text) => handleChange("barangay", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="City / Municipality"
                value={form.city}
                onChangeText={(text) => handleChange("city", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Province"
                value={form.province}
                onChangeText={(text) => handleChange("province", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.region}
                onValueChange={(value) => handleChange("region", value)}
                options={regionOptions}
              />
            </View>
          </View>

          {/* Name */}
          <Text style={styles.label}>Name</Text>
          <View style={styles.column5}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={form.lastName}
                onChangeText={(text) => handleChange("lastName", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={form.firstName}
                onChangeText={(text) => handleChange("firstName", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Middle Name"
                value={form.middleName}
                onChangeText={(text) => handleChange("middleName", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.suffix}
                onValueChange={(value) => handleChange("suffix", value)}
                options={suffixOptions}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Nickname"
                value={form.nickname}
                onChangeText={(text) => handleChange("nickname", text)}
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
              <Text style={styles.label}>Number of Siblings</Text>
              <DropdownPicker
                selectedValue={form.siblings}
                onValueChange={(value) => handleChange("siblings", value)}
                options={siblingsOptions}
              />
            </View>

            {/* Date of Birth */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Date of Birth</Text>
              <TextInput
                style={[styles.input, { backgroundColor: "#f0f0f0" }]}
                placeholder="Date of Birth"
                value={form.dob}
                editable={false}
              />
            </View>

            {/* Birth Registration */}
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Birth Registration</Text>
              {renderYesNoRadioGroup("birthRegistered", form.birthRegistered)}
            </View>
          </View>

          {/* Place of Birth */}
          <Text style={styles.label}>Place of Birth</Text>
          <View style={styles.column5}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Street"
                value={form.birthStreet}
                onChangeText={(text) => handleChange("birthStreet", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Barangay"
                value={form.birthBarangay}
                onChangeText={(text) => handleChange("birthBarangay", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="City / Municipality"
                value={form.birthCity}
                onChangeText={(text) => handleChange("birthCity", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Province"
                value={form.birthProvince}
                onChangeText={(text) => handleChange("birthProvince", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.birthRegion}
                onValueChange={(value) => handleChange("birthRegion", value)}
                options={regionOptions}
              />
            </View>
          </View>

          {/* Home Address */}
          <Text style={styles.label}>Home Address</Text>
          <View style={styles.column5}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Street"
                value={form.homeStreet}
                onChangeText={(text) => handleChange("homeStreet", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Barangay"
                value={form.homeBarangay}
                onChangeText={(text) => handleChange("homeBarangay", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="City / Municipality"
                value={form.homeCity}
                onChangeText={(text) => handleChange("homeCity", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Province"
                value={form.homeProvince}
                onChangeText={(text) => handleChange("homeProvince", text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <DropdownPicker
                selectedValue={form.homeRegion}
                onValueChange={(value) => handleChange("homeRegion", value)}
                options={regionOptions}
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
});