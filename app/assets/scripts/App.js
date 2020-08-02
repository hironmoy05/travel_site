import '../styles/styles.css';
import MobileMenu from './modules/_MobileMenu';

const mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}