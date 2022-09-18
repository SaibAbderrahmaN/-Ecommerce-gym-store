import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
    <Link href={`/product/${slug.current}` } >

        <div className="card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            
          />
          <div className='det'>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          <a herf={`/product/${slug.current}` }  className='btna'>
                 <span> buy now </span><i></i>
          </a>
            
          </div>
         
        </div>
        </Link>
    </div>
  )
}

export default Product