import React from 'react';
import { SafeAreaView } from 'react-native';
import ScreenManager from './ScreensManager';
import ThemeContextProvider from './SharedComponents/ThemeContextProvider';



export default class App extends React.Component{

  render(){
    return (
      <ThemeContextProvider>
        <SafeAreaView>
          <ScreenManager/>
        </SafeAreaView>
      </ThemeContextProvider>
    );
  }
};
