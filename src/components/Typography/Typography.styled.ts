import { COLOR_BLUE, COLOR_ERROR, COLOR_TEXT_BLACK, COLOR_TEXT_GRAY, COLOR_TEXT_WHITE } from 'theme';

import { FontWeights } from './Typography.types';

export const styles = {
  font: {
    fontFamily: 'Roboto',
  },
  h1: {
    fontWeight: FontWeights.Bold,
    fontSize: 32,
    lineHeight: 48,
  },
  h2: {
    fontWeight: FontWeights.Regular,
    fontSize: 24,
    lineHeight: 36,
  },
  h3: {},
  h4: {},
  h5: {},
  body1: {
    fontWeight: FontWeights.Regular,
    fontSize: 16,
    lineHeight: 20,
  },
  body2: {
    fontWeight: FontWeights.Regular,
    fontSize: 13,
    lineHeight: 21,
  },
  caption: {
    fontWeight: FontWeights.Regular,
    fontSize: 14,
    lineHeight: 21,
  },
  white: {
    color: COLOR_TEXT_WHITE,
  },
  black: {
    color: COLOR_TEXT_BLACK,
  },
  gray: {
    color: COLOR_TEXT_GRAY,
  },
  blue: {
    color: COLOR_BLUE,
  },
  error: {
    color: COLOR_ERROR,
  },
};
