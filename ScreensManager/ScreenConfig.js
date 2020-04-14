import RPDEditor from './RPDEditor';
import RPDList from  './RPDList';

const ScreenComponents = [
  {name: 'RPDEditor', component: RPDEditor},
  {name: 'RPDList', component: RPDList}
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