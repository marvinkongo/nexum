import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const PageIndicator = ({steps, activeStep}) => {
  return (
    <div className="page-indicator">
      {steps.map((step, index) => {
        return (
          <div
            key={index}
            className={cx('page-indicator__step', {'page-indicator__step--active': activeStep === index})}>
            <div className="page-indicator__step-count">{index + 1}</div>
            <div className="page-indicator__step-name">{step}</div>
          </div>
        );
      })}
    </div>
  );
};

PageIndicator.propTypes = {};

export default PageIndicator;
