

import React from 'react';
import { SafeAreaView } from 'react-native';
import RPDList from './screens/RPDList';
import ThemeContextProvider from './SharedComponents/ThemeContextProvider';

export default class App extends React.Component{

  render(){
    return (
      <ThemeContextProvider>
        <SafeAreaView>
          <RPDList/>
        </SafeAreaView>
      </ThemeContextProvider>
    );
  }
};
