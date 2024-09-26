import React, { useState, useEffect } from 'react';
import style from './Show.module.css';
import { useTranslation } from 'react-i18next';
import prev from '../../../../../assets/icons/prevTable.svg';
import next from '../../../../../assets/icons/nextTable.svg';
import close from '../../../../../assets/icons/close.svg';
import axios from 'axios'

function ShowModal({ closeModal, setShowDel, id }) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`https://firestore.googleapis.com/v1/projects/${import.meta.env.VITE_PROJECT_ID}/databases/(default)/documents/orders/${id}`);

      const fetchedOrders = response.data.fields.basket.arrayValue.values.map(item => ({
        id: item.mapValue.fields.id.stringValue,
        image: item.mapValue.fields.image.stringValue,
        name: item.mapValue.fields.name.stringValue,
        price: parseFloat(item.mapValue.fields.price.stringValue),
        quantity: parseInt(item.mapValue.fields.quantity.stringValue),
      }));

      setOrders(fetchedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };


  useEffect(() => {
    fetchOrders();
  }, []);



  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(orders.length / perPage);

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
        <div className={style.modalClose} onClick={() => {
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
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
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
