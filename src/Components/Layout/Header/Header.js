import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from '../../../assets/images/star-wars.jpg';
import './header.css';

const Header = () => (
  <div className="container-image">
    <Image className="image-header" src={logo} />
    <Link to="/" className="btn-home">
      Home{' '}
    </Link>
  </div>
);

export default Header;
