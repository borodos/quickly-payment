import "../style/Header.css";
import Button from "./Button";
import Logo from "../../src/Logo.svg";

const Header = () => {
  return (
    <div className='header'>
      <div className='header__body'>
        <Button className='header__button' contained>
          ENG
        </Button>
        <div className='header__title'>
          <img src={Logo} alt='Icon' />
        </div>
      </div>
    </div>
  );
};

export default Header;
