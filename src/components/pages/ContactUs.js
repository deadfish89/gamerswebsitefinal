import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function ContactUs() {
  return <>
    <div className='contact-us'>
      <h1>APPLY TO BECOME A GENERAL MEMBER</h1>
      <h1>Send Us Your Suggestions</h1>
      <h1>Visit Our Social Medias</h1>
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
    <Footer/>
  </>
}
