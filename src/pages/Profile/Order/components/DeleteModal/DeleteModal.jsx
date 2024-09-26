import React from 'react';
import style from './Delete.module.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function DeleteModal({ closeModal, setShowDel, handleDelete, id }) {
  const { t } = useTranslation();

  const deleteOrdersFromFirebase = async () => {
    const url = `https://firestore.googleapis.com/v1/projects/${import.meta.env.VITE_PROJECT_ID}/databases/(default)/documents/orders/${id}`;
    try {
      const response = await axios.delete(url);
      console.log('order data deleted successfully', response.data);
    } catch (error) {
      console.error('Error deleting data:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <div className={style.delModal}>
      <div className={style.modal}>
        <h3>{t("Are you sure it's deleted ?")}</h3>
        <p>{t('Attention! If you delete this product, it will not come back...')}</p>
        <div className={style.buttons}>
          <button className={style.cancel} onClick={() => {
            closeModal();
            setShowDel(false);
          }}>
            {t('Cancel')}
          </button>
          <button className={style.delete} onClick={() => {
            deleteOrdersFromFirebase()
            window.location.reload()
            closeModal()
          }
          } >{t('Delete')} </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;




