export function toRoman(input: unknown) {
  if (!isValid(input)) return "Invalid Input";

  const romanNumeralSets = [
    ["CM", "CD", "D", "C"],
    ["XC", "XL", "L", "X"],
    ["IX", "IV", "V", "I"],
  ];
  let digits = input.toString().split("").map(Number);

  let romanNumeral = "";

  if (digits.length === 4) {
    romanNumeral += "M".repeat(digits[0]);
    digits.shift();
  }

  for (let i = 0; i < 3; i++) {
    if (digits.length === 3 - i) {
      const [first, ...rest] = digits;
      romanNumeral += digitToRomanNumeral(first, romanNumeralSets[i]);
      digits = rest;
    }
  }
  return romanNumeral;
}

const isValid = (input: unknown): input is number =>
  typeof input === "number" && input >= 1 && input <= 3999 && input % 1 === 0;

const digitToRomanNumeral = (digit: number, romanNumeralSet: string[]) => {
  if (digit === 9) {
    return romanNumeralSet[0];
  } else if (digit === 4) {
    return romanNumeralSet[1];
  } else if (digit >= 5) {
    return romanNumeralSet[2] + romanNumeralSet[3].repeat(digit - 5);
  } else {
    return romanNumeralSet[3].repeat(digit);
  }
};
