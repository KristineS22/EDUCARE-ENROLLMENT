import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native"; // Fixed imports

export default function AgeCheckScreen() {
  const navigation = useNavigation(); // Fixed variable name
  const route = useRoute(); // Use route to get params
  const { dob, age } = route.params; // Get params from route

  const birthday = new Date(dob); // Assuming dob is a date string

  const handleCancel = () => {
    navigation.goBack(); // Fixed method name
  };

  const handleContinue = () => {
    navigation.navigate("PreRegistration", {
      dob,
      age,
      birthday: birthday.toISOString(),
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* Eligibility message */}
        <View style={styles.eligibilityContainer}>
          <Text style={styles.eligibilityText}>
            Your child is {age} year{age !== 1 ? "s" : ""} old and is eligible
            for enrollment.
          </Text>
        </View>

        {/* Instructional text */}
        <Text style={styles.instructionalText}>
          Would you like to continue with the pre-registration process? Click
          Continue to proceed.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    borderRadius: 30,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: 30,
    width: "90%",
    maxWidth: 400,
    elevation: 5,
  },
  eligibilityContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#e8ecf9",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#5472d3",
  },
  eligibilityText: {
    fontSize: 18,
    color: "#00188D",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "500",
  },
  instructionalText: {
    fontSize: 14,
    color: "#000000",
    textAlign: "left",
    lineHeight: 20,
    marginBottom: 25,
    fontWeight: "400",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "gray",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 5,
  },
  continueButton: {
    flex: 1,
    backgroundColor: "#00188D",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 5,
  },
});