import styled from '@emotion/native';

import { SizesProps } from './Avatar.types';

export const AvatarBox = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

export const imgSizes: SizesProps = {
  extraSmall: {
    width: 12,
    height: 12,
  },
  small: {
    width: 20,
    height: 20,
  },
  medium: {
    width: 70,
    height: 70,
  },
  big: {
    width: 96,
    height: 96,
  },
};
