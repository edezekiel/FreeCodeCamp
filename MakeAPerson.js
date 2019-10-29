const Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];
  
    this.getFirstName = () => { return firstName},
    this.getLastName = () => { return lastName},
    this.getFullName = () => { return firstName.concat(" ").concat(lastName) },
  
    this. setFirstName = (first) => { firstName = first},
    this.setLastName = (last) => { lastName = last},
    this.setFullName = (firstAndLast) => { 
      firstName = firstAndLast.split(" ")[0];
      lastName = firstAndLast.split(" ")[1];  
    }
  };
  
  const bob = new Person('Bob Ross');
  console.log("This is bob, ", bob);
  bob.getFullName();
  