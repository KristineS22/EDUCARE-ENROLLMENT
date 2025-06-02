import React, { useState } from 'react';
import {
  View,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = ({ children, onPress, variant = 'primary', disabled = false, style = {} }) => {
  const baseStyle = {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    minHeight: 45,
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#00178d',
      borderColor: '#00178d',
    },
    secondary: {
      backgroundColor: '#d9d9d9',
      borderColor: '#d9d9d9',
    },
  };

  const textColor = variant === 'primary' ? '#fff' : '#333';

  return (
    <TouchableOpacity
      onPress={!disabled ? onPress : null}
      style={[baseStyle, variantStyles[variant], style, disabled && { opacity: 0.5 }]}
      activeOpacity={0.7}
    >
      <Text style={{ color: textColor, fontWeight: '600', fontSize: 16 }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default function Main({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }

    if (event?.type === 'dismissed' || !selectedDate) {
      setShowPicker(false);
      return;
    }

    if (selectedDate) {
      setDate(selectedDate);

      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      setDob(formattedDate);

      const today = new Date();
      let calculatedAge = today.getFullYear() - selectedDate.getFullYear();
      const monthDiff = today.getMonth() - selectedDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < selectedDate.getDate())) {
        calculatedAge--;
      }

      setAge(calculatedAge >= 0 ? calculatedAge : 0);

      if (Platform.OS === 'ios') {
        setShowPicker(false);
      }
    }
  };

  const handleCancel = () => {
    setDob('');
    setAge(null);
    setDate(new Date());
    setShowPicker(false);
  };

  const handleSubmit = () => {
    if (!dob || age === null) {
      Alert.alert('Error', 'Please select a valid date of birth.');
      return;
    }

    if (age >= 3 && age <= 4) {
      Alert.alert(
        'Success',
        `The child is ${age} year${age !== 1 ? 's' : ''} old and is eligible to enroll. Do you want to proceed to registration?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Proceed',
            onPress: () => {
              navigation.navigate('Registration', { dob, age });
            },
          },
        ]
      );
    } else {
      Alert.alert('Error', 'The child must be between 3 and 4 years old to enroll.');
    }
  };

  const showDatePicker = () => {
    Keyboard.dismiss();
    setShowPicker(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      setShowPicker(false);
    }}>
      <View style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.label}>Enter Child Date of Birth:</Text>

          <TouchableOpacity onPress={showDatePicker} activeOpacity={0.7} style={styles.inputTouchable}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#999"
                value={dob}
                editable={false}
              />
              <Ionicons name="calendar-outline" size={20} color="#555" style={styles.icon} />
            </View>
          </TouchableOpacity>

          {age !== null && (
            <Text style={styles.ageText}>Age: {age} year{age !== 1 ? 's' : ''}</Text>
          )}

          <View style={styles.buttonContainer}>
            <Button
              variant="secondary"
              onPress={handleCancel}
              style={styles.cancelButton}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onPress={handleSubmit}
              style={styles.continueButton}
            >
              Continue
            </Button>
          </View>

          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
              maximumDate={new Date()}
              minimumDate={new Date(1900, 0, 1)}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '90%',
    maxWidth: 400,
    padding: 30,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  inputTouchable: {
    width: '100%',
    marginBottom: 10,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#d9d9d9',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 15,
    paddingRight: 40,
    fontSize: 16,
    height: '100%',
    color: '#333',
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  ageText: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
    color: '#666',
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    width: '45%',
  },
  continueButton: {
    width: '45%',
  },
});

