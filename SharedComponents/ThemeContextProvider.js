import React from 'react';
import {LightTheme, DarkTheme} from '../Styling/Colors';
import {ThemeContext} from '../Contexts/ThemeContext';

export default class ThemeContextProvider extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isLightTheme: true
    }
  }

  //#region HANDLERS & Functions
  handleThemeChange = () => {
    this.setState({isLightTheme: !this.state.isLightTheme})
  }

  getCurrentTheme = () => this.state.isLightTheme ? LightTheme : DarkTheme;
  //#endregion


  render(){
    return(
      <ThemeContext.Provider
      value={{
        changeTheme: this.handleThemeChange,
        ...this.getCurrentTheme()
      }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}