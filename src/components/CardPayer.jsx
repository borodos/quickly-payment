import "../style/CardPayer.css";
import Button from "./Button";
import ErrorContainer from "./ErrorContainer";
import Select from "./Select";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { buttonText, texts } from "../texts";
import { banks } from "./../banks";
import { countriesEng, countriesRu } from "./../countreis";

const CardPayer = ({ languageSelect }) => {
  let text = texts.filter((value) => value.language === languageSelect);
  let textButton = buttonText.filter((value) => value.language === languageSelect);
  text = text[0];
  textButton = textButton[0];
  console.log(textButton);
  return (
    <div className='card-payer'>
      <div className='card-payer__title'>{text.cardPayer.title}</div>
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
            if (languageSelect === "RU") errors.lastName = "Введите фамилию";
            if (languageSelect === "EN") errors.lastName = "Enter your last name";
            if (languageSelect === "FR") errors.lastName = "Entrez votre nom de famille";
            if (languageSelect === "DE") errors.lastName = "Geben Sie Ihren Nachnamen ein";
            if (languageSelect === "IT") errors.lastName = "Inserisci il cognome";
          }
          if (!values.firstName) {
            if (languageSelect === "RU") errors.firstName = "Введите имя";
            if (languageSelect === "EN") errors.firstName = "Enter a name";
            if (languageSelect === "FR") errors.firstName = "Entrez un nom";
            if (languageSelect === "DE") errors.firstName = "Geben Sie einen Namen ein";
            if (languageSelect === "IT") errors.firstName = "Inserisci un nome";
          }
          if (!values.phone) {
            if (languageSelect === "RU") errors.phone = "Введите телефон";
            if (languageSelect === "EN") errors.phone = "Enter a phone number";
            if (languageSelect === "FR") errors.phone = "Entrez le téléphone";
            if (languageSelect === "DE") errors.phone = "Geben Sie das Telefon ein";
            if (languageSelect === "IT") errors.phone = "Inserisci il telefono";
          }
          if (!values.country) {
            if (languageSelect === "RU") errors.country = "Выберете страну";
            if (languageSelect === "EN") errors.country = "Select a country";
            if (languageSelect === "FR") errors.country = "Sélectionnez un pays";
            if (languageSelect === "DE") errors.country = "Land auswählen";
            if (languageSelect === "IT") errors.country = "Seleziona un paese";
          }
          if (!values.bank) {
            if (languageSelect === "RU") errors.bank = "Выберете банк";
            if (languageSelect === "EN") errors.bank = "Select a bank";
            if (languageSelect === "FR") errors.bank = "Sélectionnez une banque";
            if (languageSelect === "DE") errors.bank = "Bank auswählen";
            if (languageSelect === "IT") errors.bank = "Scegli una banca";
          }
          if (!values.city) {
            if (languageSelect === "RU") errors.city = "Введите город";
            if (languageSelect === "EN") errors.city = "Enter the city";
            if (languageSelect === "FR") errors.city = "Entrez la ville";
            if (languageSelect === "DE") errors.city = "Stadt eingeben";
            if (languageSelect === "IT") errors.city = "Inserisci la città";
          }
          if (!values.address) {
            if (languageSelect === "RU") errors.address = "Введите адрес";
            if (languageSelect === "EN") errors.address = "Enter the address";
            if (languageSelect === "FR") errors.address = "Entrez l'adresse";
            if (languageSelect === "DE") errors.address = "Adresse eingeben";
            if (languageSelect === "IT") errors.address = "Inserisci l'indirizzo";
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            if (languageSelect === "RU") errors.email = "Некорректный email";
            if (languageSelect === "EN") errors.email = "Incorrect email";
            if (languageSelect === "FR") errors.email = "Email incorrect";
            if (languageSelect === "DE") errors.email = "Falsche E-Mail";
            if (languageSelect === "IT") errors.email = "Email errata";
          }
          if (!values.index) {
            if (languageSelect === "RU") errors.index = "Введите индекс";
            if (languageSelect === "EN") errors.index = "Enter the zip code";
            if (languageSelect === "FR") errors.index = "Entrez le code postal";
            if (languageSelect === "DE") errors.index = "Geben Sie die Postleitzahl ein";
            if (languageSelect === "IT") errors.index = "Inserisci il Codice Postale";
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
                  placeholder={text.cardPayer.lastName}
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
                  placeholder={text.cardPayer.firstName}
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
                  placeholder={text.cardPayer.phone}
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
                  text={text.cardPayer.country}
                  array={languageSelect === "RU" ? countriesRu : countriesEng}
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
                  placeholder={text.cardPayer.city}
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
                  placeholder={text.cardPayer.address}
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
                  placeholder={text.cardPayer.index}
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
                  text={text.cardPayer.bank}
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
              <Button
                className='card-payer__button button--mobile'
                contained
                type='submit'
                languageSelect
              >
                {textButton.text}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardPayer;
