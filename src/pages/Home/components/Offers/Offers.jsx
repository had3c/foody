import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Offers.module.css';

function Offers() {
  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    const offersUrl = `https://firestore.googleapis.com/v1/projects/foody-b6c94/databases/(default)/documents/offers`;

    try {
      const response = await axios.get(offersUrl);
      const offersData = response.data.documents.map(doc => ({
        id: doc.fields.id.stringValue,
        image: doc.fields.image.stringValue,
        title: doc.fields.title.stringValue,
        description: doc.fields.description.stringValue,
        createTime: doc.createTime,
      }));

      offersData.sort((a, b) => new Date(a.createTime) - new Date(b.createTime));
      setOffers(offersData);
    } catch (err) {
      console.error('Error fetching offers', err);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div>
         <section className={style.offers}>
        {offers.map((offer, index) => (
          <div key={offer.id} className={`${style.promo} ${index % 2 !== 0 ? style.rowReverse : ''}`}>
            <div className={style.promoTxt}>
              <h2>{offer.title}</h2>
              <p>{offer.description}</p>
            </div>
            <div className={style.promoImg}>
            <div className={`${style.imgBg} ${index % 2 !== 0 ? style.scaleX : ''}`}></div>  
            <img src={offer.image} alt={offer.title} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Offers;
