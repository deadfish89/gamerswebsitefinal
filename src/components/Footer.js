import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              GAMERS IN ACTION
            </Link>
          </div>
          <small class='website-rights'>GAMERS IN ACTION © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link twitch'
              href='https://www.twitch.tv/vpcipanthergaming'
              target='_blank'
              aria-label='Twitch'
              rel="noopener noreferrer"
            >
              <i class='fab fa-twitch' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/panther_gaming.vp/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCxI6zim7M6c-4QzGMl0dtEQ'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link discord'
              href='https://discord.gg/GftfsPCN5t'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Discord'
            >
              <i class='fab fa-discord' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
