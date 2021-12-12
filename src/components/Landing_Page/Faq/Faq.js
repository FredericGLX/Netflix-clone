import { useState } from 'react';
import { accordionData } from './accordionData';
import './Faq.scss';

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // close active content
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-main-title">Frequently Asked Questions</h1>
      <div className="accordion-container">
        {accordionData.map(({ title, content }, index) => {
          return (
            <>
              <div onClick={() => toggle(index)} key={index}>
                <button className="accordion">
                  {title}{' '}
                  <span className="plus-sign">
                    {clicked === index ? '-' : '+'}
                  </span>
                </button>
              </div>
              {clicked === index ? (
                <div className="panel">
                  <p>{content}</p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
      <p className="faq-subtitle">
        Ready to watch Netflix? Enter your email to create or restart your
        membership.
      </p>

      <div className="faq-email-form">
        <div className="faq-field">
          <input className="faq-input" type="text" required />
          <label
            className="faq-label-text"
            for="email"
            title="Email address"
          ></label>
        </div>
        <button className="faq-btn-get-started">Get started</button>
      </div>
    </div>
  );
};

export default Faq;
