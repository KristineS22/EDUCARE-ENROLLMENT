import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Admission({ onNavigateToEnrollment }) {
  const handleStartEnrollment = () => {
    if (onNavigateToEnrollment) {
      onNavigateToEnrollment();
    } else {
      console.log("Navigate to enrollment");
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Admission Requirements</Text>
        
        <View style={styles.requirementCard}>
          <Text style={styles.requirementTitle}>📋 Required Documents</Text>
          <Text style={styles.requirementText}>
            • Birth Certificate (Original & Photocopy){'\n'}
            • Barangay Certificate{'\n'}
            • Medical Certificate{'\n'}
            • 2x2 ID Pictures (4 pieces){'\n'}
            • Previous School Records (if applicable)
          </Text>
        </View>

        <View style={styles.requirementCard}>
          <Text style={styles.requirementTitle}>👶 Age Requirements</Text>
          <Text style={styles.requirementText}>
            • Nursery: 3-4 years old{'\n'}
            • Kindergarten: 4-5 years old{'\n'}
            • Preparatory: 5-6 years old
          </Text>
        </View>

        <View style={styles.requirementCard}>
          <Text style={styles.requirementTitle}>💰 Tuition Fees</Text>
          <Text style={styles.requirementText}>
            • Registration Fee: ₱2,500{'\n'}
            • Monthly Tuition: ₱3,500{'\n'}
            • Materials Fee: ₱1,500{'\n'}
            • Activity Fee: ₱1,000
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.enrollButton}
          onPress={handleStartEnrollment}
        >
          <Text style={styles.enrollButtonText}>Start Enrollment Process</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentSection: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    minHeight: height,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00188D",
    textAlign: "center",
    marginBottom: 30,
  },
  requirementCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  requirementTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00188D",
    marginBottom: 10,
  },
  requirementText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
  enrollButton: {
    backgroundColor: "#00188D",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  enrollButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});