export const ValidateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-_]+(\.[a-zA-Z]{2,})+$/.test(email);

export const ValidatePW = (password) => {

  //Minimum size
  if (password.length < 8){
    return false;
  }

  //Lower Case Characters
  if (!password.match(/[a-z]/g)){
    return false;
  }

  //Upper Case Characters
  if (!password.match(/[A-Z]/g)){
    return false;
  }

  //Numbers and special characters
  if (!password.match(/[0-9\'\"\!\@\#\$\%\&\*\(\)\_\-\+\=\{\[\}\]\<\,\>\.\:\;\?\/]/)){
    return false;
  }

  return true;
}

export const ValidateName = (name) => {

  if (name.length < 5) return false;
  
  if (name.match(/[0-9\'\"\!\@\#\$\%\&\*\(\)\_\-\+\=\{\[\}\]\<\,\>\.\:\;\?\/]/)) return false;

  let splited = name.split(' ');

  if (splited.length < 2) return false;

  for (let n of splited){
    if (n.length < 2 ) return false;
  }

  return true;
}