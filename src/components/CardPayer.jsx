import "../style/CardPayer.css";
import Button from "./Button";
import ErrorContainer from "./ErrorContainer";
import Select from "./Select";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { banks } from "./../banks";
import { countriesRu } from "./../countreis";

const CardPayer = () => {
  return (
    <div className='card-payer'>
      <div className='card-payer__title'>Информация о плательщике</div>
      <Formik
        initialValues={{
          email: "",
          lastName: "",
          firstName: "",
          country: "",
          bank: "",
          city: "",
          address: "",
          index: "",
          phone: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.lastName) {
            errors.lastName = "Введите фамилию";
          }
          if (!values.firstName) {
            errors.firstName = "Введите имя";
          }
          if (!values.phone) {
            errors.phone = "Введите телефон";
          }
          if (!values.country) {
            errors.country = "Выберете страну";
          }
          if (!values.bank) {
            errors.bank = "Выберете банк";
          }
          if (!values.city) {
            errors.city = "Введите город";
          }
          if (!values.address) {
            errors.address = "Введите адрес";
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Некорректный email";
          }
          if (!values.index) {
            errors.index = "Введите индекс";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
          <Form className='card-payer__wrapper' onSubmit={handleSubmit}>
            <div className='card-payer__form-body'>
              <div className='card-payer__column'>
                <Field
                  className={`card-payer__input ${
                    touched.lastName && errors.lastName ? "input--error" : ""
                  }`}
                  placeholder='Фамилия'
                  type='text'
                  name='lastName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                <ErrorMessage name='lastName' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>
              <div className='card-payer__column'>
                <Field
                  className={`card-payer__input ${
                    touched.firstName && errors.firstName ? "input--error" : ""
                  }`}
                  placeholder='Имя'
                  type='text'
                  name='firstName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <ErrorMessage name='firstName' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>

              <div className='card-payer__column'>
                <Field
                  className={`card-payer__input ${
                    touched.phone && errors.phone ? "input--error" : ""
                  }`}
                  placeholder='Номер телефона отправителя'
                  type='text'
                  name='phone'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <ErrorMessage name='phone' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>

              <div className='card-payer__column'>
                <Select
                  className='card-payer__select'
                  text={"Страна"}
                  array={countriesRu}
                  inForm
                  setValue={setFieldValue}
                  errors={errors}
                  touched={touched}
                />
                <ErrorMessage name='country' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>

              <div className='card-payer__column'>
                <Field
                  className={`card-payer__input ${
                    touched.city && errors.city ? "input--error" : ""
                  }`}
                  placeholder='Город'
                  type='text'
                  name='city'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                <ErrorMessage name='city' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>

              <div className='card-payer__column'>
                <Field
                  className={`card-payer__input ${
                    touched.address && errors.address ? "input--error" : ""
                  }`}
                  placeholder='Адрес'
                  type='text'
                  name='address'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                <ErrorMessage name='address' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>

              <div className='card-payer__column'>
                <Field
                  className={`card-payer__input ${
                    touched.email && errors.email ? "input--error" : ""
                  }`}
                  placeholder='Email'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage name='email' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>

              <div className='card-payer__column'>
                <Field
                  className={`card-payer__input ${
                    touched.index && errors.index ? "input--error" : ""
                  }`}
                  placeholder='Индекс'
                  name='index'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.index}
                />
                <ErrorMessage name='index' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>

              <div className='card-payer__column'>
                <Select
                  className='card-payer__select'
                  text={"Выбрать банк"}
                  contained
                  array={banks}
                  inForm
                  setValue={setFieldValue}
                  bank
                  errors={errors}
                  touched={touched}
                />
                <ErrorMessage name='bank' render={(msg) => <ErrorContainer msg={msg} />} />
              </div>
            </div>
            <Button className='card-payer__button' contained type='submit'>
              Перейти к оплате
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardPayer;
