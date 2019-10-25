function truthCheck(collection, pre) {
  for (let i in collection) {
    if (!(Boolean(collection[i][pre])) || !(collection[i].hasOwnProperty(pre))) {
        return false;
    } 
  }
  return true;
}

  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  