import React from 'react'
import style from './Delete.module.css'
function DeleteModal() {
  return (
    <div className={style.delModal}>

      <div className={style.modal}>
        <h3>Are you sure it’s deleted ?</h3>
        <p>Attention! If you delete this order, it will not come back...</p>
        <div className={style.buttons}>
          <button className={style.cancel}>cancel</button>
          <button className={style.delete}>delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal