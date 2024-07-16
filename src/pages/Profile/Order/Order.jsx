import { useState } from 'react'
import style from './style/Order.module.css'
import setting from '../../../assets/icons/showDel.svg'
import prev from '../../../assets/icons/prevTable.svg'
import ShowDel from './components/ShowDelete/ShowDel'
import next from '../../../assets/icons/nextTable.svg'
export default function Order() {

  const [showDel, setShowDel] = useState(false);

  const toggleShowDel = () => {
    setShowDel(!showDel);
  };

  return <div className={style.userOrder}>
    <h2>
      Your Orders
    </h2>
      <table className={style.orderTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th className={style.delivery}>Delivery Address</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {showDel && <ShowDel />}
          <tr>
            <td className={style.Id}><span>9177</span></td>
            <td>25 Dec 2021</td>
            <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
            <td>$ 249.7</td>
            <td>Cash on Delivery</td>
            <td>994-51-410-3130</td>
            <td>
              <img src={setting} alt="" onClick={toggleShowDel}  />
            </td>
          </tr>

        </tbody>
      </table>
    <div className={style.pagination}>
      <div className={style.pagesNum}>
        <img src={prev} alt="" />
        <button className={style.prevPage}>1</button>
        <button className={style.nextPage}>3</button>
        <img src={next} alt="" />
      </div>

      <div className={style.selectPage}>
        <p>Rows per page</p>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>

  </div>;
}
