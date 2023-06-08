import { Text, View } from 'react-native';
import { RootStackScreenProps } from 'types';

export const NewsDetails = ({ navigation, route }: RootStackScreenProps<'NewsDetails'>) => {
  console.log(route);
  return (
    <View>
      <Text>NewsDetails</Text>
    </View>
  );
};
