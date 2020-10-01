import React from 'react';
import { SafeAreaView } from 'react-native';
import ScreenManager from './ScreensManager';
import ThemeContextProvider from './ContextComponents/ThemeContextProvider';
import ModalContextProvider from './ContextComponents/ModalcontextProvider';
import RPDContextProvider from './ContextComponents/RPDContextProvider';

export default class App extends React.Component{
  render(){
    return (
      <ThemeContextProvider>
      <ModalContextProvider>
      <RPDContextProvider>

        <SafeAreaView>
          <ScreenManager/>
        </SafeAreaView>
      
      </RPDContextProvider>
      </ModalContextProvider>
      </ThemeContextProvider>
    );
  }
};
