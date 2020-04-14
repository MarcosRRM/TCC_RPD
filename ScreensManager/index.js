import React from 'react';
import {SetUpScreenList} from './ScreenConfig';

export default class ScreensManager extends React.Component{

  constructor(props){
    super(props);
    const list = SetUpScreenList('RPDList');
    this.state = {
      ScreenList:list,
      ScreenNames: Object.keys(list)
    }
  }

  handleShowScreen = (_screenName, _props) => {
    let currentList = this.state.ScreenList;

    if(this.state.ScreenNames.find( (scr) => scr === _screenName) ){
      this.state.ScreenNames.forEach( (scr) => {
        let isSelected          = scr === _screenName;
        currentList[scr].show   = isSelected;
        currentList[scr].props  = isSelected ? _props : {};
      });
    }
    this.setState({ScreenList:currentList});
  }

  render(){
    let ScreenToRender = {};

    for (const scr of this.state.ScreenNames){
      if (this.state.ScreenList[scr].show){
        ScreenToRender = this.state.ScreenList[scr];
        break;
      }
    };

    let ComponentToRender = ScreenToRender.component

    return <ComponentToRender {...{...ScreenToRender.props, showScreen:this.handleShowScreen}}/>;
  }
}