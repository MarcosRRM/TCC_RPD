import React from 'react';
import {View} from 'react-native';

export default class Header extends React.Component {
  render(){
    return(
      <View style={{
        height:60,
        width: '100%',
        backgroundColor: 'pink',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 100,
        padding: 5
      }}>
        {this.props.children}
      </View>
    );
  }
}