import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../../assets/images/star-wars.jpg';
import './header.css';

const Header = () => (
  <div className="container-image">
    <Image className="image-header" src={logo} />
  </div>
);

export default Header;
