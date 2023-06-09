import { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

import { IconSvg } from '../IconSvg';

export const Clock = (props: SvgProps) => (
  <IconSvg width={14} height={14} fill="none" {...props}>
    <G clipPath="url(#clip0_1021_5349)">
      <Path
        d="M7 12.833A5.833 5.833 0 117 1.167a5.833 5.833 0 010 11.666zm0-1.166a4.666 4.666 0 100-9.333 4.666 4.666 0 000 9.333zM7.583 7h2.334v1.167h-3.5V4.083h1.166V7z"
        fill="#4E4B66"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1021_5349">
        <Path fill="#fff" d="M0 0H14V14H0z" />
      </ClipPath>
    </Defs>
  </IconSvg>
);
