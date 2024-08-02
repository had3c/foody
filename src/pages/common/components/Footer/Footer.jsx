import React from 'react'
import { useTranslation } from 'react-i18next';
import footerLogo from '../../../../assets/icons/logoFooter.svg'
import facebook from '../../../../assets/icons/facebook.svg'
import twitter from '../../../../assets/icons/twitter.svg'
import instagram from '../../../../assets/icons/instagram.svg'
import footStyle from './Footer.module.css'

function Footer() {

  const { t } = useTranslation();
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
            <li className={footStyle.listCategory}>{t('Popular')}</li>
            <li>{t('Programming')}</li>
            <li>{t('Books for children')}</li>
            <li>{t('Psychology')}</li>
            <li>{t('Business')}</li>
          </ul>

          <ul>
            <li className={footStyle.listCategory}>{t('Cash')}</li>
            <li>{t('Delivery')}</li>
            <li>{t('Payment')}</li>
            <li>{t('About the store')}</li>
          </ul>

          <ul>
            <li className={footStyle.listCategory}>{t('Help')}</li>
            <li>{t('Contact')}</li>
            <li>{t('Purchase returns')}</li>
            <li>{t('Buyer Help')}</li>
          </ul>
            </div>
         </section>
         <p className={footStyle.privacy}>{t('All rights reserved © 2003-2024 Foody TERMS OF USE | Privacy Policy')}</p>
      </div>
   )
}

export default Footer