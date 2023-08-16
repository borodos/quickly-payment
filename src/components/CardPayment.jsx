import "../style/CardPayment.css";
import PaymentTimer from "./PaymentTimer";
import { columnTitleText, texts } from "../texts";

const CardPayment = ({ languageSelect }) => {
  let text = texts.filter((value) => value.language === languageSelect);
  text = text[0];
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  let textTitle = columnTitleText.filter((value) => value.language === languageSelect);
  textTitle = textTitle[0];
  return (
    <div className='card-payment'>
      <div className='card-payment__title'>{text.cardPayment.title}</div>
      <div className='card-payment__wrapper'>
        <div className='card-payment__mobile'>
          <div className='card-payment__column'>
            <div
              className='card-payment__column-title'
              style={languageSelect === "DE" ? { wordBreak: "break-all" } : {}}
            >
              {textTitle.titleFirst}
            </div>
            <div
              className='card-payment__column-title'
              style={languageSelect === "DE" ? { wordBreak: "break-all" } : {}}
            >
              {textTitle.titleSecond}
            </div>
          </div>
          <div className='card-payment__column card-payment__column--content'>
            <div className='card-payment__text'>Client 8</div>
            <div className='card-payment__text'>77aecdsser-4-2caasdasdasdagddskmc-41</div>
          </div>
        </div>
        <div className='card-payment__mobile'>
          <div className='card-payment__column'>
            <div
              className='card-payment__column-title'
              style={languageSelect === "DE" ? { wordBreak: "break-all" } : {}}
            >
              {textTitle.titleThird}
            </div>
            <div
              className='card-payment__column-title'
              style={languageSelect === "DE" ? { wordBreak: "break-all" } : {}}
            >
              {textTitle.titleFourth}
            </div>
          </div>
          <div className='card-payment__column card-payment__column--content'>
            <div className='card-payment__text'>840</div>
            <div className='card-payment__text'>11.23</div>
          </div>
        </div>

        <div className='card-payment__mobile'>
          <div className='card-payment__column'>
            <div
              className='card-payment__column-title'
              style={languageSelect === "DE" ? { wordBreak: "break-all" } : {}}
            >
              {textTitle.titleFifth}
            </div>
            <div
              className='card-payment__column-title'
              style={languageSelect === "DE" ? { wordBreak: "break-all" } : {}}
            >
              {textTitle.titleSixth}
            </div>
          </div>
          <div className='card-payment__column card-payment__column--content'>
            <div className='card-payment__text'>840</div>
            <div className='card-payment__text'>
              <PaymentTimer expiryTimestamp={time} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
