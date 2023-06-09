import { View } from 'react-native';
import { Avatar, Clock, CustomImage, InfoBlock, Typography } from 'components';

import { CardWrapper } from './NewsCard.styled';

export type NewsCardProps = {
  onPress?: () => void;
  image: string;
  timeAgo: string;
  category: string;
  mainText: string;
  sourceImage: string;
};

export const NewsCard = ({ category, timeAgo, mainText, sourceImage, image, onPress }: NewsCardProps) => {
  return (
    <CardWrapper onPress={onPress}>
      <CustomImage
        source={{
          uri: image,
        }}
      />
      <View style={{ flex: 1 }}>
        <Typography variant="body2">{category}</Typography>
        <Typography>{mainText}</Typography>
        <InfoBlock>
          <Avatar size="extraSmall" text={timeAgo} AvatarImg={sourceImage} />
          <Avatar size="extraSmall" text={timeAgo} AvatarImg={Clock} />
        </InfoBlock>
      </View>
    </CardWrapper>
  );
};
