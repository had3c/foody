import React, { useState } from 'react';
import style from './Filter.module.css';
import closeModal from '../../../../assets/icons/close_modal.svg';

function FilterMenu() {
  const [isClose, setIsClose] = useState(false);

  function closeFilter() {
    setIsClose(!isClose);
  }



  return (
    <div>
      {!isClose && <div className={style.filterModal}>
        <img src={closeModal} alt="" onClick={closeFilter} />
        <div className={style.menuItems}>
          <p>Chinese</p>
          <p>Kebab</p>
          <p>Pizza</p>
          <p>Chinese</p>
          <p>Kebab</p>
          <p>Pizza</p>
          <p>Chinese</p>
          <p>Kebab</p>
          <p>Pizza</p>
        </div>
      </div>}

    </div>

  );
}

export default FilterMenu;
