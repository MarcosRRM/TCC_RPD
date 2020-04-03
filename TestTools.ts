export default {
  randomInt(_from:number,_to:number){
    return Math.floor(Math.random() * (_to-_from)) + _from;
  },
  randomFloat(_from:number,_to:number){
    let roundedTo = Math.round(_to);
    let roundedFrom = Math.round(_from);
    return (Math.random() * (roundedTo-roundedFrom)) + roundedFrom;
  }
}