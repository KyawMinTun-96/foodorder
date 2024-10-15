import React, { useContext, useEffect } from 'react'
import './FoodDetail.css'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/imgs/others/assets';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const FoodDetail = () => {

  const { foodID } = useParams();
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  const { food_list } = useContext(StoreContext);
  const foodItem = food_list.find((item) => item._id === foodID);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <>
      <ScrollToTop />
    {
      foodItem ?
      <div className='food-detail'>
        <img className='food-detail-image' src={foodItem.image} alt='...'/>

        <div className='food-detail-info'>
            <p className='food-detail-name'>
              {foodItem.name}
            </p>
            <div className='food-detail-rating'>
              <p className='food-detail-price'>
                    ${foodItem.price}
              </p>
              <img src={assets.rating_starts} alt='...' />
            </div>
            <div>
              <span className='food-detail-category'>
                {foodItem.category} .
              </span>
            </div>
            <p className='food-detail-desc'>
                {foodItem.description}
            </p>
        </div>

        {!cartItems[foodID]
            ? <img className='add' onClick={()=> addToCart(foodID)} src={assets.add_icon_dark} alt='...' />
            : <div  className='food-item-counter'>
                <img onClick={()=> removeFromCart(foodID)} src={assets.remove_icon_red} alt='...'/>
                <p>{cartItems[foodID]}</p>
                <img onClick={()=> addToCart(foodID)} src={assets.add_icon_green} alt='...'/>
              </div>
        }
      </div>

      : 
      <>
      </>
    }
    </>
  )
}

export default FoodDetail
