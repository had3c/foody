import { useState } from 'react';
import style from './style/Order.module.css';
import { useTranslation } from 'react-i18next'
import setting from '../../../assets/icons/showDel.svg';
import prev from '../../../assets/icons/prevTable.svg';
import next from '../../../assets/icons/nextTable.svg';
import ShowDel from './components/ShowDelete/ShowDel';
import ShowModal from './components/ShowModal/ShowModal';

export default function Order() {
  const { t } = useTranslation()
  const [showDel, setShowDel] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2);

  const toggleShowDel = (id) => {
    setShowDel(showDel === id ? null : id);
  };


  const [data, setData] = useState([
    { id: '9177', time: '25 Dec 2021', address: '29 Eve Street, 543 Evenue Road, Ny 87876', amount: '$249.7', payment: 'Cash on Delivery', contact: '994-51-410-3130' },
    { id: '2', time: '25 Dec 2021', address: '29 Eve Street, 543 Evenue Road, Ny 87876', amount: '$249.7', payment: 'Cash on Delivery', contact: '994-51-410-3130' },
    { id: '3', time: '25 Dec 2021', address: '29 Eve Street, 543 Evenue Road, Ny 87876', amount: '$249.7', payment: 'Cash on Delivery', contact: '994-51-410-3130' },
    { id: '4', time: '25 Dec 2021', address: '29 Eve Street, 543 Evenue Road, Ny 87876', amount: '$249.7', payment: 'Cash on Delivery', contact: '994-51-410-3130' },
    { id: '5', time: '25 Dec 2021', address: '29 Eve Street, 543 Evenue Road, Ny 87876', amount: '$249.7', payment: 'Cash on Delivery', contact: '994-51-410-3130' },
    { id: '6', time: '25 Dec 2021', address: '29 Eve Street, 543 Evenue Road, Ny 87876', amount: '$249.7', payment: 'Cash on Delivery', contact: '994-51-410-3130' },
    { id: '7', time: '25 Dec 2021', address: '29 Eve Street, 543 Evenue Road, Ny 87876', amount: '$249.7', payment: 'Cash on Delivery', contact: '994-51-410-3130' },
    { id: '8', time: '25 Dec 2021', address: '29 Eve Street, 543 Evenue Road, Ny 87876', amount: '$249.7', payment: 'Cash on Delivery', contact: '994-51-410-3130' },
  ]);


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

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    // if (currentPage > Math.ceil(updatedData.length / perPage)) {
    //   setCurrentPage(Math.ceil(updatedData.length / perPage));
    // }
  };
  return (
    <div className={style.userOrder}>
      <h2>{t('Your Orders')}</h2>
      <div className={style.tableParent}>
        <table className={style.orderTable}>
          <thead>
            <tr>
              <th className={style.hidden}></th>
              <th>{t('ID')}</th>
              <th>{t('Time')}</th>
              <th className={style.delivery}>{t('Delivery Address')}</th>
              <th>{t('Amount')}</th>
              <th>{t('Payment Method')}</th>
              <th>{t('Contact')}</th>
              <th className={style.show}></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className={style.hidden}>
                  <img src={setting} alt="Settings" onClick={() => toggleShowDel(item.id)} />
                  {showDel === item.id && (
                    <ShowDel setShowDel={setShowDel} handleDelete={handleDelete} itemId={item.id} />
                  )}
                </td>
                <td className={style.Id}><span>{item.id}</span></td>
                <td>{item.time}</td>
                <td>{item.address}</td>
                <td>{item.amount}</td>
                <td>{item.payment}</td>
                <td>{item.contact}</td>
                <td className={style.show}>
                  <img src={setting} alt="Settings" onClick={() => toggleShowDel(item.id)} />
                  {showDel === item.id && (
                    <ShowDel setShowDel={setShowDel} handleDelete={handleDelete} itemId={item.id} />
                  )}
                </td>
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
            <option value="5">5</option>
          </select>
        </div>
      </div>


    </div>
  );
}




