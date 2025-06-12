import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomePage from "./HomePage";
import AdmissionPage from "./AdmissionPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const { width, height } = Dimensions.get("window");

export default function TabBasedHome() {
  const [activeTab, setActiveTab] = useState("Home");
  const navigation = useNavigation();

  const tabs = [
    { name: "Home", label: "Home" },
    { name: "Admission", label: "Admission" },
    { name: "About", label: "About" },
    { name: "Contact", label: "Contact" },
  ];

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const handleNavigateToEnrollment = () => {
    // Navigate to the enrollment flow
    navigation.navigate("DatePicker");
  };

  const handleNavigateToContact = () => {
    setActiveTab("Contact");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <HomePage 
            onNavigate={handleTabPress}
            onNavigateToEnrollment={handleNavigateToEnrollment}
            onNavigateToContact={handleNavigateToContact}
          />
        );
      case "Admission":
        return (
          <AdmissionPage 
            onNavigateToEnrollment={handleNavigateToEnrollment}
          />
        );
      case "About":
        return <AboutPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return (
          <HomePage 
            onNavigate={handleTabPress}
            onNavigateToEnrollment={handleNavigateToEnrollment}
            onNavigateToContact={handleNavigateToContact}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Navigation */}
      <View style={styles.header}>
        <Text style={styles.logo}>Barangay Preschool</Text>
        <View style={styles.navContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.name}
              style={[
                styles.navTab,
                activeTab === tab.name && styles.activeNavTab,
              ]}
              onPress={() => handleTabPress(tab.name)}
            >
              <Text
                style={[
                  styles.navTabText,
                  activeTab === tab.name && styles.activeNavTabText,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Content */}
      {renderContent()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00188D",
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  navTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
  },
  activeNavTab: {
    backgroundColor: "rgba(88, 86, 86, 0.2)",
  },
  navTabText: {
    // color: "rgba(255, 255, 255, 0.8)",
    color: "#000000",
    fontSize: 14,
    fontWeight: "500",
  },
  activeNavTabText: {
    color: "000000",
    fontWeight: "bold",
  },
});