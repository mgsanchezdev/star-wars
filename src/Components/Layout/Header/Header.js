import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import logo from '../../../assets/images/star-wars.jpg';
import './header.css';

const Header = () => (
  <div className="container-image">
    <Image className="image-header" src={logo} />
    <Link to="/">
      <Button className="btn-home">Home</Button>
    </Link>
  </div>
);

export default Header;
