import styled from '@emotion/native';

export type ImageParams = {
  borderRadius?: number;
  height?: number;
  width?: number;
};

export const CustomImage = styled.Image(({ height = 70, width = 70, borderRadius = 8 }: ImageParams) => ({
  height,
  width,
  marginRight: 6,
  borderRadius,
}));
