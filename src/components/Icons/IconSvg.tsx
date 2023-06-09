import { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native/types';
import Svg, { SvgProps } from 'react-native-svg';

export type IconSvgProps = {
  width: number | string;
  height: number | string;
  style?: StyleProp<ViewStyle>;
} & SvgProps;
export const IconSvg = ({ width, height, children, style, ...rest }: PropsWithChildren<IconSvgProps>) => (
  <Svg width={width} height={height} style={style} {...rest}>
    {children}
  </Svg>
);
