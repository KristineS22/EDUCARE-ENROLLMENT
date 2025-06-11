import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

export default function HomePage() {
  const navigation = useNavigation();

  const handleEnrollHere = () => {
    navigation.navigate("DatePicker");
  };

  const handleLoginToPortal = () => {
    // Navigate to login screen when implemented
    console.log("Navigate to login portal");
  };

  const handleInquireNow = () => {
    // Navigate to inquiry screen when implemented
    console.log("Navigate to inquiry screen");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroOverlay}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>
              Services for kids combines daycare services with Montessori-type education. There's at least one in your barangay.
            </Text>
          </View>
        </View>
      </View>

      {/* Service Cards Section */}
      <View style={styles.servicesSection}>
        <View style={styles.servicesContainer}>
          {/* Enrollment Card */}
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={handleEnrollHere}
            activeOpacity={0.8}
          >
            <View style={styles.cardIcon}>
              <View style={styles.enrollmentIcon}>
                <Text style={styles.iconText}>📝</Text>
              </View>
            </View>
            <Text style={styles.cardTitle}>Preschoolers, are you ready for school?</Text>
            <TouchableOpacity 
              style={styles.cardButton}
              onPress={handleEnrollHere}
            >
              <Text style={styles.cardButtonText}>Enroll here</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Login Portal Card */}
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={handleLoginToPortal}
            activeOpacity={0.8}
          >
            <View style={styles.cardIcon}>
              <View style={styles.loginIcon}>
                <Text style={styles.iconText}>💻</Text>
              </View>
            </View>
            <Text style={styles.cardTitle}>Login portal to see updates</Text>
            <TouchableOpacity 
              style={styles.cardButton}
              onPress={handleLoginToPortal}
            >
              <Text style={styles.cardButtonText}>Login to portal</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          {/* Inquiry Card */}
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={handleInquireNow}
            activeOpacity={0.8}
          >
            <View style={styles.cardIcon}>
              <View style={styles.inquiryIcon}>
                <Text style={styles.iconText}>ℹ️</Text>
              </View>
            </View>
            <Text style={styles.cardTitle}>Request for more information</Text>
            <TouchableOpacity 
              style={styles.cardButton}
              onPress={handleInquireNow}
            >
              <Text style={styles.cardButtonText}>Inquire now</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heroSection: {
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00188D', // Added solid background color
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 24, 141, 0.3)', // Lighter overlay since we have solid background
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
    maxWidth: '90%',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  servicesSection: {
    backgroundColor: '#ffffff',
    marginTop: -50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
    paddingBottom: 40,
    minHeight: height * 0.5,
  },
  servicesContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    marginBottom: 15,
  },
  enrollmentIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inquiryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  cardButton: {
    backgroundColor: '#00188D',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    minWidth: 140,
  },
  cardButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});