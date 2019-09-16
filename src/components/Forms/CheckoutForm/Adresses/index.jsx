import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from '../../FieldWrapper';
import {connect, Field} from 'formik';
import './style.scss';
import FieldGroup from '../../FieldGroup';

const Addresses = ({takeBillingAddress, setTakeBillingAddress, formik}) => {
  const handleChangeBaTake = () => {
    setTakeBillingAddress(!takeBillingAddress);
  };
  return (
    <div className={'addresses'}>
      <div className="addresses__billing-address">
        <h5>Rechnungsadresse</h5>
        <div style={{height: '33px'}}></div>
        <FieldWrapper fieldName={'baGener'} label={'Anrede'}>
          <Field component="select" name="baGender">
            <option value={false}>Bitte auswählen</option>
            <option value="Frau">Frau</option>
            <option value="Herr">Herr</option>
          </Field>
        </FieldWrapper>
        <FieldWrapper fieldName={'baSurname'} label={'Vorname'}>
          <Field name="baSurname" placeholder="Vorname" />
        </FieldWrapper>
        <FieldWrapper fieldName={'baLastname'} label={'Nachname'}>
          <Field name="baLastname" placeholder="Nachname" />
        </FieldWrapper>
        <FieldWrapper fieldName={'baStreetAndNumber'} label={'Straße und Hausnummer'}>
          <Field name="baStreetAndNumber" placeholder="Straße und Hausnummer" />
        </FieldWrapper>
        <FieldWrapper fieldName={'baCity'} label={'Stadt'}>
          <Field name="baCity" placeholder="Stadt" />
        </FieldWrapper>
        <FieldWrapper fieldName={'baZipCode'} label={'Postleitzahl'}>
          <Field name="baZipCode" placeholder="Postleitzahl" />
        </FieldWrapper>
        <FieldWrapper name="baPhoneNumber" label="Telefonnummer">
          <Field name={'baPhoneNumber'} placeholder={'Telefonnummer'} />
        </FieldWrapper>
        <FieldWrapper name="baMail" label="E-Mail">
          <Field name={'baMail'} placeholder={'E-Mail'} />
        </FieldWrapper>
      </div>
      <div className="addresses__delivery-address">
        <h5>Lieferadresse</h5>
        <FieldWrapper fieldName={'takeBillingAddress'} type="horziontal" label="Rechnungsadresse übernehmen">
          <input type="checkbox" name="takeBillingAddress" onClick={handleChangeBaTake} />
        </FieldWrapper>
        {!takeBillingAddress && (
          <Fragment>
            <FieldWrapper fieldName={'daGender'} label={'Anrede'}>
              <Field component="select" name="daGender">
                <option value={false}>Bitte auswählen</option>
                <option value="Frau">Frau</option>
                <option value="Herr">Herr</option>
              </Field>
            </FieldWrapper>
            <FieldWrapper fieldName={'daSurname'} label={'Vorname'}>
              <Field name="daSurname" placeholder="Vorname" />
            </FieldWrapper>
            <FieldWrapper fieldName={'daLastname'} label={'Nachname'}>
              <Field name="daLastname" placeholder="Nachname" />
            </FieldWrapper>
            <FieldWrapper fieldName={'daStreetAndNumber'} label={'Straße und Hausnummer'}>
              <Field name="daStreetAndNumber" placeholder="Straße und Hausnummer" />
            </FieldWrapper>
            <FieldWrapper fieldName={'daCity'} label={'Stadt'}>
              <Field name="daCity" placeholder="Stadt" />
            </FieldWrapper>
            <FieldWrapper fieldName={'daZipCode'} label={'Postleitzahl'}>
              <Field name="daZipCode" placeholder="Postleitzahl" />
            </FieldWrapper>
          </Fragment>
        )}
      </div>
    </div>
  );
};

Addresses.propTypes = {};

export default connect(Addresses);
