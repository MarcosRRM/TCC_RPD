import React from 'react';
import {TextInput} from 'react-native';

export default class UserInfoInput extends React.Component{
  
  static defaultProps={
    style:[]
  }

  render(){
    return (
      <TextInput
      {...this.props}
      style={[
        {
          borderBottomWidth:2,
          borderBottomColor: 'white'
        },
        ...this.props.style
      ]}
      />
    );
  }
}