import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { MainNavigator } from './src/navigation/MainNavigator';
import { store } from './src/redux/store';
import Toast from 'react-native-toast-message';

// ✅ Add this log to verify the store is created correctly
console.log('Store:', store);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
