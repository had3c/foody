import "./LanguageBox.css";
import useLanguageDisplay from "../../../../hooks/useLanguageDisplay";
import LangItem from "./components/LangItem";
import { motion } from "framer-motion";

export default function LanguageBox() {
  const [show, lang, setShow, handleLangSelect, langs] = useLanguageDisplay();

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
