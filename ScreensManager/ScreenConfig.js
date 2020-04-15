import RPDEditor from './RPDEditor';
import RPDList from  './RPDList';
import APPLogin from './AppLogin';

const ScreenComponents = [
  {name: 'RPDEditor', component: RPDEditor},
  {name: 'RPDList', component: RPDList},
  {name: 'APPLogin', component: APPLogin}
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