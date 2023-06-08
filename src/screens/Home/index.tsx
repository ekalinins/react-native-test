import { Button, View } from 'react-native';
import { routes } from 'app-constants';
import { MainStackParamList, RootStackScreenProps } from 'types';

export const Home = ({ navigation }: RootStackScreenProps<'Home'>) => {
  const handleNavigateToScreen = (screenPath: keyof MainStackParamList) => {
    navigation.navigate(screenPath as any);
  };

  return (
    <View>
      {Object.values(routes).map(({ path, name }) => (
        <Button key={name} title={name} onPress={() => handleNavigateToScreen(path)} />
      ))}
    </View>
  );
};
