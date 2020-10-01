import React from 'react';
import RPDDAO from '../Utils/RPDDAO';
import {RPDContext} from '../Contexts/ContextsBase';
import AxiosClient from './../Utils/AxiosClient';
import EndPoints from './../Utils/EndPoints';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import { WithModalContext } from '../Contexts/WithContexts';

@WithModalContext
export default class RPDContextProvider extends React.Component{

  state={
    Ready: false,
    RPDList: [],
    LastSynced: new Date(0,0,1),
    CheckedCloud : false
  }

  loadCloud = async () => {
    if (this.state.RPDList.length===0){
      this.props.ModalCtx.showModal('Loading',{message:'Carregando registros em núvem...'});
      await AxiosClient.get(EndPoints.UserRPDs)
      .then((response)=>{
        let parsed = response.data;
        parsed.forEach(rpd => {
          rpd.DateTime = new Date(rpd.DateTime);
          rpd.LastUpdate = new Date(rpd.LastUpdate);
        });

        let finalState = {
          RPDList:parsed
        };

        if (parsed.length > 0) { finalState.LastSynced = new Date(); }

        this.setState(finalState);
      })
      .catch((error)=>{
        Alert.alert('Não foi possível buscar registros em núvem.', 'Tente novamente mais tarde.',
        [
          {
            text:'OK', onPress: async ()=>{
              AuthData.clear(true);
              await this.props.RPDCtx.clear(true);
              this.props.showScreen('APPLogin');
            }
          }
        ])
      })
      .finally(()=>{
        this.setState({CheckedCloud:true});
        this.props.ModalCtx.showModal();
      });
    }
  }

  async componentDidMount(){
    await this.loadLocal();    
  }

  loadLocal = async () =>{
    this.setState({
      RPDList : await RPDDAO.getAllRPD(),
      LastSynced : await AsyncStorage.getItem('LastSynced').catch(()=>new Date(0,0,1)),
      Ready   : true
    });
  }

  syncRequest = async () => {
    let updatedList = this.state.RPDList;

    return AxiosClient.post(EndPoints.Sync, this.state.RPDList)
    .then(response=>{
      for(let added of response.data.Added){
        let foundIndex = this.state.RPDList.findIndex(rpd=>(
          rpd.Title                 === added.Title &&
          rpd.DateTime.getTime()    === new Date(added.DateTime).getTime() &&
          rpd.Situation             === added.Situation &&
          rpd.AutoThoughts          === added.AutoThoughts &&
          rpd.Emotion               === added.Emotion &&
          rpd.Outcome               === added.Outcome &&
          rpd.Result                === added.Result &&
          rpd.LastUpdate.getTime()  === new Date(added.LastUpdate).getTime()
        ));
        if (foundIndex>=0){
          updatedList[foundIndex].ID = added.ID;
          updatedList[foundIndex].PersonID = added.PersonID;
        }
      }
      this.setState({RPDList:updatedList, LastSynced: new Date()}, this.saveAllRPD);
    })
  }

  saveAllRPD = () => {
    RPDDAO.saveAllRPD(this.state.RPDList);
  }

  addOrSaveRPD = (newRpd,index=-1) => {

    let currentList = this.state.RPDList;
    if(index<0){
      currentList.push(newRpd);
    }
    else{
      currentList[index] = newRpd;
    }
    
    this.setState({RPDList : currentList},this.saveAllRPD);
  }

  removeRPD = (index) => {
    let currentList = this.state.RPDList;
    currentList.splice(index,1);
    this.setState({RPDList : currentList}, this.saveAllRPD);
  }

  clear = async (clearStorage=false) => {
    this.setState({RPDList:[], CheckedCloud: false});
    clearStorage && await RPDDAO.clearAll();
    clearStorage && await AsyncStorage.removeItem('LastSynced');
  }

  render(){
    return(
      <RPDContext.Provider
      value={{
        ...this.state,
        loadLocal: this.loadLocal,
        removeRPD: this.removeRPD,
        addOrSaveRPD: this.addOrSaveRPD,
        saveAllRPD : this.saveAllRPD,
        syncRequest : this.syncRequest,
        loadCloud: this.loadCloud,
        clear : this.clear
      }}
      >
        {this.state.Ready && this.props.children}
      </RPDContext.Provider>
    );
  }
}