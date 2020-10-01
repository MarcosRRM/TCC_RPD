import React from 'react';
import {LightTheme, DarkTheme} from '../Styling/Colors';
import {ThemeContext} from '../Contexts/ContextsBase';
import AsyncStorage from '@react-native-community/async-storage';

export default class ThemeContextProvider extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      loaded: true,
      isLightTheme: true
    }
  }

  //#region Lifecycle Functions
  async componentDidMount(){
    try{
      item = await AsyncStorage.getItem('Theme');
      this.setState({isLightTheme:JSON.parse(item), loaded:true});

    }
    catch(error){
      this.setState({loaded:false},AsyncStorage.setItem('Theme','false'));
    }
  }
  //#endregion

  //#region HANDLERS & Functions
  handleThemeChange = async () => {
    try{
      await AsyncStorage.setItem('Theme', JSON.stringify(!this.state.isLightTheme));
      this.setState({isLightTheme: !this.state.isLightTheme});
    }
    catch (error) {
    }
  }

  getCurrentTheme = () => this.state.isLightTheme ? LightTheme : DarkTheme;
  //#endregion


  render(){
    return(
      this.state.loaded ?
        <ThemeContext.Provider
        value={{
          changeTheme: this.handleThemeChange,
          isLightTheme: this.state.isLightTheme,
          ...this.getCurrentTheme()
        }}
        >
          {this.props.children}
        </ThemeContext.Provider>
      :
      <></>
    )
  }
}