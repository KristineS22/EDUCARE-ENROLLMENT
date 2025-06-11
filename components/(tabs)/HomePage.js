import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Fixed import

export default function HomePage() {
  const navigation = useNavigation(); // Fixed variable name

  const handleCancel = () => {
    navigation.goBack(); // Fixed method name
  };
  <View style={styles.actionContainer}>
    <TouchableOpacity
      style={styles.cancelButton}
      onPress={currentStep === 0 ? handleCancel : handleBack}
    >
      <Text style={styles.cancelButtonText}>
        {currentStep === 0 ? "CANCEL" : "BACK"}
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[
        styles.actionButton,
        currentStep === 0 && !isAgreed && styles.disabledButton,
      ]}
      onPress={handleNext}
      disabled={currentStep === 0 && !isAgreed}
    >
      <Text
        style={[
          styles.actionButtonText,
          currentStep === 0 && !isAgreed && styles.disabledButtonText,
        ]}
      >
        {currentStep === steps.length - 1 ? "FINISH" : "I AGREE"}
      </Text>
    </TouchableOpacity>
  </View>;
}
