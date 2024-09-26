import React, { useState, forwardRef } from 'react';
import style from './ShowDel.module.css';
import { useTranslation } from 'react-i18next';
import DeleteModal from '../DeleteModal/DeleteModal';
import ShowModal from '../ShowModal/ShowModal';
import useOnclickOutside from 'react-cool-onclickoutside';

const ShowDel = forwardRef(({ setShowDel, handleDelete, id }, ref) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  function toggleDeleteModal() {
    setDeleteModal(!deleteModal);
  }

  function handleShow() {
    setShowModal(!showModal);
  }

  useOnclickOutside(ref, () => {
    if (showModal) {
      setShowDel(false);
    }
  });

  return (
    <div ref={ref}>
      {showModal && <ShowModal closeModal={handleShow} setShowDel={setShowDel} id={id} />}
      {deleteModal && <DeleteModal closeModal={toggleDeleteModal} setShowDel={setShowDel} handleDelete={handleDelete} id={id} />}
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
});

export default ShowDel;
