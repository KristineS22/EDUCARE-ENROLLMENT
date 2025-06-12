import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }
    
    Alert.alert(
      'Message Sent!', 
      'Thank you for your inquiry. We will get back to you soon.',
      [{ text: 'OK', onPress: () => {
        setFormData({ name: '', email: '', phone: '', message: '' });
      }}]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        
        <View style={styles.contactCard}>
          <Text style={styles.cardTitle}>📍 Visit Us</Text>
          <Text style={styles.cardText}>
            Available in every barangay
            {'\n'}Check with your local barangay office for the nearest location
          </Text>
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.cardTitle}>📞 Call Us</Text>
          <Text style={styles.cardText}>
            Phone: (02) 123-4567
            {'\n'}Mobile: 0917-123-4567
            {'\n'}Office Hours: 7:00 AM - 5:00 PM (Monday to Friday)
          </Text>
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.cardTitle}>✉️ Email Us</Text>
          <Text style={styles.cardText}>
            info@barangaypreschool.ph
            {'\n'}admissions@barangaypreschool.ph
          </Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Send us a Message</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name *</Text>
            <TextInput
              style={styles.textInput}
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
              placeholder="Enter your full name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address *</Text>
            <TextInput
              style={styles.textInput}
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              value={formData.phone}
              onChangeText={(value) => handleInputChange('phone', value)}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Message *</Text>
            <TextInput
              style={[styles.textInput, styles.messageInput]}
              value={formData.message}
              onChangeText={(value) => handleInputChange('message', value)}
              placeholder="Enter your message or inquiry"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  contentSection: {
    padding: 20,
    minHeight: height,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00188D",
    textAlign: "center",
    marginBottom: 30,
  },
  contactCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00188D",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  formCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00188D",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  messageInput: {
    height: 100,
    paddingTop: 10,
  },
  submitButton: {
    backgroundColor: "#00188D",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});