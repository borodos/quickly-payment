import "../style/OrderPayment.css";

const OrderPayment = ({ languageSelect }) => {
  return (
    <div className='order-payment'>
      <div className='order-payment__wrapper'>
        <div className='order-payment__title'>
          {languageSelect === "RU"
            ? "Оплата по заказу:"
            : languageSelect === "EN"
            ? "Payment by order:"
            : languageSelect === "FR"
            ? "Paiement sur commande:"
            : languageSelect === "DE"
            ? "Zahlung auf Bestellung:"
            : languageSelect === "IT"
            ? "Pagamento per ordine:"
            : null}
        </div>
        <div className='order-payment__text'>
          Услуги по пополнения счёта ЖКХ 5543465621342312312
        </div>
      </div>
    </div>
  );
};

export default OrderPayment;
