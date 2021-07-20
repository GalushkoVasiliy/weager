import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import {getStore} from './src/store/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppInitializer from './AppInitializer';
import AppLoading from './AppLoading';

const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  const isDarkMode = useColorScheme() === 'dark';
  const {store, persistor} = getStore();

  const onAnimationFinish = useCallback(() => {
    setAnimationFinished(true);
  }, []);

  useEffect(() => {
    console.log(client);

    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={async () => {
          await AppInitializer.initAsync();
        }}
        onFinish={() => setIsReady(true)}
        onError={error => console.log(error)}
      />
    );
  }

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
