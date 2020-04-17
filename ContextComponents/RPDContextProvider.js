import React from 'react';
import RPDDAO from '../Utils/RPDDAO';
import {RPDContext} from '../Contexts/RPDContext';

export default class RPDContextProvider extends React.Component{

  state={
    RPDList: []
  }

  componentDidMount(){
    this.setState({
      RPDList:RPDDAO.getAllRPD()
    })
  }
  
  render(){
    return(
      <RPDContext.Provider value={{list:this.state.RPDList}}>
        {this.props.children}
      </RPDContext.Provider>
    );
  }

}