import React from 'react';
import StandardButton from 'components/common/Button';
import { smoothScrollToHomePageTop } from 'utils/scrollingOperations';
import styles from './Home.module.scss';

export const BenefitsInfo = () => (
  <div className={`${styles['section']} ${styles['benefits-info']}`}>
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-1']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-2']} />
    <img src="/images/corona.png" alt="background-illustration" className={styles['corona-3']} />
    <h2 data-aos="zoom-in">Your customers will love it.</h2>
    <div data-aos="zoom-in" className={`${styles['container']} ${styles['benefits-container']}`}>
      <div className={styles.benefit}>
        <img src="/images/minimize_crowding.svg" alt="minimize crowding" />
        <p>Reduces waiting time and improves customer satisfaction.</p>
      </div>
      <div className={styles.benefit}>
        <img src="/images/enforce_social_dist.svg" alt="Enforce social distancing" />
        <p>Social distancing tool for post-COVID digital world.</p>
      </div>
      <div className={styles.benefit}>
        <img src="/images/check_status.svg " alt="Check your current status" />
        <p>Digital tokens and live status updates.</p>
      </div>
    </div>
  </div>
);

export const HowToCreate = () => (
  <>
    <div
      data-aos="fade-up"
      id="target_how_it_works"
      className={`${styles['section']} ${styles['queue-info']}`}
    >
      <h2>Why you should be using SimplQ</h2>
      <div className={`${styles['container']} ${styles['queue-container']}`}>
        <div className={styles.queue}>
          <img src="/images/queue_creation.svg" alt="Queue creation" />
        </div>
        <div className={styles.queue}>
          <ul className={styles['list-info']}>
            <img src="/images/wand.svg" alt="Wand" />
            <li>
              <h3>1. Create Queue</h3>
              <p>
                Enter queue name of your choice and create a brand new queue totally free of cost
              </p>
            </li>
            <img src="/images/share-24px.svg" alt="Share" />
            <li>
              <h3>2. Share Queue</h3>
              <p>
                Click the share button and send the queue link to your users for them to join. Or
                print the QR code and stick it at a place where people can scan it.
              </p>
            </li>
            <img src="/images/people-24px.svg" alt="People" />
            <li>
              <h3>3. Manage queue</h3>
              <p>
                Manage your queues seamlessly and efficiently to provide a better user experience
              </p>
            </li>
          </ul>
        </div>
        <p>
          SimplQ customer waiting experience software is a simple and affordable ticket, table or
          place-in-line solution, adding value to any crowded business.
        </p>
        <p>
          What makes us different? Unlike other similar solutions, SimplQ is open source software
          built by software enthusiasts from around the world. This lets us bring you the core
          functionalities in our free plan without unnecessary fees. We also have an affordable
          month-to-month subscription option if you want to be a long term supporter. Talk to us if
          you need dedicated support or have any custom requirements.
        </p>
        <p>
          We are generic enough to allow customers to choose the best way for them to use it, but
          small enough to care about the individual needs of every customer.
        </p>

        <h3>This is what makes us stand out from other crowd-control solutions.</h3>
      </div>
    </div>
    <svg id={styles['curved-div-2']} xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 50">
      <path
        fill="#6C63FF29"
        fillOpacity="1"
        d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
    </svg>
  </>
);

export const HowToJoin = () => (
  <div className={`${styles['section']} ${styles['join-info']}`}>
    <h2 data-aos="zoom-in">Join a queue without being there</h2>
    <div className={`${styles['container']} ${styles['queue-container']}`}>
      <div data-aos="fade-right" className={styles['queue']}>
        <ul className={styles['list-info']}>
          <img src="/images/mobile_friendly-24px.svg" alt="Mobile friendly" />
          <li>
            <h3>Join a queue</h3>
            <p>Get the shared queue link and enter your details to join a queue</p>
          </li>
          <img src="/images/alarm-24px.svg" alt="Alarm" />
          <li>
            <h3>Waiting for your turn</h3>
            <p>Check your token status in queue and get notified when your turn is up</p>
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in" className={styles['queue']}>
        <img src="/images/join.svg" alt="Join" />
      </div>
    </div>
  </div>
);

export const ExtraInfo = () => (
  <div className={`${styles['section']} ${styles['extra-info']}`}>
    <div className={`${styles['container']} ${styles['extra-container']}`}>
      <div className={styles['card']}>
        <img src="/images/free.svg" alt="free" />
        <p className={styles['brief-description']}>Always free</p>
        <p className={styles['detailed-description']}>
          We are a team of enthusiastic developers who want to give back to society and do not
          prioritize monetary gains.
        </p>
      </div>
      <div className={styles['card']}>
        <img src="/images/secure.svg" alt="secure" />
        <p className={styles['brief-description']}>Data security</p>
        <p className={styles['detailed-description']}>
          Security is paramount and we take data security seriously.
        </p>
      </div>
      <div className={styles['card']}>
        <img src="/images/easy.svg" alt="easy to use" />
        <p className={styles['brief-description']}>Easy to use</p>
        <p className={styles['detailed-description']}>
          We provide free queue management thereby allowing you to focus on better things.
        </p>
      </div>
    </div>
  </div>
);

export const Pricing = () => (
  <div data-aos="fade-up" className={`${styles['section']} ${styles['get-started']}`}>
    <h2 data-aos="zoom-in">Pricing - Plans for every use case</h2>
    <div className={styles['container']}>
      <div className={styles['price-card']}>
        <h1>Free</h1>
        <p className={styles['subtitle']}>Basic for small businesses.</p>
        <li>
          <ul>Unlimited Queues</ul>
          <ul>20,000 tokens per month.</ul>
        </li>
        <p className={styles['amount']}>$0</p>
        <StandardButton onClick={smoothScrollToHomePageTop}>Start for free</StandardButton>
      </div>
      <div className={styles['price-card']}>
        <h1>Business</h1>
        <p className={styles['subtitle']}>For bigger companies.</p>
        <li>
          <ul>Everything in the free plan.</ul>
          <ul>Unlimited tokens per month.</ul>
          <ul>Custom subdomains.</ul>
          <ul>Multi-user support.</ul>
          <ul>Priority Customer Support.</ul>
        </li>
        <p className={styles['amount']}>$8.99/mo</p>
        <StandardButton onClick={smoothScrollToHomePageTop}>Upgrade</StandardButton>
      </div>
      <div className={styles['price-card']}>
        <h1>Enterprise</h1>
        <p className={styles['subtitle']}>Best for unique requirements that need to scale.</p>
        <li>
          <ul>Everything in the business plan.</ul>
          <ul>In-house installation support.</ul>
          <ul>Custom features, integrations, branding.</ul>
        </li>
        <StandardButton
          onClick={() => {
            window.location = 'https://kss9gyhvcy3.typeform.com/to/kHJHPLEr';
          }}
        >
          Contact Sales
        </StandardButton>
      </div>
    </div>
    <p>* No credit card required till you upgrade.</p>
  </div>
);
