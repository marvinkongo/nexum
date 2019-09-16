import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from '../../FieldWrapper';
import {connect, Field} from 'formik';

import './style.scss';

const PaymentOptions = ({handleChange, values}) => {
  const paymentOptionRender = () => {
    switch (values.paymentOption) {
      case 'creditCard':
        return (
          <div className="checkout-form__paymentOption-creditcard">
            <FieldWrapper fieldName={'creditCardName'} label={'Name auf der Kreditkarte'}>
              <Field name={'creditCardName'} />
            </FieldWrapper>
            <FieldWrapper fieldName={'creditCardNumber'} label={'Kreditkartennummer'}>
              <Field name={'creditCardNumber'} />
            </FieldWrapper>
            <FieldWrapper fieldName={'creditCardDate'} label={'Gültigkeit'}>
              <Field name={'creditCardDate'} />
            </FieldWrapper>
            <FieldWrapper fieldName={'creditCardSecurityNo'} label={'Kartenprüfnummer'}>
              <Field name={'creditCardSecurityNo'} />
            </FieldWrapper>
          </div>
        );
      case 'directDebit':
        return (
          <div className="checkout-form__paymentOption-direct-debit">
            <FieldWrapper fieldName={'directDebitName'} label={'Name des Kontoinhabers'}>
              <Field name={'directDebitName'} />
            </FieldWrapper>
            <FieldWrapper fieldName={'directDebitIban'} label={'IBAN'}>
              <Field name={'directDebitIban'} />
            </FieldWrapper>
          </div>
        );
      case 'bill':
        return <div className="checkout-form__paymentOption-bill" />;
    }
  };

  console.log(values);
  return (
    <div className="payment">
      <h5>Wählen Sie ihre Zahlungsart</h5>
      <div className="payment__option">
        <Field component="select" name="paymentOption" placeholder="Bitte Auswählen">
          <option value="0">Bitte auswählen</option>
          <option value="bill">Rechnung</option>
          <option value="directDebit">Überweisung</option>
          <option value="creditCard">Kreditkarte</option>
        </Field>
      </div>
      <div className="payment__context">{paymentOptionRender()}</div>
    </div>
  );
};

PaymentOptions.propTypes = {};

export default PaymentOptions;
