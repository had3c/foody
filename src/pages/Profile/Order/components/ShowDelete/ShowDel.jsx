import React, { useState } from 'react'
import style from './ShowDel.module.css'
import DeleteModal from '../DeleteModal/DeleteModal'
import ShowModal from '../ShowModal/ShowModal';
function ShowDel() {
    const [showModal, setShowModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    function toggleDeleteModal() {
        setDeleteModal(!deleteModal);
    };
    function handleShow() {
        setShowModal(!showModal);
    };

    return (
        <div>
             {!showModal && <ShowModal />}
            {deleteModal && <DeleteModal />}
            <ul className={style.showDel}>
                <li className={style.show} onClick={handleShow}>show</li>
                <li className={style.delete} onClick={toggleDeleteModal}>delete</li>
            </ul>
        </div>
    )
}

export default ShowDel