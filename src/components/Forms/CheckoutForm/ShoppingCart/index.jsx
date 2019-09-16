import React from 'react';
import PropTypes from 'prop-types';
import image2 from './keyboard.png';
import image1 from './mouse.png';
import './style.scss';

const sampleData = {
  type: 'shoppingcart',
  shoppingcartid: 'a4cde56a-2e71-42ab-a458-b52dc81b0fdd',
  products: [
    {
      productid: '21291d4d-6199-45eb-8549-e941813752f8',
      title: 'MX Master 3',
      price: '10.99',
      amount: 1,
      image: image1
    },
    {
      productid: 'f05f4a23-10a1-4f39-a959-bfcbfaa613a3',
      title: 'Logitech Craft',
      price: '200.99',
      amount: 1,
      image: image2
    }
  ],
  sum: '211.98',
  vatPercent: '19%',
  vadSum: '49,19',
  deliveryCosts: '4.99',
  totalSum: '266.16'
};

const ShoppingCart = () => {
  const items = sampleData.products.map(item => {
    return (
      <a className="shopping-cart__item" href={'/products/' + item}>
        <title>{item.title}</title>
        <img src={item.image} alt={item.title} />
        <span className={'shopping-cart_item-price'}>
          {item.amount}x{item.price}
        </span>
      </a>
    );
  });

  const {sum, vatPercent, vadSum, deliveryCosts, totalSum} = sampleData;
  return (
    <div className={'shopping-cart'}>
      <div className="shopping-cart__items">{items}</div>
      <div className="shopping-cart__prices">
        <div className="shopping-cart__sum">
          <span className="shopping-cart__label">Summe</span>
          <span className="shopping-cart__value">{sum}</span>
        </div>
        <div className="shopping-cart__vad">
          <span className="shopping-cart__label"> {`Merwertsteuer ${vatPercent}`}</span>
          <span className="shopping-cart__value">{vadSum}</span>
        </div>
        <div className="shopping-cart__deliveryCosts">
          <span className="shopping-cart__label">Versandkosten</span>
          <span className="shopping-cart__value">{deliveryCosts}</span>
        </div>
        <hr className="shopping-cart__divider" />
        <div className="shopping-cart__totalSum">
          <span className="shopping-cart__label">Total</span>
          <span className="shopping-cart__value">{totalSum + '€'}</span>
        </div>
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {};

export default ShoppingCart;
