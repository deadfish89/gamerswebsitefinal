import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pfp from './images/pfp.png';

function InfoCards() {
  return (
    <div className='cards'>
      <h1>Meet the Executives</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={pfp}
              text='Artin Kiany'
              label='Twitch Team'
              path='/events'
            />
            <CardItem
              src={pfp}
              text='Ishaan Das-Basaak'
              label='Media Team'
              path='/events'
            />
            <CardItem
              src={pfp}
              text='Daniel Zhang'
              label='Youtube Team'
              path='/contact-us'
            />
            <CardItem
              src={pfp}
              text='Eric Chen'
              label='Youtube Team'
              path='/contact-us'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={pfp}
              text='Daniel Chen'
              label='Outreach'
              path='/events'
            />
            <CardItem
              src={pfp}
              text='Yevan Sheen'
              label='Youtube Team'
              path='/contact-us'
            />
            <CardItem
              src={pfp}
              text='Jason Li'
              label='Treasurer'
              path='/about-us'
            />
            <CardItem
              src={pfp}
              text='Bryan Jiang'
              label='Technology'
              path='/contact-us'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
