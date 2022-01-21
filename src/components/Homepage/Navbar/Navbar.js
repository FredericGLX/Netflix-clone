import logo from './img/netflix_logo.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img className="navbar-logo" src={logo} alt="netflix-logo" />
    </div>
  );
};

export default Navbar;
