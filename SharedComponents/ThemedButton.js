import React from 'react';
import {Button} from 'react-native';

export default class ThemedButton extends React.Component{
  render(){
    return(
      <Button {...this.props}/>
    );
  }
}