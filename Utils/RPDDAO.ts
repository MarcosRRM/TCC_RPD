import Tools from './TestTools';

function rpdMock (_a,_b,_c,_d,_e,_f,_g) {
  return {
    id: _a,
    title: _b,
    situation: _c,
    autoThoughts: _d,
    emotion: _e,
    conclusion: _f,
    result: _g,
    date:new Date(2020,Tools.randomInt(1,12),Tools.randomInt(1,28))
  }
}

export default {
  getAllRPD(){
    // TO DO
    // MOCK
    let ret = [];
    for (let i = 1;i<=10;i++){
      ret.push(
        rpdMock(
          i,
          'Meu RPD '+i,
          'Fusce non leo fermentum, consectetur metus in, condimentum lorem.',
          'Nunc a ligula nec risus aliquam fermentum ut sit amet felis.',
          'Morbi vitae metus non dolor bibendum volutpat.',
          'Etiam posuere augue in ultrices maximus.',
          'Vivamus non lectus eget tellus maximus iaculis eu non velit.'
        )
      )
    }
    return ret;
  }
}