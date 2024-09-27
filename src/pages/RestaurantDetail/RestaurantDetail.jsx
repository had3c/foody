import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { addProduct, removeProduct, updateQuantity } from '../../redux/features/basketSlice/basketSlice';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import style from './style/RestaurantDetail.module.css'
import bstyle from './style/Basket.module.css'
import addPrdct from '../../assets/icons/add_basket.svg'
import margarita from '../../assets/images/margarita.svg'
import basket from '../../assets/icons/red_basket.svg'
import emptyBasket from '../../assets/icons/shopping_basket.svg'
import deleteBasket from '../../assets/icons/delete_sweep.svg'
import { LuShoppingBasket } from "react-icons/lu";
import Checkout from '../../pages/common/components/CheckBasket/Checkout'
import closeModal from '../../assets/icons/close_modal.svg'

export default function RestaurantDetail() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [sortOption, setSortOption] = useState('');
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.basket.products);

  const fetchRestaurantDetail = async () => {
    const restaurantUrl = `https://firestore.googleapis.com/v1/projects/${import.meta.env.VITE_PROJECT_ID}/databases/(default)/documents/restaurants/${id}`;

    try {
      const response = await axios.get(restaurantUrl);
      const data = response.data;
      setRestaurantDetail({
        id: data.fields.id.stringValue,
        name: data.fields.name.stringValue,
        address: data.fields.address.stringValue,
        cuisine: data.fields.cuisine.stringValue,
        category: data.fields.category.stringValue,
        price: data.fields.price.stringValue,
        minute: data.fields.minute.stringValue,
        image: data.fields.image.stringValue,
      });
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  useEffect(() => {
    fetchRestaurantDetail();
  }, [id]);


  const fetchRestaurantProducts = async () => {
    const productsUrl = `https://firestore.googleapis.com/v1/projects/foody-b6c94/databases/(default)/documents/products`;

    try {
      const response = await axios.get(productsUrl);
      const data = response.data.documents;
      const filteredProducts = data
        .map(doc => ({
          id: doc.fields.id.stringValue,
          name: doc.fields.name.stringValue,
          price: doc.fields.price.stringValue,
          restaurant: doc.fields.restaurant.stringValue,
          image: doc.fields.image.stringValue,
        }))
        .filter(product => product.restaurant === restaurantDetail?.name);

      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    if (restaurantDetail) {
      fetchRestaurantProducts();
    }
  }, [restaurantDetail]);

  const handleAddProduct = (product) => {
    if (user) {
      dispatch(addProduct(product));
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
      });
      Toast.fire({
        icon: "info",
        title: t('You must login')
      });
    }
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };
  const handleDeleteAll = () => {
    basketProducts.forEach(product => {
      dispatch(removeProduct(product.id));
    });
  };
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 576) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCheckoutClick = () => {
    if (basketProducts.length > 0) {
      navigate('/user/checkout');
    }
  };


  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'A-Z':
        return a.name.localeCompare(b.name);
      case 'Z-A':
        return b.name.localeCompare(a.name);
      case 'priceAsc':
        return a.price - b.price;
      case 'priceDesc':
        return b.price - a.price;
      default:
        return 0;
    }
  });


  function openFilterMenu() {
    setIsOpen(!isOpen);
  }

  return <div>
    {restaurantDetail && (
      <div className={style.details}>
        <img src={restaurantDetail.image} />
        <div className={style.information}>
          <div className={style.location}>
            <h5>{restaurantDetail.name}</h5>
            <p>{restaurantDetail.address}</p>
          </div>
          <div className={style.foods}>
            <div>
              <p>Cuisine</p>
              <span>{restaurantDetail.cuisine}</span>
            </div>
            <div className={style.delivery}>
              <p>${restaurantDetail.price} {t('Delivery')}</p>
              <button onClick={() => navigate('/restaurants')}>{t('Go Back')}</button>
            </div>
          </div>
        </div>
      </div>
    )}

    <div className={style.sortingRest}>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">{t('Sort by')}</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="priceAsc">{t('Price: Low to High')}</option>
        <option value="priceDesc">{t('Price: High to Low')}</option>
      </select>
    </div>

    <div className={style.items}>
      <div className={style.products}>
        <h2>{t('Products')}</h2>
        <div className={style.prdctCards}>
          {sortedProducts.map((product) => (
            <div key={product.id} className={style.prdctCard}>
              <img src={product.image} alt="" className={style.prdctImg} />
              <div className={style.feature}>
                <p>{product.name}</p>
                <span>Lorem ipsum dolor sit amet elit. Consaeqatur reprehenderit.</span>
              </div>
              <div className={style.price}>
                <span>From </span>
                <span>${product.price}</span>
              </div>
              <img
                src={addPrdct}
                alt="Add to Basket"
                className={style.addPrdct}
                onClick={() => handleAddProduct(product)}
              />
            </div>
          ))}
        </div>
        <div className={style.checkout} onClick={openFilterMenu}>
          <p>{basketProducts.length} {t('items')}</p>
          <div>
            $ {basketProducts.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
          </div>
        </div>
      </div>

      {isOpen && (<div className={bstyle.modalBg}>
        <div className={bstyle.basketItems}>
          <div>
            <img src={closeModal} alt="" className={bstyle.closeModal} onClick={openFilterMenu} />
            {basketProducts.length > 0 ? (
              <div>
                <div className={bstyle.basketCount}>
                  <img src={basket} alt="" />
                  <p>{basketProducts.length} {t('items')}</p>
                </div>

                <div className={bstyle.basketList}>
                  <div className={bstyle.deleteAll}>
                    <button onClick={handleDeleteAll}>{t('Delete all')}</button>
                  </div>

                  {basketProducts.map((product) => (
                    <div key={product.id} className={bstyle.listCard}>

                      <div className={bstyle.listHead}>
                        <img
                          src={deleteBasket}
                          alt=""
                          onClick={() => handleRemoveProduct(product.id)}
                        />
                      </div>
                      <div className={bstyle.listBody}>
                        <div className={bstyle.listInform}>
                          <img src={product.image} alt="" />
                          <div>
                            <p>{product.name}</p>
                            <span>${(product.price * product.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                        <div className={bstyle.itemCount}>
                          <button onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)} className={bstyle.operation}>＋</button>
                          <p>{product.quantity}</p>
                          <button onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)} className={bstyle.operation}>‒</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className={bstyle.basketCount}>
                  <img src={emptyBasket} alt="" style={{ width: '25px' }} />
                  <p style={{ color: 'grey' }}>0 {t('items')}</p>
                </div>
                <div className={bstyle.emptyBasket}>
                  <LuShoppingBasket size={135} />
                  <p>{t('Opps!')}</p>
                  <p>{t('Basket Empty')}</p>
                </div>
              </div>)}

          </div>
          <div style={{ cursor: 'pointer' }} onClick={handleCheckoutClick}>
            <Checkout basketProducts={basketProducts} />
          </div>
        </div>
      </div>)}
    </div>
  </div>;
}