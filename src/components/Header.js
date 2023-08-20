import logo from '../assets/investment-calculator-logo.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
// when using modules for css 1.name the css file as module.css, 2.add "classes."" to the css elements eg: classname="header" to classname={classes.header}3. import the correct file


