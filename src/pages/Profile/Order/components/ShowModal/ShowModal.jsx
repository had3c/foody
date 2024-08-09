import React, { useState } from 'react';
import style from './Show.module.css';
import { useTranslation } from 'react-i18next';
import margarita from '../../../../../assets/images/margarita.svg';
import prev from '../../../../../assets/icons/prevTable.svg';
import next from '../../../../../assets/icons/nextTable.svg';
import close from '../../../../../assets/icons/close.svg';

function ShowModal({ closeModal,setShowDel}) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  
  const data = [
    { id: 1, image: margarita, name: "Papa John’s Pizza", price: 7.90, count: 2, amount: 15.80 },
    { id: 2, image: margarita, name: "Papa John’s Pizza", price: 7.90, count: 3, amount: 15.80 },
    { id: 3, image: margarita, name: "Papa John’s Pizza", price: 7.90, count: 4, amount: 15.80 },
    { id: 4, image: margarita, name: "Papa John’s Pizza", price: 7.90, count: 5, amount: 15.80 },
    { id: 5, image: margarita, name: "Papa John’s Pizza", price: 7.90, count: 6, amount: 15.80 },
    { id: 6, image: margarita, name: "Papa John’s Pizza", price: 7.90, count: 7, amount: 15.80 },
    { id: 7, image: margarita, name: "Papa John’s Pizza", price: 7.90, count: 8, amount: 15.80 },
    { id: 8, image: margarita, name: "Papa John’s Pizza", price: 7.90, count: 9, amount: 15.80 },
  ];

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / perPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePerPage = (event) => {
    setPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className={style.showModal}>
      <div className={style.modal}>
        <div className={style.modalClose}   onClick={() => {
    closeModal();
    setShowDel(false);
  }}>
          <img src={close} alt="Close" />
        </div>

        <div className={style.tableParent}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>{t('Image')}</th>
                <th>{t('Name')}</th>
                <th>{t('Price')} $</th>
                <th>{t('Count')}</th>
                <th>{t('Amount')}</th>
              </tr>
            </thead>
            <tbody className={style.tbody}>
              {currentItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.price * item.count.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={style.pagination}>
          <div className={style.pagesNum}>
            <img
              src={prev}
              alt="Previous"
              onClick={handlePrevPage}
            />
            <button
              className={style.prevPage}
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            {totalPages > 1 && (
              <button
                className={style.nextPage}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            )}
            <img
              src={next}
              alt="Next"
              onClick={handleNextPage}
            />
          </div>

          <div className={style.selectPage}>
            <p>{t('Rows per page')}</p>
            <select value={perPage} onChange={handlePerPage}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;
