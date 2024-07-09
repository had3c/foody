import "./LanguageBox.css";

import eng from "../../../../assets/images/langEng.svg";
import aze from "../../../../assets/images/langAze.svg";
import fra from "../../../../assets/images/langFrance.svg";

import LangItem from "./components/LangItem";
import { motion } from "framer-motion";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setLangName } from "../../../../redux/features/langSlice/langSlice";

const langs = {
  en: eng,
  fr: fra,
  az: aze,
};

export default function LanguageBox() {
  const { langName } = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  const [lang, setLang] = useState(langName);
  const [show, setShow] = useState(false);

  const handleLangSelect = (value) => {
    setLang(value);
    dispatch(setLangName(value));
    setShow(false);
  };

  const liItems = Object.keys(langs).map((key) => (
    <LangItem key={key} data={{ key, langs, handleLangSelect }} />
  ));

  return (
    <div className="LanguageBox">
      <button className="lang_btn" onClick={() => setShow((prev) => !prev)}>
        <figure className="lang_fig_img_btn">
          <img src={langs[lang]} alt="" />
        </figure>
      </button>

      {show && (
        <motion.ul
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
