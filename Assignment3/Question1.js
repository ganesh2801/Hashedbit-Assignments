const statesInIndia = [
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",,
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Tripura",
    "Uttar Pradesh",
    "West Bengal"
];
const statesWithoutVowels = statesInIndia.filter(state => {
    const firstLetter = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
}
);
console.log(statesWithoutVowels);