import { MainStackParamList } from 'types';

export type RoutesType = {
  [key in keyof MainStackParamList]: {
    path: keyof MainStackParamList;
    name: string;
  };
};

export const routes: RoutesType = {
  Home: {
    path: 'Home',
    name: 'Home',
  },
  Explore: {
    path: 'Explore',
    name: 'Explore',
  },
  NewsDetails: {
    path: 'NewsDetails',
    name: 'News Details',
  },
  Bookmarks: {
    path: 'Bookmarks',
    name: 'Bookmarks',
  },
  Profile: {
    path: 'Profile',
    name: 'Profile',
  },
};
