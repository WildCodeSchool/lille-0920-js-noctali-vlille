import './Footer.scss';
import logoGps from './images/logoGps.png';
import logoLock from './images/logoLock.png';

function Footer() {
  return (
    <div>
      <img src={logoGps} alt="gps" />
      <img src={logoLock} alt="lock" />
    </div>
  );
}

export default Footer;
