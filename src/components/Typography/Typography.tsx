import { PropsWithChildren } from 'react';
import { Text, TextStyle } from 'react-native';

import { styles } from './Typography.styled';
import { FontWeights, TypographyColors, TypographyVariants } from './Typography.types';

type TypographyProps = {
  variant?: TypographyVariants;
  color?: TypographyColors;
  weight?: FontWeights;
  style?: TextStyle | TextStyle[];
};

export const Typography = ({
  variant = 'body1',
  color = 'black',
  weight = FontWeights.Regular,
  children,
  style,
}: PropsWithChildren<TypographyProps>) => {
  return <Text style={[styles.font, styles[variant], styles[color], { fontWeight: weight }, style]}>{children}</Text>;
};
