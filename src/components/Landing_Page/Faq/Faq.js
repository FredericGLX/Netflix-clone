import { useState } from 'react';
import { accordionData } from './accordionData';
import './Faq.scss';
import { Link } from 'react-router-dom';

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
      <Link to={'/signup'}>
        <button className="faq-btn-get-started">Get started</button>
      </Link>
    </div>
  );
};

export default Faq;
