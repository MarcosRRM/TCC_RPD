import React from 'react';
import {View} from 'react-native';
import {WithThemeContext} from '../Contexts/ThemeContext';

@WithThemeContext
export default class Header extends React.Component {
  render(){
    return(
      <View style={{
        height:60,
        width: '100%',
        backgroundColor: this.props.theme.Header.Background,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 100,
        padding: 5,
        color:this.props.theme.Header.Foreground,
        elevation: 24
      }}>
        {this.props.children}
      </View>
    );
  }
}