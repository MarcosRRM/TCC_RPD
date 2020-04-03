import React from 'react';
import {FlatList, View} from 'react-native';
import RPDCard from './RPDCard';
import Tools from '../../TestTools';
import ThemeContext from '../../Contexts/ThemeContext';

const data = [
  {tittle:'Meu RPD I'  , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {tittle:'Meu RPD III', date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {tittle:'Meu RPD IV' , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {tittle:'Meu RPD II' , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {tittle:'Meu RPD I'  , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {tittle:'Meu RPD III', date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {tittle:'Meu RPD IV' , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {tittle:'Meu RPD II' , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  
]

export default class App extends React.Component{
  render(){
    return (
      <ThemeContext.Consumer>{(theme)=>
        <FlatList
        data={data}
        style={{width:'90%',marginRight:'auto', marginLeft:'auto'}}
        renderItem={({item})=>{
          return(
            <RPDCard
            tittle={item.tittle}
            date={item.date}
            />
          ); 
        }}
        keyExtractor={(_,index)=>index.toString()}
        ItemSeparatorComponent={separator}
        />
      }</ThemeContext.Consumer>
    );
  }
};

const separator = () => <View style={{flex:1, height: 10}}/>