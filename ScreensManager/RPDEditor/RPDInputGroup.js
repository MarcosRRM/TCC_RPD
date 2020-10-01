import React from 'react';
import {View} from 'react-native';
import { WithThemeContext } from '../../Contexts/WithContexts';

@WithThemeContext
export default class RPDInputGroup extends React.Component{
  render(){
    return(
      <View
      style={{
        borderRadius: 5,
        backgroundColor:this.props.theme.Background.Second,
        padding:5,
        marginTop: 5,
        marginBottom: 10
      }}>
        {this.props.children}
      </View>
    );
  }
}