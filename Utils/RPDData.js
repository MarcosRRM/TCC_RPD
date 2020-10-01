import RPDDAO from './RPDDAO';
import AxiosClient from './AxiosClient';
import Axios from 'axios';
import EndPoints from './EndPoints';


export default {
  Ready: false,
  RPDList: [],
  LastSynced: new Date(0,0,1),

  removeRPD(index){
    let currentList = this.state.RPDList;
    currentList.splice(index,1);
    this.setState({RPDList : currentList}, this.saveAllRPD);
  }

}