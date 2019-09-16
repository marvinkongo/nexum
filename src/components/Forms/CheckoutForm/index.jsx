import React, {useEffect, useState} from 'react';
import {Form, withFormik} from 'formik';
import * as Yup from 'yup';
import Addresses from './Adresses';
import PaymentOptions from './Payment';
import PageIndicator from '../PageIndicator';
import OrderSummary from './OrderSummary';

import './style.scss';
import ShoppingCart from './ShoppingCart';

const CheckoutForm = props => {
  useEffect(() => {
    canContinue();
  });

  const [takeBillingAddress, setTakeBillingAddress] = useState(false);
  const [formPageStep, setFormPageStep] = useState(2);
  const [canContinueValue, setCanContinue] = useState(false);

  const {values, touched, errors, handleChange, handleBlur, handleSubmit} = props;

  const formPageContent = () => {
    switch (formPageStep) {
      case 0:
        return <Addresses takeBillingAddress={takeBillingAddress} setTakeBillingAddress={setTakeBillingAddress} />;
      case 1:
        return <PaymentOptions handleChange={handleChange} values={values} />;
      case 2:
        return <OrderSummary takeBillingAddress={takeBillingAddress} handleChange={handleChange} values={values} />;
    }
  };

  const canContinue = () => {
    const {
      baGender,
      baSurname,
      baLastname,
      baPhoneNumber,
      baMail,
      baStreetAndNumber,
      baCity,
      baZipCode,
      daGender,
      daSurname,
      daLastname,
      daStreetAndNumber,
      daCity,
      daZipCode,
      creditCardName,
      creditCardNumber,
      creditCardDate,
      creditCardSecurityNo,
      paymentOption,
      directDebitName,
      directDebitIban
    } = values;
    switch (formPageStep) {
      case 0:
        if (
          baSurname &&
          baGender !== 'false' &&
          baGender &&
          baLastname &&
          baPhoneNumber &&
          baMail &&
          baStreetAndNumber &&
          baCity &&
          baZipCode &&
          (takeBillingAddress ||
            (daGender !== 'false' && daGender && daSurname && daLastname && daStreetAndNumber && daCity && daZipCode))
        ) {
          setCanContinue(true);
        } else {
          setCanContinue(false);
        }
        break;
      case 1:
        if (
          (paymentOption === 'creditCard' &&
            creditCardName &&
            creditCardNumber &&
            creditCardDate &&
            creditCardSecurityNo) ||
          ((paymentOption === 'directDebit' && directDebitName && directDebitIban) || paymentOption === 'bill')
        ) {
          setCanContinue(true);
        } else {
          setCanContinue(false);
        }
        break;
      case 2:
        setCanContinue(false);
        break;
    }
  };
  const nextStep = () => {
    setFormPageStep(formPageStep + 1);
    canContinue();
  };
  const previousStep = () => {
    setFormPageStep(formPageStep - 1);
  };

  return (
    <div className="checkout-form">
      <div className="checkout-form__form">
        <Form>
          <div className="checkout-form__header">
            <PageIndicator activeStep={formPageStep} steps={['Adresse', 'Zahlungsart', 'Zusammenfassung', 'Fertig']} />
          </div>
          <div className="checkout-form__content">{formPageContent()}</div>
          <div className="checkout-form__footer">
            <button disabled={formPageStep <= 0} onClick={previousStep}>
              zurück
            </button>
            {formPageStep !== 2 && (
              <button disabled={formPageStep >= 5 || !canContinueValue} onClick={nextStep}>
                weiter
              </button>
            )}
          </div>
        </Form>
      </div>
      <div className="checkout-form__shopping-cart">
        <ShoppingCart />
      </div>
    </div>
  );
};

const CheckoutFormFormik = withFormik({
  /* mapPropsToValues: ({
                        baGenderWoman,
                        baGenderMan,
                        baSurname,
                        baLastname,
                        baPhoneNumber,
                        baMail,
                        baStreetAndNumber,
                        baCity,
                        baZipCode,
                        daGenderWoman,
                        daGenderMan,
                        daSurname,
                        daLastname,
                        daStreetAndNumber,
                        daCity,
                        daZipCode,
     }
     ) => ({
       baGenderWoman: baGenderWoman || "",
       baGenderMan: baGenderMan || "",
       baSurname: baSurname || "",
       baLastname: baLastname || "",
       baPhoneNumber: baPhoneNumber || "",
       baMail: baMail || "schwanz",
       baStreetAndNumber: baStreetAndNumber || "",
       baCity: baCity || "",
       baZipCode: baZipCode || "",
       daGenderWoman: daGenderWoman || "",
       daGenderMan: daGenderMan || "",
       daSurname: daSurname || "",
       daLastname: daLastname || "",
       daStreetAndNumber: daStreetAndNumber || "",
       daCity: daCity || "",
       daZipCode: daZipCode || "",
     }
   ),*/
  validationSchema: Yup.object().shape({
    baGender: Yup.string(),
    baSurname: Yup.string(),
    baLastname: Yup.string(),
    baPhoneNumber: Yup.string(),
    baMail: Yup.string().email(),
    baStreetAndNumber: Yup.string(),
    baCity: Yup.string(),
    baZipCode: Yup.string(),
    daGenderWoman: Yup.string(),
    daGenderMan: Yup.string(),
    daSurname: Yup.string(),
    daLastname: Yup.string(),
    daStreetAndNumber: Yup.string(),
    daCity: Yup.string(),
    daZipCode: Yup.string()
  }),
  mapPropsToValues() {
    console.log('hallo');
  },
  handleSubmit: (values, {setSubmitting}) => {
    setTimeout(() => {}, 2000);
  },

  displayName: 'CheckoutForm'
})(CheckoutForm);

export default CheckoutFormFormik;
