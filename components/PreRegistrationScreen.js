import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";

// Import step components (you'll create these files)
import AgreementStep from "./AgreementStep";
import IdentifyingInformationStep from "./IdentifyingInformationStep";
import FamilyInformationStep from "./FamilyInformationStep";
// import DevelopmentInformationStep from "./DevelopmentInformationStep";
// import BillingStep from "./BillingStep";
// import ClassScheduleStep from "./ClassScheduleStep";
// import FinishedStep from "./FinishedStep";

export default function PreRegistrationScreen({ route, navigation }) {
  const { dob, age } = route.params || {};
  const [currentStep, setCurrentStep] = useState(0);
  const [isAgreed, setIsAgreed] = useState(false);

  // Editable configuration
  const config = {
    appName: "educare+",
    logoUrl: require("../assets/bluebgtransparent.png"),
  };

  const steps = [
    { id: 0, title: "Agreement" },
    { id: 1, title: "Identifying Information" },
    { id: 2, title: "Family Information" },
    { id: 3, title: "Development Information" },
    { id: 4, title: "Billing" },
    { id: 5, title: "Class Schedule" },
    { id: 6, title: "Finished" },
  ];

  const StepIndicator = ({ step, isActive, isCompleted }) => (
    <View style={styles.stepContainer}>
      <View style={styles.stepRow}>
        <View
          style={[
            styles.stepCircle,
            isActive && styles.activeStepCircle,
            isCompleted && styles.completedStepCircle,
          ]}
        >
          {(isActive || isCompleted) && (
            <Text style={styles.stepCheckmark}>✓</Text>
          )}
        </View>
        <Text style={[styles.stepTitle, isActive && styles.activeStepTitle]}>
          {step.title}
        </Text>
      </View>
      {step.id < steps.length - 1 && (
        <View
          style={[
            styles.stepConnector,
            isCompleted && styles.completedConnector,
          ]}
        />
      )}
    </View>
  );

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    // Navigate back to previous screen or show confirmation dialog
    if (navigation) {
      navigation.goBack();
    } else {
      console.log("Cancel pressed - navigate back");
    }
  };

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <AgreementStep 
            isAgreed={isAgreed} 
            setIsAgreed={setIsAgreed} 
          />
        );
      case 1:
        return <IdentifyingInformationStep dob={dob} age={age} />;
      case 2:
        return <FamilyInformationStep />;
      case 3:
        return <DevelopmentInformationStep />;
      case 4:
        return <BillingStep />;
      case 5:
        return <ClassScheduleStep />;
      case 6:
        return <FinishedStep />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />

      <View style={styles.content}>
        {/* Left Side - Navigation with Header */}
        <View style={styles.leftSide}>
          {/* Header inside left side */}
          <View style={styles.header}>
            <Image
              source={config.logoUrl}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.appName}>{config.appName}</Text>
          </View>

          {/* Vertical Stepper Navigation */}
          <View style={styles.stepperContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {steps.map((step) => (
                <StepIndicator
                  key={step.id}
                  step={step}
                  isActive={step.id === currentStep}
                  isCompleted={step.id < currentStep}
                />
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Main Content Area */}
        <View style={styles.mainContent}>
          <ScrollView style={styles.formContainer}>
            {renderStepContent()}
          </ScrollView>

          {/* Action Buttons */}
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
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  leftSide: {
    width: 280,
    backgroundColor: "#ffffff",
    borderRightWidth: 1,
    borderRightColor: "#e9ecef",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 0,
  },
  appName: {
    fontFamily: "LeagueSpartan-Regular",
    fontSize: 40,
    fontWeight: "bold",
    color: "#00188D",
    marginBottom: 0,
    elevation: 4,
    padding: 16,
  },
  stepperContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  stepContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    position: "relative",
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#e9ecef",
    marginRight: 12,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  activeStepCircle: {
    backgroundColor: "#00188D",
  },
  completedStepCircle: {
    backgroundColor: "#00188D",
  },
  stepCheckmark: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  stepTitle: {
    fontSize: 16,
    color: "#6c757d",
    flex: 1,
  },
  activeStepTitle: {
    color: "#000000",
    fontWeight: "600",
  },
  stepConnector: {
    position: "absolute",
    left: 28, // Moved closer to circle (was 30)
    top: 38, // Started closer to circle (was 44)
    marginTop: 23 ,
    width: 2.5, // Made thicker (was 2)
    height: 40, // Made longer for better visibility (was 40)
    backgroundColor: "#d1d5db", // Made more visible (was #e9ecef)
    padding: "0px 0px 0px 0px",
  },
  completedConnector: {
    backgroundColor: "#00188D", 
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  formContainer: {
    flex: 1,
    padding: 24,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: "#e9ecef",
  },
  cancelButton: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#6c757d",
  },
  cancelButtonText: {
    color: "#6c757d", 
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  actionButton: {
    backgroundColor: "#00188D",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#e9ecef",
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  disabledButtonText: {
    color: "#6c757d",
  },
});