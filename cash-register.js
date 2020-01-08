function checkCashRegister(price, cash, cid) {
    let changeStatus = {status: "INSUFFICIENT_FUNDS", change: []};
  
    let newCid = cid.map(function(arr) {
      return arr.slice();
    });
  
    // change due in coins and bills, sorted in highest to lowest order,
    let changeDue = cash - price;
    let totalChangeReceived = 0;
  
    // populate changeStatus.change based on changeDue and cid
  
      // loop over cid array in reverse
      for (let i = cid.length - 1; i >= 0; i--) {
        let cidUnit = cid[i][0];
        let cidAmount = cid[i][1];
        let currencyAmount = currencyLookup[cidUnit];
        
        // if changeDue is >= currencyAmount and cid[i][1] >= currencyAmount
        if (changeDue > 0 && changeDue >= currencyAmount && cidAmount > 0) {
  
          let changeUnitAmount;
  
          // number of times the unit of currency goes into changeDue.
          if (changeDue >= cidAmount) {
              changeUnitAmount = (changeDue - (changeDue % cidAmount)).toFixed(2);
              changeDue = (changeDue % cidAmount).toFixed(2);
          } else {
              changeUnitAmount = (changeDue - (changeDue % currencyAmount)).toFixed(2);
              changeDue = (changeDue % currencyAmount).toFixed(2);
          }
  
          // only update variables if there's enough money in the register to make change. 
          if (cid[i][1] >= changeUnitAmount) {
            totalChangeReceived += changeUnitAmount * 100
            cid[i][1] -= changeUnitAmount;
            changeStatus.change.push([cidUnit, changeUnitAmount]);
          }
        }
      }
  
    // format amounts to match expected test answers
    changeStatus.change.forEach(amount => {
      amount[1] = formatAmount(amount[1]);
    });
  
    let isClosed = !cid.some(moneyLeft);
  
    if (totalChangeReceived / 100 === cash - price) {
      if (isClosed) {
        changeStatus.status = "CLOSED";
        changeStatus.change = newCid;
      } else {
      changeStatus.status = "OPEN"
      }
    }
  
    return changeStatus;
  }
  
  // currency amount lookup table
  let currencyLookup = {
    "PENNY": .01, 
    "NICKEL": .05, 
    "DIME": .1, 
    "QUARTER": .25, 
    "ONE": 1, 
    "FIVE": 5, 
    "TEN": 10, 
    "TWENTY": 20, 
    "ONE HUNDRED": 100
  };
  
  function formatAmount(amount) {
    if (amount >= 1) {
      amount = Math.trunc(amount);
    } else if (amount > .1) {
      amount = Math.round(amount * 10) / 10; 
    } else {
      amount = Math.round(amount * 100) / 100; 
    }
    return amount
  }
  
  function moneyLeft(cidPair) {
    return cidPair[1] > 0 ? true : false;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  