import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 AbdErRahmanE Store All rights reserverd</p>
      <p className="icons">
         <AiFillInstagram />
         <AiOutlineTwitter />
        
        
      </p>
    </div>
  )
}

export default Footer