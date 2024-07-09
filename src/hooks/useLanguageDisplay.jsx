import eng from "../assets/images/langEng.svg";
import aze from "../assets/images/langAze.svg";

import { useState } from "react";

export default function useLanguageDisplay() {
  const langs = {
    en: eng,
    az: aze,
  };

  const [lang, setLang] = useState("en");
  const [show, setShow] = useState(false);

  const handleLangSelect = (value) => {
    setLang(value);
    setShow(false);
  };

  return [show, lang, setShow, handleLangSelect, langs];
}
