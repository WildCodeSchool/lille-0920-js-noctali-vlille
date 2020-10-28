import Logo1 from '../images/logo1.png';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={Logo1} className="picture" alt="logo" />
      </div>
    </header>
  );
};
export default Header;
