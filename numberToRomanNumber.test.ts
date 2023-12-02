import { toRoman } from "./numberToRomanNumber";

test("converts 1 to Roman numerals", () => {
  expect(toRoman(1)).toBe("I");
});

test("converts 2 to Roman numerals", () => {
  expect(toRoman(2)).toBe("II");
});

test("converts 4 to Roman numerals", () => {
  expect(toRoman(4)).toBe("IV");
});

test("converts 9 to Roman numerals", () => {
  expect(toRoman(9)).toBe("IX");
});

test("converts 23 to Roman numerals", () => {
  expect(toRoman(23)).toBe("XXIII");
});

test("converts 58 to Roman numerals", () => {
  expect(toRoman(58)).toBe("LVIII");
});

test("converts 123 to Roman numerals", () => {
  expect(toRoman(123)).toBe("CXXIII");
});

test("converts 599 to Roman numerals", () => {
  expect(toRoman(199)).toBe("CXCIX");
});

test("converts 1514 to Roman numerals", () => {
  expect(toRoman(1514)).toBe("MDXIV");
});

test("converts 1994 to Roman numerals", () => {
  expect(toRoman(1994)).toBe("MCMXCIV");
});

test("converts 3999 to Roman numerals", () => {
  expect(toRoman(3999)).toBe("MMMCMXCIX");
});

// Invalid Inputs
test("handles negative numbers", () => {
  expect(toRoman(-1)).toBe("Invalid Input");
});

test("handles zero", () => {
  expect(toRoman(0)).toBe("Invalid Input");
});

test("handles numbers larger than 3999", () => {
  expect(toRoman(4000)).toBe("Invalid Input");
});

test("handles non-numeric inputs", () => {
  expect(toRoman("abc")).toBe("Invalid Input");
});

// Edge Cases
test("handles very large numbers", () => {
  expect(toRoman(1e12)).toBe("Invalid Input");
});

test("handles very small numbers", () => {
  expect(toRoman(1e-12)).toBe("Invalid Input");
});

test("handles fractions", () => {
  expect(toRoman(1.5)).toBe("Invalid Input");
});

test("handles NaN", () => {
  expect(toRoman(NaN)).toBe("Invalid Input");
});

test("handles Infinity", () => {
  expect(toRoman(Infinity)).toBe("Invalid Input");
});

test("handles -Infinity", () => {
  expect(toRoman(-Infinity)).toBe("Invalid Input");
});

test("handles undefined", () => {
  expect(toRoman(undefined)).toBe("Invalid Input");
});

test("handles null", () => {
  expect(toRoman(null)).toBe("Invalid Input");
});

test("handles empty string", () => {
  expect(toRoman("")).toBe("Invalid Input");
});

test("handles empty array", () => {
  expect(toRoman([])).toBe("Invalid Input");
});

test("handles empty object", () => {
  expect(toRoman({})).toBe("Invalid Input");
});

test("handles function", () => {
  expect(toRoman(() => {})).toBe("Invalid Input");
});

test("handles Symbol", () => {
  expect(toRoman(Symbol())).toBe("Invalid Input");
});

test("handles boolean", () => {
  expect(toRoman(true)).toBe("Invalid Input");
});

test("handles Date", () => {
  expect(toRoman(new Date())).toBe("Invalid Input");
});

test("handles RegExp", () => {
  expect(toRoman(/abc/)).toBe("Invalid Input");
});

test("handles Error", () => {
  expect(toRoman(new Error())).toBe("Invalid Input");
});

test("handles Map", () => {
  expect(toRoman(new Map())).toBe("Invalid Input");
});

test("handles Set", () => {
  expect(toRoman(new Set())).toBe("Invalid Input");
});

test("handles WeakMap", () => {
  expect(toRoman(new WeakMap())).toBe("Invalid Input");
});

test("handles WeakSet", () => {
  expect(toRoman(new WeakSet())).toBe("Invalid Input");
});

test("handles ArrayBuffer", () => {
  expect(toRoman(new ArrayBuffer(2))).toBe("Invalid Input");
});

test("handles DataView", () => {
  expect(toRoman(new DataView(new ArrayBuffer(2)))).toBe("Invalid Input");
});

test("handles Float32Array", () => {
  expect(toRoman(new Float32Array(2))).toBe("Invalid Input");
});

test("handles Float64Array", () => {
  expect(toRoman(new Float64Array(2))).toBe("Invalid Input");
});

test("handles Int8Array", () => {
  expect(toRoman(new Int8Array(2))).toBe("Invalid Input");
});

test("handles Int16Array", () => {
  expect(toRoman(new Int16Array(2))).toBe("Invalid Input");
});

test("handles Int32Array", () => {
  expect(toRoman(new Int32Array(2))).toBe("Invalid Input");
});

test("handles Uint8Array", () => {
  expect(toRoman(new Uint8Array(2))).toBe("Invalid Input");
});

test("handles Uint16Array", () => {
  expect(toRoman(new Uint16Array(2))).toBe("Invalid Input");
});

test("handles Uint32Array", () => {
  expect(toRoman(new Uint32Array(2))).toBe("Invalid Input");
});

test("handles Uint8ClampedArray", () => {
  expect(toRoman(new Uint8ClampedArray(2))).toBe("Invalid Input");
});

test("handles BigInt", () => {
  expect(toRoman(BigInt(1))).toBe("Invalid Input");
});

test("handles BigInt64Array", () => {
  expect(toRoman(new BigInt64Array(2))).toBe("Invalid Input");
});

test("handles BigUint64Array", () => {
  expect(toRoman(new BigUint64Array(2))).toBe("Invalid Input");
});

test("handles class instance", () => {
  class Test {}
  expect(toRoman(new Test())).toBe("Invalid Input");
});

test("handles class instance with valueOf", () => {
  class Test {
    valueOf() {
      return 1;
    }
  }
  expect(toRoman(new Test())).toBe("Invalid Input");
});

test("handles class instance with toString", () => {
  class Test {
    toString() {
      return "1";
    }
  }
  expect(toRoman(new Test())).toBe("Invalid Input");
});

test("handles class instance with toJSON", () => {
  class Test {
    toJSON() {
      return 1;
    }
  }
  expect(toRoman(new Test())).toBe("Invalid Input");
});
