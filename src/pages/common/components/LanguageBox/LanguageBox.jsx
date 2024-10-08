import "./LanguageBox.css";

import eng from "../../../../assets/images/langEng.svg";
import aze from "../../../../assets/images/langAze.svg";
import fra from "../../../../assets/images/langFrance.svg";
import LangItem from "./components/LangItem";
import { motion } from "framer-motion";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { useTranslation } from "react-i18next";

function detectLanguageImage(lang) {
  switch (lang) {
    case "az":
      return aze;

    case "fr":
      return fra;

    case "en":
      return eng;

    default:
      return eng;
  }
}

const langs = {
  en: eng,
  fr: fra,
  az: aze,
};

export default function LanguageBox() {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(
    localStorage.getItem("i18nextLng").slice(0, 2)
  );
  const [show, setShow] = useState(false);

  const handleLangSelect = async (value) => {
    await i18n.changeLanguage(value);
    setLang(value);
    setShow(false);
  };

  const ref = useOnclickOutside(() => {
    if (show) {
      setShow(false);
    }
  });
  const liItems = Object.keys(langs).map((key) => (
    <LangItem key={key} data={{ key, langs, handleLangSelect }} />
  ));

  return (
    <div className="LanguageBox">
      <button className="lang_btn" onClick={() => setShow((prev) => !prev)}>
        <figure className="lang_fig_img_btn">
          <img src={detectLanguageImage(lang)} alt="" />
        </figure>
      </button>

      {show && (
        <motion.ul
          ref={ref}
          initial={{ scale: 0, x: 30 }}
          animate={{ scale: 1, x: 30 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="lang_list"
        >
          {liItems}
        </motion.ul>
      )}
    </div>
  );
}
