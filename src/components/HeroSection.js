import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>RAISING MONEY FOR CHARITY THROUGH GAMING</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          JOIN OUR DISCORD TO LEARN MORE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
