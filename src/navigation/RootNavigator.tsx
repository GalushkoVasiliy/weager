import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationKey from './NavigationKey';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import styles from './styles';
import SingleCity from '../screens/SingleCity/SingleCity';

const Stack = createStackNavigator();

const RootNavigator: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // animationEnabled: false,
          cardOverlayEnabled: false,
          cardShadowEnabled: false,
          cardStyle: styles.cardStyle,
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitle,
        }}
        initialRouteName={NavigationKey.Home}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={NavigationKey.Home}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={NavigationKey.SingleCity}
          component={SingleCity}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootNavigator);
