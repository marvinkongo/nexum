import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const FieldGroup = ({children}) => {
  return <div className={'field-group'}>{children}</div>;
};

FieldGroup.propTypes = {};

export default FieldGroup;
