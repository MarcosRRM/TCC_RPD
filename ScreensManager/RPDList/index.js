import React from 'react';
import {FlatList, View} from 'react-native';
import RPDCard from './RPDCard';
import Tools from '../../TestTools';

const data = [
  {title:'Meu RPD I'  , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {title:'Meu RPD III', date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {title:'Meu RPD IV' , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {title:'Meu RPD II' , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {title:'Meu RPD I'  , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {title:'Meu RPD III', date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {title:'Meu RPD IV' , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  {title:'Meu RPD II' , date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))},
  
]

export default class App extends React.Component{
  render(){
    return (
      <>
        <FlatList
        data={data}
        style={{width:'90%',marginRight:'auto', marginLeft:'auto'}}
        renderItem={({item})=>{
          return(
            <RPDCard
            rpdData = {item}
            editorCallback={this.props.showScreen}
            />
          ); 
        }}
        keyExtractor={(_,index)=>index.toString()}
        ItemSeparatorComponent={separator}
        />
      </>
    );
  }
};

const separator = () => <View style={{flex:1, height: 10}}/>