import RPDEditor from './RPDEditor';
import RPDList from  './RPDList';
import APPLogin from './AppLogin';
import ConfigScreen from './ConfigScreen';
import NewAccount from './NewAccount';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';

const ScreenComponents = [
  {name: 'RPDEditor', component: RPDEditor},
  {name: 'RPDList', component: RPDList},
  {name: 'ConfigScreen', component: ConfigScreen},
  
  {name: 'APPLogin', component: APPLogin},
  {name: 'NewAccount', component: NewAccount},
  {name: 'ChangePassword', component: ChangePassword},
  {name: 'ForgotPassword', component: ForgotPassword},
]

const SetUpScreenList = (_initialScreen) => {
  let ret = {};
  for (let scr of ScreenComponents){
    ret[scr.name] = {
      show: scr.name === _initialScreen ? true : false,
      component: scr.component,
      props: {}
    }
  }
  return ret;
}

export {
  SetUpScreenList
}