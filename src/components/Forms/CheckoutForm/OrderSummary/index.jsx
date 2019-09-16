import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from '../../FieldWrapper';
import './style.scss';
const OrderSummary = ({handleChange, takeBillingAddress, values}) => {
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
    paymentOption
  } = values;

  const paymentOptionMap = {
    bill: 'Rechnung',
    creditCard: 'Kreditkarte',
    directDebit: 'Bankeinzug'
  };

  const [conditions, setConditions] = useState(true);
  return (
    <Fragment>
      <div className={'order-summary__information'}>
        <div className={'order-summary__billing-address'}>
          <h5>Rechnungsadresse:</h5>
          {baGender}
          <br />
          {baSurname} {baLastname}
          <br />
          {baStreetAndNumber}
          <br />
          {baZipCode} {baCity}
          <br />
          {baMail}
          <br />
          {baPhoneNumber}
        </div>
        <div className={'order-summary__delivery-address'}>
          <h5>Lieferadresse:</h5>
          {takeBillingAddress ? (
            <Fragment>
              {baGender}
              <br />
              {baSurname} {baLastname}
              <br />
              {baStreetAndNumber}
              <br />
              {baZipCode} {baCity}
              <br />
            </Fragment>
          ) : (
            <Fragment>
              {daGender}
              <br />
              {daSurname} {daLastname}
              <br />
              {daStreetAndNumber}
              <br />
              {daZipCode} {daCity}
            </Fragment>
          )}
        </div>
        <div className="order-summary__payment">Gewählte Zahlungsoption: {paymentOptionMap[paymentOption]}</div>
      </div>
      <div className={'order-summary__options'}>
        <FieldWrapper
          fieldName="newsletter"
          label={'Newsletter Abonnieren'}
          styleOverwrite={{marginBottom: '0px'}}
          type={'horizontal'}>
          <input type="checkbox" name="newsletter" onChange={handleChange} />
        </FieldWrapper>
        <FieldWrapper
          fieldName="newsletter"
          label={"Ich habe die AGB's gelesen und bin einverstanden"}
          type={'horizontal'}
          styleOverwrite={{marginBottom: '0px'}}>
          <input type="checkbox" value={'Newsletter Abonnieren'} onChange={e => setConditions(!e.target.checked)} />
        </FieldWrapper>
      </div>
      <button className={'order-summary__submit'} disabled={conditions} type={'submit'}>
        Bestellen
      </button>
    </Fragment>
  );
};

OrderSummary.propTypes = {};

export default OrderSummary;
