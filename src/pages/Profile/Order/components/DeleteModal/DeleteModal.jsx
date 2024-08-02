import React from 'react';
import style from './Delete.module.css';
import { useTranslation } from 'react-i18next';

function DeleteModal({ closeModal }) {
  const { t } = useTranslation();
  return (
    <div className={style.delModal}>
      <div className={style.modal}>
        <h3>{t("Are you sure it's deleted ?")}</h3>
        <p>{t('Attention! If you delete this product, it will not come back...')}</p>
        <div className={style.buttons}>
          <button className={style.cancel} onClick={closeModal}>
            {t('Cancel')}
          </button>
          <button className={style.delete}>{t('Delete')}</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;




