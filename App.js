import React from 'react';
import { SafeAreaView } from 'react-native';
import ScreenManager from './ScreensManager';
import ThemeContextProvider from './ContextComponents/ThemeContextProvider';
import RPDContextProvider from './ContextComponents/RPDContextProvider';



export default class App extends React.Component{

  render(){
    return (
      <ThemeContextProvider>
        <RPDContextProvider>
          <SafeAreaView>
            <ScreenManager/>
          </SafeAreaView>
        </RPDContextProvider>
      </ThemeContextProvider>
    );
  }
};
