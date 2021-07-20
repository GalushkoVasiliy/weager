import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/redux/store';

const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const onAnimationFinish = useCallback(() => {
    setAnimationFinished(true);
  }, []);

  useEffect(() => {
    console.log(client);
  }, []);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {client && (
        <ApolloProvider client={client}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RootNavigator />
            </PersistGate>
          </Provider>
        </ApolloProvider>
      )}
      {!animationFinished && (
        <SplashScreen onAnimationFinish={onAnimationFinish} />
      )}
    </>
  );
};

export default App;
