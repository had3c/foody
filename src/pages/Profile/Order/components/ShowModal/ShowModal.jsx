import React from 'react'
import style from './Show.module.css'
import margarita from '../../../../../assets/images/margarita.svg'
import prev from '../../../../../assets/icons/prevTable.svg'
import next from '../../../../../assets/icons/nextTable.svg'
function ShowModal() {
  return (
    <div className={style.showModal}>
      <div className={style.modal}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price $</th>
              <th>Count</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            <tr>
              <td>
                <img src={margarita} alt="" />
              </td>
              <td>Papa John’s Pizza</td>
              <td>7.90</td>
              <td>2</td>
              <td>15.80</td>
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


      </div>

    </div>
  )
}

export default ShowModal