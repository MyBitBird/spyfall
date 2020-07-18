import en from "./en.json";
import fa from "./fa.json";
import ge from "./ge.json";
import rtl from "../themes/themeRtl";
import ltr from "../themes/themeLtr";
import { Theme } from "@material-ui/core";

interface Direction {
  key: string;
  value: any;
  theme: Theme;
  direction: "rtl" | "ltr" | undefined;
}

export const languagesList: Direction[] = [
  { key: "en", value: en, direction: "ltr", theme: ltr },
  { key: "ge", value: ge, direction: "ltr", theme: ltr },
  { key: "fa", value: fa, direction: "rtl", theme: rtl },
];

export const languageOptions = [
  { key: "en", value: "En" },
  { key: "ge", value: "Ge" },
  { key: "fa", value: "فا" },
];
