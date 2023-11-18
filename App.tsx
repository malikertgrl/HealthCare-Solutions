import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import {Router} from './src/navigation/Router';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    </Provider>
    // <SafeAreaView >
    //   {/* <Home /> */}
    //   {/* <Text>App</Text> */}
    // </SafeAreaView>
  );
};

export default App;
