import React from 'react'
import footerLogo from '../../../../assets/icons/logoFooter.svg'
import facebook from '../../../../assets/icons/facebook.svg'
import twitter from '../../../../assets/icons/twitter.svg'
import instagram from '../../../../assets/icons/instagram.svg'
import footStyle from './Footer.module.css'

function Footer() {
   return (
      <div className={footStyle.footer}>
         <section className={footStyle.mainSec}>
            {/*             Logo and Social Media              */}

            <div>
               <img src={footerLogo} alt=""  className={footStyle.footerLogo}/>
               <p className={footStyle.slogan}>Lorem ipsum is placeholder text commonly used in the graphic</p>
               <div className={footStyle.socialMedia}>
                  <img src={facebook} alt="" className={footStyle.whiteBorder}/>
                  <img src={instagram} alt="" className={footStyle.instagram}/>
                  <img src={twitter} alt="" className={footStyle.whiteBorder}/>
               </div>
            </div>

            {/*              Footer - Navigation                  */}

            <div className={footStyle.footNavigate}>
               <ul>
                  <li className={footStyle.listCategory}>Popular</li>
                  <li>Programming</li>
                  <li>Books for children</li>
                  <li>Psychology</li>
                  <li>Business</li>
               </ul>

               <ul>
                  <li className={footStyle.listCategory}>Cash</li>
                  <li>Delivery</li>
                  <li>Payment</li>
                  <li>About the store</li>
               </ul>

               <ul>
                  <li className={footStyle.listCategory}>Help</li>
                  <li>Contacts</li>
                  <li>Purchase returns</li>
                  <li>Buyer help</li>
               </ul>
            </div>
         </section>
         <p className={footStyle.privacy}>All rights reserved © 2003-2023 Foody TERMS OF USE | Privacy Policy</p>
      </div>
   )
}

export default Footer