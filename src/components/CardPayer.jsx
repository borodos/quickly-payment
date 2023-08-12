import "../style/CardPayer.css";
import Button from "./Button";
import Select from "./Select";
import { banks } from "./../banks";
import { countriesRu } from "./../countreis";

const CardPayer = () => {
  return (
    <div className='card-payer'>
      <div className='card-payer__title'>Информация о плательщике</div>
      <form className='card-payer__wrapper'>
        <div className='card-payer__form-body'>
          <input className='card-payer__input' placeholder='Фамилия' type='text' />
          <input className='card-payer__input' placeholder='Имя' type='text' />
          <input
            className='card-payer__input'
            placeholder='Номер телефона отправителя'
            type='text'
          />
          <Select className='card-payer__select' text={"Страна"} array={countriesRu} />
          <input className='card-payer__input' placeholder='Город' type='text' />
          <input className='card-payer__input' placeholder='Адрес' type='text' />
          <input className='card-payer__input' placeholder='Email' type='email' />
          <input className='card-payer__input' placeholder='Индекс' />
          <Select className='card-payer__select' text={"Выбрать банк"} contained array={banks} />
        </div>
        <Button className='card-payer__button' contained>
          Перейти к оплате
        </Button>
      </form>
    </div>
  );
};

export default CardPayer;
