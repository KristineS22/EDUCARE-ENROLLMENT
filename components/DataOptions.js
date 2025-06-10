// Generate number options helper function
const generateNumberOptions = (start, end, placeholder = null) => {
  const options = [];
  if (placeholder) {
    options.push({ label: placeholder, value: "" });
  }
  for (let i = start; i <= end; i++) {
    options.push({ label: i.toString(), value: i.toString() });
  }
  return options;
};

// Suffix options
export const suffixOptions = [
  { label: "Select", value: "" },
  { label: "Jr.", value: "Jr." },
  { label: "Sr.", value: "Sr." },
  { label: "II", value: "II" },
  { label: "III", value: "III" },
  { label: "IV", value: "IV" },
  { label: "V", value: "V" },
  { label: "VI", value: "VI" },
  { label: "VII", value: "VII" },
  { label: "VIII", value: "VIII" },
  { label: "IX", value: "IX" },
  { label: "X", value: "X" },
];

// Birth order options (1-30)
export const birthOrderOptions = generateNumberOptions(1, 30, "Select Birth Order");

// Siblings options (0-30)
export const siblingsOptions = generateNumberOptions(0, 30, "Select Number of Siblings");

// Civil Status options
export const civilStatusOptions = [
  { label: "Select Civil Status", value: "" },
  { label: "Single", value: "Single" },
  { label: "Married", value: "Married" },
  { label: "Widowed", value: "Widowed" },
  { label: "Separated", value: "Separated" },
  { label: "Divorced", value: "Divorced" },
  { label: "Live-in", value: "Live-in" },
];

// Relationship options
export const relationshipOptions = [
  { label: "Select Relationship", value: "" },
  { label: "Mother", value: "Mother" },
  { label: "Father", value: "Father" },
  { label: "Guardian", value: "Guardian" },
  { label: "Grandmother", value: "Grandmother" },
  { label: "Grandfather", value: "Grandfather" },
  { label: "Aunt", value: "Aunt" },
  { label: "Uncle", value: "Uncle" },
  { label: "Sister", value: "Sister" },
  { label: "Brother", value: "Brother" },
  { label: "Cousin", value: "Cousin" },
  { label: "Friend", value: "Friend" },
  { label: "Neighbor", value: "Neighbor" },
  { label: "Other", value: "Other" },
];

// Education level options
export const educationLevelOptions = [
  { label: "Select Education Level", value: "" },
  { label: "No Formal Education", value: "No Formal Education" },
  { label: "Elementary Level", value: "Elementary Level" },
  { label: "Elementary Graduate", value: "Elementary Graduate" },
  { label: "High School Level", value: "High School Level" },
  { label: "High School Graduate", value: "High School Graduate" },
  { label: "Senior High School Level", value: "Senior High School Level" },
  { label: "Senior High School Graduate", value: "Senior High School Graduate" },
  { label: "College Level", value: "College Level" },
  { label: "College Graduate", value: "College Graduate" },
  { label: "Vocational/Technical", value: "Vocational/Technical" },
  { label: "Master's Degree", value: "Master's Degree" },
  { label: "Doctoral Degree", value: "Doctoral Degree" },
];

// Monthly income options
export const monthlyIncomeOptions = [
  { label: "Select Income Range", value: "" },
  { label: "Below ₱5,000", value: "Below ₱5,000" },
  { label: "₱5,000 - ₱9,999", value: "₱5,000 - ₱9,999" },
  { label: "₱10,000 - ₱14,999", value: "₱10,000 - ₱14,999" },
  { label: "₱15,000 - ₱19,999", value: "₱15,000 - ₱19,999" },
  { label: "₱20,000 - ₱24,999", value: "₱20,000 - ₱24,999" },
  { label: "₱25,000 - ₱29,999", value: "₱25,000 - ₱29,999" },
  { label: "₱30,000 - ₱39,999", value: "₱30,000 - ₱39,999" },
  { label: "₱40,000 - ₱49,999", value: "₱40,000 - ₱49,999" },
  { label: "₱50,000 and above", value: "₱50,000 and above" },
  { label: "No Income", value: "No Income" },
  { label: "Prefer not to say", value: "Prefer not to say" },
];

