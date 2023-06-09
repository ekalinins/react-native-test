import { createStackNavigator } from '@react-navigation/stack';
import { Bookmarks, Explore, Home, NewsDetails, Profile } from 'screens';
import { MainStackParamList } from 'types';

const RouteStack = createStackNavigator<MainStackParamList>();

export const Router = () => {
  return (
    <RouteStack.Navigator
      screenOptions={{ headerShown: false, cardStyle: { paddingHorizontal: 20 } }}
      initialRouteName="Home"
    >
      <RouteStack.Screen name="Home" component={Home} />
      <RouteStack.Screen name="Explore" component={Explore} />
      <RouteStack.Screen name="Bookmarks" component={Bookmarks} />
      <RouteStack.Screen name="Profile" component={Profile} />
      <RouteStack.Screen name="NewsDetails" component={NewsDetails} />
    </RouteStack.Navigator>
  );
};
