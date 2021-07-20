export type NavigationKeyType = 'Home' | 'MainNavigator' | 'SingleCity';

const NavigationKey: {[key in NavigationKeyType]: NavigationKeyType} = {
  Home: 'Home',
  MainNavigator: 'MainNavigator',
  SingleCity: 'SingleCity',
};

export default NavigationKey;
