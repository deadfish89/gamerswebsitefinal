import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import league from './images/league.jfif';
import valorant from './images/valorant.webp';
import foodbank from './images/foodbank.png';
import canadahelp from './images/suicide.jpg';
import teamseas from './images/teamseas.png';
function Cards() {
  return (
    <div className='cards'>
      <h1>We are a group of students raising awarness of issues through video games</h1>
      <p>We currently have over 100 members, and host monthly tournaments for a variety of games</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={league}
              text='League of Legends'
              path='/events'
            />
            <CardItem
              src={valorant}
              text='VALORANT'
              path='/events'
            />
          </ul>
          <h1>Our Supported Charities</h1>
          <ul className='cards__items'>
            <CardItem
              src={foodbank}
              text='North York Harvest Food Bank'
              label='Community Relief'
              path='/events'
            />
            <CardItem
              src={canadahelp}
              text='Canadian Association for Suicide Prevention'
              label='Mental Health'
              path='/about-us'
            />
            <CardItem
              src={teamseas}
              text='Team Seas'
              label='Environment'
              path='/contact-us'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
