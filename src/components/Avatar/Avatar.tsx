import { ComponentType } from 'react';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { CustomImage, Typography } from 'components';

import { AvatarBox, imgSizes } from './Avatar.styled';
import { Size } from './Avatar.types';

export type AvatarProps = {
  AvatarImg: string | ComponentType<SvgProps>;
  text?: string;
  size?: Size;
  style?: ViewStyle;
};

export const Avatar = ({ AvatarImg, text, size = 'small', style }: AvatarProps) => {
  return (
    <AvatarBox style={style}>
      {typeof AvatarImg === 'string' ? (
        <CustomImage source={{ uri: AvatarImg }} style={imgSizes[size]} />
      ) : (
        <AvatarImg style={[imgSizes[size], { marginRight: 4 }]} />
      )}
      {text && <Typography>{text}</Typography>}
    </AvatarBox>
  );
};
