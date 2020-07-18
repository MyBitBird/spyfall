import en from "./en.json";
import fa from "./fa.json";

interface Direction {
  key: string;
  value: any;
  direction: "rtl" | "ltr" | undefined;
}

export const languagesList: Direction[] = [
  { key: "en", value: en, direction: "ltr" },
  { key: "fa", value: fa, direction: "rtl" },
];

export const languageOptions = [
  { key: "en", value: "English" },
  { key: "fa", value: "فارسی" },
];
