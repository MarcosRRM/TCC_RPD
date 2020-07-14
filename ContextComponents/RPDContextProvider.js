import React from 'react';
import RPDDAO from '../Utils/RPDDAO';
import {RPDContext} from '../Contexts/RPDContext';

export default class RPDContextProvider extends React.Component{

  state={
    Ready: false,
    RPDList: []
  }

  async componentDidMount(){
    this.setState({
      RPDList: await RPDDAO.getAllRPD(),
      Ready:true
    })
  }
  
  saveAllRPD = () => {
    RPDDAO.saveAllRPD(this.state.RPDList);
  }

  handleAddOrSaveRPD = (newRpd) =>{

    let currentList = this.state.RPDList;

    if(newRpd.Id ==='' ){
      let freeID = 1;
    
      while(true){
        if(currentList.find(rpd=>rpd.Id === freeID)){ freeID++; continue; }
        else{ break; }
      }

      newRpd.Id = freeID;

      currentList.push(newRpd);
    }
    else{
      let index = currentList.findIndex((rpd)=>rpd.Id===newRpd.Id);
      currentList[index] = newRpd;
    }
    
    this.setState({RPDList:currentList},this.saveAllRPD());
  }

  handleRemoveRPD = (Id) => {
    let currentList = this.state.RPDList;

    let index = currentList.findIndex(rpd=>rpd.Id === Id);
    currentList.splice(index,1);

    this.setState({RPDList:currentList},this.saveAllRPD);
  }

  render(){
    console.log('LIST:', this.state.RPDList)
    return(
      <RPDContext.Provider
      value={{
        list:this.state.RPDList,
        addOrSaveRPD:this.handleAddOrSaveRPD,
        removeRPD:this.handleRemoveRPD
      }}
      >
        {this.state.Ready && this.props.children}
      </RPDContext.Provider>
    );
  }

}