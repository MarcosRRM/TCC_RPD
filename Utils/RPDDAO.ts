import Tools from './TestTools';
import {iRPD} from '../Models/RPD';
import md5 from 'md5';
import AsyncStorage from '@react-native-community/async-storage';

export default {
  async getAllRPD():Promise<iRPD[]>{

    let list = [];

    try{
      let item = await AsyncStorage.getItem('rpdList');
      list = JSON.parse(item) || [];
      list.forEach((rpd)=>{
        rpd.DateTime = new Date(rpd.DateTime);
        rpd.LastUpdate = new Date(rpd.LastUpdate);
      })
    }
    catch(e){
      console.log(e);
    }
    return list;
  },

  async saveAllRPD(rpd:iRPD[]):Promise<{ok:boolean,error?:string}>{
    try{
      AsyncStorage.setItem('rpdList',JSON.stringify(rpd));
      return {ok:true};
    }
    catch(e){
      return {ok:false, error:e};
    }
  },

  async deleteRPD(id:number):Promise<{ok:boolean,error?:string}>{
    return { ok: true }
  },

  async clearAll():Promise<void>{
    AsyncStorage.removeItem('rpdList');
  }
}