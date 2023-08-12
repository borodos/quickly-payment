import "../style/CardPayment.css";

const CardPayment = () => {
  return (
    <div className='card-payment'>
      <div className='card-payment__title'>Информация о платеже</div>
      <div className='card-payment__wrapper'>
        <div className='card-payment__column'>
          <div className='card-payment__row'>
            <div className='card-payment__text--bold' style={{ paddingRight: "78px" }}>
              Магазин
            </div>
            <div className='card-payment__text'>Client 8</div>
          </div>
          <div className='card-payment__row' style={{ paddingTop: "40px" }}>
            <div className='card-payment__text--bold' style={{ paddingRight: "57px" }}>
              ID платежа
            </div>
            <div className='card-payment__text'>77aecdsser-4-2ca-asdasd-asdagddskmc-41</div>
          </div>
        </div>
        <div className='card-payment__column'>
          <div className='card-payment__row'>
            <div
              className='card-payment__text--bold'
              style={{ maxWidth: "103px", paddingRight: "95px" }}
            >
              Валюта платежа
            </div>
            <div className='card-payment__text'>840</div>
          </div>
          <div className='card-payment__row' style={{ paddingTop: "40px" }}>
            <div
              className='card-payment__text--bold'
              style={{ maxWidth: "103px", paddingRight: "95px" }}
            >
              Сумма платежа
            </div>
            <div className='card-payment__text'>11.23</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
