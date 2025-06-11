import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function AgreementStep({ isAgreed, setIsAgreed }) {
  return (
    <View style={styles.agreementContainer}>
      <Text style={styles.formTitle}>
        Agreement on Collecting Child and Family Information for Enrollment
      </Text>

      <Text style={styles.agreementText}>
        The enrolling teacher is collecting the child's information, along with complete family details, for preschool enrollment at [school name]. This information will be used solely for enrollment, student records, and administrative purposes in accordance with the school's policies.
      </Text>

      <Text style={styles.agreementText}>
        By providing this information, you consent to its collection and use for the following applicable data protection guidelines:
      </Text>

      <Text style={styles.agreementText}>
        The collection and processing of this information are conducted with the highest standards of confidentiality and security. The collected data will not be used for purposes beyond those stated unless required by law and necessary to protect the information of the enrollee.
      </Text>

      <Text style={styles.consentTitle}>Consent:</Text>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setIsAgreed(!isAgreed)}
      >
        <View style={[styles.checkbox, isAgreed && styles.checkedBox]}>
          {isAgreed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.checkboxText}>
          I confirm, as the enrolling teacher, that I am collecting the child's and family's information for enrollment with the parent's consent.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  agreementContainer: {
    flex: 1,
  },
  formTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 30,
    lineHeight: 28,
  },
  agreementText: {
    fontSize: 25,
    color: "#000000",
    lineHeight: 30,
    marginBottom: 30,
    textAlign: "justify",
  },
  consentTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: "#000000",
    marginTop: 8,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 3,
    marginRight: 12,
    marginTop: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedBox: {
    backgroundColor: "#00188D",
    borderColor: "#00188D",
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  checkboxText: {
    flex: 1,
    fontSize: 30,
    color: "#495057",
    lineHeight: 36,
  },
});