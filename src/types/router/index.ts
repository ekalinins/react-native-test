import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Explore: undefined;
  NewsDetails: { productId?: string };
  Bookmarks: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<MainStackParamList, T>;

export type RootStackNavigationProp<Screen extends keyof MainStackParamList> = NativeStackNavigationProp<
  MainStackParamList,
  Screen
>;
