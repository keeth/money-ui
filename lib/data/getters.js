import R from 'ramda';

export const ccValues = R.pathOr({}, ['form', 'cc', 'values']);
export const ccCountry = R.pathOr('United States', ['form', 'cc', 'values', 'country']);
export const cvcFocus = R.pathOr(false, ['focus', 'cc', 'cvc']);
