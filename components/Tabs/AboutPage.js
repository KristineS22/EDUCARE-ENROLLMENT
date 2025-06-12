import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function AboutPage() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>About Our Preschool</Text>
        
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>🏫 Our Mission</Text>
          <Text style={styles.cardText}>
            To provide quality early childhood education that combines daycare services 
            with Montessori-type education, fostering creativity, independence, and a 
            love for learning in every child.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>🎯 Our Vision</Text>
          <Text style={styles.cardText}>
            To be the leading barangay preschool that prepares children for their 
            educational journey while supporting working families in our community.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>👩‍🏫 Our Approach</Text>
          <Text style={styles.cardText}>
            We use a Montessori-inspired approach that encourages:
            {'\n'}• Self-directed learning
            {'\n'}• Hands-on activities
            {'\n'}• Mixed-age classrooms
            {'\n'}• Individual progress tracking
            {'\n'}• Child-centered environment
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>🏆 Why Choose Us</Text>
          <Text style={styles.cardText}>
            • Qualified and caring teachers
            {'\n'}• Safe and nurturing environment
            {'\n'}• Affordable community-based education
            {'\n'}• Convenient location in every barangay
            {'\n'}• Focus on holistic child development
            {'\n'}• Strong parent-school partnership
          </Text>
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
  infoCard: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00188D",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 22,
  },
});