function addTogether() {

    if (typeof arguments[0] === 'number') {
      let x = arguments[0]
     // if only one arg, return a fn that expects one arg and returns the sum.
      if (arguments[1] === undefined) {
        return function(y) {
          if (typeof y === 'number') {
            return (parseInt(x) + parseInt(y));            
          }
        }
      } else if (typeof arguments[1] === 'number') {
        let x = arguments[0];
        let y = arguments[1];
        return (parseInt(x) + parseInt(y));
      }
    }
    return undefined; 
}

addTogether(2,3);
