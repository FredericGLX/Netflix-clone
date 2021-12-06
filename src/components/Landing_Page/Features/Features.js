import './Features.scss';
import tv_animation from '../img/tv.png';
import offline_feature from '../img/offline_img.jpg';
import device from '../img/device.png';
import kids_feature from '../img/kids_feature.png';

const Features = () => {
  return (
    <div>
      <div className="features-container">
        <div className="titles">
          <h1 className="main-title">Enjoy Netflix on your TV.</h1>
          <p className="subtitle">
            Watch titles on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            Blu-ray players and more.
          </p>
        </div>
        <img
          className="image-feature"
          src={tv_animation}
          alt="netflix application on TV"
        />
      </div>

      <div className="features-container">
        <div className="titles">
          <h1 className="main-title">
            Download your shows to watch them offline.
          </h1>
          <p className="subtitle">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <img
          className="image-feature"
          src={offline_feature}
          alt="netflix application on mobile"
        />
      </div>

      <div className="features-container">
        <div className="titles">
          <h1 className="main-title">Watch Netflix everywhere.</h1>
          <p className="subtitle">
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV without paying more.
          </p>
        </div>
        <img
          className="image-feature"
          src={device}
          alt="netflix application on desktop, mobile and tablet"
        />
      </div>

      <div className="features-container">
        <div className="titles">
          <h1 className="main-title">Create profiles for kids.</h1>
          <p className="subtitle">
            Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership.
          </p>
        </div>
        <img
          className="image-feature"
          src={kids_feature}
          alt="two happy kids and one rabbit"
        />
      </div>
    </div>
  );
};

export default Features;