// Religion options
export const religionOptions = [
  { label: "Select Religion", value: "" },
  { label: "Roman Catholic", value: "Roman Catholic" },
  { label: "Islam", value: "Islam" },
  { label: "Iglesia ni Cristo", value: "Iglesia ni Cristo" },
  { label: "Protestant", value: "Protestant" },
  { label: "Born Again Christian", value: "Born Again Christian" },
  { label: "Seventh Day Adventist", value: "Seventh Day Adventist" },
  { label: "Jehovah's Witness", value: "Jehovah's Witness" },
  { label: "Buddhism", value: "Buddhism" },
  { label: "Other Christian", value: "Other Christian" },
  { label: "Other", value: "Other" },
  { label: "No Religion", value: "No Religion" },
];

// Region options (Philippines)
export const regionOptions = [
  { label: "Select Region", value: "" },
  { label: "NCR - National Capital Region", value: "NCR" },
  { label: "CAR - Cordillera Administrative Region", value: "CAR" },
  { label: "Region I - Ilocos Region", value: "Region I" },
  { label: "Region II - Cagayan Valley", value: "Region II" },
  { label: "Region III - Central Luzon", value: "Region III" },
  { label: "Region IV-A - CALABARZON", value: "Region IV-A" },
  { label: "Region IV-B - MIMAROPA", value: "Region IV-B" },
  { label: "Region V - Bicol Region", value: "Region V" },
  { label: "Region VI - Western Visayas", value: "Region VI" },
  { label: "Region VII - Central Visayas", value: "Region VII" },
  { label: "Region VIII - Eastern Visayas", value: "Region VIII" },
  { label: "Region IX - Zamboanga Peninsula", value: "Region IX" },
  { label: "Region X - Northern Mindanao", value: "Region X" },
  { label: "Region XI - Davao Region", value: "Region XI" },
  { label: "Region XII - SOCCSKSARGEN", value: "Region XII" },
  { label: "Region XIII - Caraga", value: "Region XIII" },
  { label: "BARMM - Bangsamoro Autonomous Region", value: "BARMM" },
];

// Ethnicity options (common in Philippines)
export const ethnicityOptions = [
  { label: "Select Ethnicity", value: "" },
  { label: "Tagalog", value: "Tagalog" },
  { label: "Cebuano", value: "Cebuano" },
  { label: "Ilocano", value: "Ilocano" },
  { label: "Bicolano", value: "Bicolano" },
  { label: "Hiligaynon", value: "Hiligaynon" },
  { label: "Waray", value: "Waray" },
  { label: "Kapampangan", value: "Kapampangan" },
  { label: "Pangasinan", value: "Pangasinan" },
  { label: "Maranao", value: "Maranao" },
  { label: "Maguindanao", value: "Maguindanao" },
  { label: "Tausug", value: "Tausug" },
  { label: "Chinese Filipino", value: "Chinese Filipino" },
  { label: "Other", value: "Other" },
];

// Occupation categories
export const occupationOptions = [
  { label: "Select Occupation", value: "" },
  { label: "Government Employee", value: "Government Employee" },
  { label: "Private Employee", value: "Private Employee" },
  { label: "Self-Employed", value: "Self-Employed" },
  { label: "Business Owner", value: "Business Owner" },
  { label: "Teacher", value: "Teacher" },
  { label: "Healthcare Worker", value: "Healthcare Worker" },
  { label: "Driver", value: "Driver" },
  { label: "Farmer", value: "Farmer" },
  { label: "Fisherman", value: "Fisherman" },
  { label: "Construction Worker", value: "Construction Worker" },
  { label: "Vendor", value: "Vendor" },
  { label: "Domestic Helper", value: "Domestic Helper" },
  { label: "Retired", value: "Retired" },
  { label: "Student", value: "Student" },
  { label: "Unemployed", value: "Unemployed" },
  { label: "Other", value: "Other" },
];

// Helper function to generate number options (exported for reuse)
export { generateNumberOptions };