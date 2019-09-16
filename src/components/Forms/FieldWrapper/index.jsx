import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const FieldWrapper = ({fieldName, label, children, type = 'vertical', styleOverwrite}) => {
  return (
    <div className={cx('field-wrapper', {[`field-wrapper--${type}`]: type})} style={styleOverwrite && styleOverwrite}>
      <label className={'field-wrapper__label'} htmlFor={fieldName}>
        {label}
      </label>
      <div className={'field-wrapper__child'}>{children}</div>
    </div>
  );
};

FieldWrapper.propTypes = {};

export default FieldWrapper;
