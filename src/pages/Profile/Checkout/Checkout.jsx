import style from './style/Checkout.module.css'
import checked from '../../../assets/images/successCheck.svg'

export default function Checkout() {
  return <div className={style.userCheck}>

    <div className={style.checkOut}>
      <h3>Checkout</h3>
      <form className={style.form}>
        <label>Delivery Address</label>
        <input type="text" placeholder='Delivery Address'/>
        <label>Contact Number</label>
        <input type="number" placeholder='+994'/>
        <label>Payment Method</label>
       <div className={style.payment}>
        <div className={style.pay}>
          <input type="radio" name='check' id='thedoor'/>
        <label htmlFor='thedoor'>pay at the door</label>
        </div>
        <div className={style.pay}>
         <input type="radio" name='check' id='creditcard'/>
        <label htmlFor='creditcard'> pay at the door by credit card</label>  
        </div>
       </div>
       <button>Checkout</button>
      </form>
    </div>

    <div className={style.orderTotal}>
      <div>
       <h4>Your Order</h4>
      <ul>
        <li>
          <div>
           <span>1</span><span>x Papa John’s Pizza Restaurant</span> 
          </div>
          <p>$ 8.00</p>
        </li>
      </ul> 
      </div>
      <div className={style.total}>
        <h5>Total</h5>
        <p>$ 17.80</p>
      </div>
    </div>

    {/* <div className={style.orderChecked}>
     <img src={checked} alt="" />
     <p>Your order has been received</p>
    </div> */}

  </div>;
}
