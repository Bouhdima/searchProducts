import React from 'react';

const Product = ({ products }) => {
  return (
    <div className='section-center'>
      {products.map((product) => {
        const { id, name, image, description, price } = product;
        return (
          <article key={id} className='menu-item'>
            <img src={image} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Product;
