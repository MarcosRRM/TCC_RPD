import React from 'react';
import {View} from 'react-native';
import {WithThemeContext} from '../Contexts/ContextsExport';

@WithThemeContext
export default class Header extends React.Component {
  render(){
    return(
      <View style={{
        height:60,
        width: '100%',
        backgroundColor: this.props.theme.Background.Second,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 100,
        padding: 3,
        color:this.props.theme.Header.Foreground,
        elevation: 5
      }}>
        {this.props.children}
      </View>
    );
  }
}