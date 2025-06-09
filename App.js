import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DateOfBirthPicker from "./components/DateOfBirthPicker";
import AgeCheckScreen from "./components/AgeCheckScreen";
import PreRegistrationScreen from "./components/PreRegistrationScreen";
import AgreementStep from "./components/AgreementStep";
import IdentifyingInformationStep from "./components/IdentifyingInformationStep";
import FamilyInformationStep from "./components/FamilyInformationStep";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DatePicker">
        {/* Then go to DateOfBirthPicker */}
        <Stack.Screen
          name="DatePicker"
          component={DateOfBirthPicker}
          options={{ headerShown: false }}
        />
        {/* Start with AgeCheckScreen */}
        <Stack.Screen
          name="AgeCheckScreen"
          component={AgeCheckScreen}
          options={{ headerShown: false }}
        />
        {/* Finally PreRegistration */}
        <Stack.Screen
          name="PreRegistration"
          component={PreRegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AgreementStep"
          component={AgreementStep}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IdentifyingInformationStep"
          component={IdentifyingInformationStep}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FamilyInformationStep"
          component={FamilyInformationStep}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Platform,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Modal,
//   Alert,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function App() {
//   const [birthday, setBirthday] = useState(new Date());
//   const [dob, setDob] = useState('');
//   const [age, setAge] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [errors, setErrors] = useState({ birthday: '' });

//   const handleDateChange = (event, selectedDate) => {
//     if (Platform.OS === 'android') setShowDatePicker(false);
//     if (event?.type === 'dismissed') return;

//     if (selectedDate) {
//       const today = new Date();
//       let calculatedAge = today.getFullYear() - selectedDate.getFullYear();
//       const monthDiff = today.getMonth() - selectedDate.getMonth();
//       if (
//         monthDiff < 0 ||
//         (monthDiff === 0 && today.getDate() < selectedDate.getDate())
//       ) {
//         calculatedAge--;
//       }

//       setBirthday(selectedDate);
//       setDob(selectedDate.toDateString());
//       setAge(calculatedAge >= 0 ? calculatedAge : 0);

//       // Validation
//       if (calculatedAge > 5) {
//         setErrors({ birthday: 'The child must not be older than 5 years old to enroll.' });
//       } else if (calculatedAge < 3 || calculatedAge > 4) {
//         setErrors({ birthday: 'The child must be between 3 to 4 years old to enroll.' });
//       } else {
//         setErrors({ birthday: '' });
//       }

//       if (Platform.OS === 'ios') setShowDatePicker(false);
//     }
//   };

//   const handleCancel = () => {
//     setDob('');
//     setAge(null);
//     setBirthday(new Date());
//     setErrors({ birthday: '' });
//     setShowDatePicker(false);
//   };

//   const handleSubmit = () => {
//     if (!dob || age === null) {
//       Alert.alert('Error', 'Please select a valid date of birth.');
//       return;
//     }

//     if (errors.birthday) {
//       Alert.alert('Error', errors.birthday);
//       return;
//     }

//     Alert.alert(
//       'Success',
//       `The child is ${age} year${age !== 1 ? 's' : ''} old and is eligible to enroll. Do you want to proceed to registration?`,
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Proceed',
//           onPress: () => {
//             console.log('Navigating with:', { dob, age });
//           },
//         },
//       ]
//     );
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.screen}>
//         <View style={styles.container}>
//           <Text style={styles.label}>Enter Child Date of Birth:</Text>

//           {/* Show input for Web */}
//           {Platform.OS === 'web' ? (
//             <input
//               type="date"
//               value={birthday.toISOString().split('T')[0]}
//               onChange={(e) =>
//                 handleDateChange({ type: 'set' }, new Date(e.target.value))
//               }
//               style={{
//                 padding: 12,
//                 fontSize: 16,
//                 borderWidth: 2,
//                 borderColor: errors.birthday ? 'black' : '#d9d9d9',
//                 borderRadius: 8,
//                 width: '92%',
//               }}
//             />
//           ) : (
//             <TouchableOpacity
//               style={[
//                 styles.inputWrapper,
//                 errors.birthday ? { borderColor: 'black' } : {},
//               ]}
//               onPress={() => setShowDatePicker(true)}
//             >
//               <Text style={styles.dateText}>{dob ? dob : 'Select Date'}</Text>
//             </TouchableOpacity>
//           )}

//           {errors.birthday ? (
//             <Text style={styles.errorText}>{errors.birthday}</Text>
//           ) : null}

//           {/* Modal for Native platforms */}
//           {Platform.OS !== 'web' && showDatePicker && (
//             <Modal
//               transparent
//               animationType="fade"
//               visible={showDatePicker}
//               onRequestClose={() => setShowDatePicker(false)}
//             >
//               <TouchableOpacity
//                 style={styles.modalOverlay}
//                 activeOpacity={1}
//                 onPressOut={() => setShowDatePicker(false)}
//               >
//                 <View style={styles.pickerContainer}>
//                   <DateTimePicker
//                     value={birthday}
//                     mode="date"
//                     display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
//                     maximumDate={new Date()}
//                     onChange={handleDateChange}
//                   />
//                 </View>
//               </TouchableOpacity>
//             </Modal>
//           )}

//           <View style={styles.buttonRow}>
//             <TouchableOpacity
//               style={styles.cancelbutton} onPress={handleCancel}>
//               <Text style={styles.buttonText}>Cancel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.submitbutton} onPress={handleSubmit}>
//               <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   container: {
//     borderRadius: 30,
//     backgroundColor: '#ffffff',
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     padding: 30,
//     width: '90%',
//     maxWidth: 400,
//     elevation: 5,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 10,
//     color: '#333',
//   },
//   dateText: {
//     fontSize: 26,
//     color: '#333',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 8,
//     fontSize: 14,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     padding: 20,
//   },
//   pickerContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     alignSelf: 'center',
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 25,
//     gap: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   cancelbutton: {
//   flex: 1,
//   backgroundColor: 'gray',
//   paddingVertical: 12,
//   paddingHorizontal: 20,
//   borderRadius: 8,
//   marginRight: 5,
// },
// submitbutton: {
//   flex: 1,
//   backgroundColor: '#00188D',
//   paddingVertical: 12,
//   paddingHorizontal: 20,
//   borderRadius: 8,
//   marginLeft: 5,
// },
// });
