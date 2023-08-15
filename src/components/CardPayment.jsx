import "../style/CardPayment.css";
import PaymentTimer from "./PaymentTimer";
import { texts } from "../texts";

const CardPayment = ({ languageSelect }) => {
  let text = texts.filter((value) => value.language === languageSelect);
  text = text[0];
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className='card-payment'>
      <div className='card-payment__title'>{text.cardPayment.title}</div>
      <div className='card-payment__wrapper'>
        {text.cardPayment.columns.map((valueColumn, indexColumn) => (
          <div className='card-payment__column' key={indexColumn}>
            {valueColumn.rows.map((value, indexRow) => (
              <div
                className='card-payment__row'
                key={indexRow}
                style={indexColumn === 0 ? null : { paddingLeft: "10px" }}
              >
                <div className='card-payment__text--bold'>{value.rowName}</div>
                <div className='card-payment__text'>
                  {indexColumn === text.cardPayment.columns.length - 1 &&
                  indexRow === valueColumn.rows.length - 1 ? (
                    <PaymentTimer expiryTimestamp={time} />
                  ) : (
                    value.content
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPayment;
