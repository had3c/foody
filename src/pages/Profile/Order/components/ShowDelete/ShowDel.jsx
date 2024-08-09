import React, { useState } from 'react';
import style from './ShowDel.module.css';
import { useTranslation } from 'react-i18next';
import DeleteModal from '../DeleteModal/DeleteModal';
import ShowModal from '../ShowModal/ShowModal';

function ShowDel({setShowDel,handleDelete, itemId }) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

 
  function toggleDeleteModal() {
    setDeleteModal(!deleteModal); 
  }

  function handleShow() {
    setShowModal(!showModal);
  }

  return (
    <div>
      {showModal && <ShowModal closeModal={handleShow} setShowDel={setShowDel}/>}
      {deleteModal && <DeleteModal closeModal={toggleDeleteModal} setShowDel={setShowDel} handleDelete={handleDelete} itemId={itemId}/>}
      <ul className={style.showDel}>
        <li className={style.show} onClick={handleShow}>
          {t('Show')}
        </li>
        <li className={style.delete} onClick={toggleDeleteModal}>
          {t('Delete')}
        </li>
      </ul>
    </div>
  );
}

export default ShowDel;
