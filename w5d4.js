
let uniq = function(array) {
  let uniqEls = [];

  for (let i = 0; i < array.length; i++) {
    if(uniqEls.indexOf(array[i]) === -1) {
      uniqEls.push(array[i]);
    }
  }
  return uniqEls;
};
// console.log(uniq([1, 2, 1, 3, 3]));

let twoSum = function(array) {
  let pairs = [];

  for (let i = 0; i < array.length; i++) {
  for (let j = (i + 1); j < array.length; j++) {
    if(array[i] + array[j] === 0) {
      pairs.push([i, j]);
    }
  }

  }
  return pairs;
};

// console.log(twoSum([-1, 0, 2, -2, 1]));

let transpose = function(array) {
  let transposed = [];
  for(let i = 0; i < array[0].length; i++) {
    transposed.push([]);
  }

  for(let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      transposed[j].push(array[i][j]);
    }
  }
  return transposed;
};

// console.log(transpose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));

  let myEach = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  };



// myEach([1,2,3], cb);

let myMap = function(array, callback) {
  let mapped = [];

  // for (let i = 0; i < array.length; i++) {
  //   mapped.push(callback(array[i]));
  // }

  mapped.push(myEach(array, arg => {
    console.log(arg);
  }));
  return mapped;
};

let cb = function(el) {
  return (el);
};

// console.log(myMap(([1,2,3]), cb));

let myInject = function(array, callback) {
  let injected = array[0];

  // for (let i = 0; i < array.length; i++) {
  //   injected += callback(array[i]);
  // }
    myEach(array.slice(1), arg => {
      injected += callback(arg);
    });

  return injected;
};


// console.log(myInject(([1,2,3]), cb));

let bubbleSort = function(array) {
  let sorted = false;

  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
          sorted = false;
        }
      }
    }
  }
  return array;
};

// console.log(bubbleSort([3,2,1,6,3]));

let substring = function(string) {
  let substrings = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.slice(i, j));
    }
  }

  return substrings;
};

// console.log(substring("cat"));

let range = function(start, end) {
  let r = [];
  for (let i = start; i <= end; i++) {
    r.push(i);
  }
  return r;
};

let rangeRec = function(start,end) {
  let r = [];
  if (start > end) return [];
  r.push(start);
  // console.log(r);
  r = r.concat(rangeRec(start + 1, end));

  return r;
};

// console.log(rangeRec(3,10));

let exponentiation1 = function (base, power) {
  if(power === 0) return 1;
  return base * (exponentiation1(base, power - 1));
};

// console.log(exponentiation1(2, 4));

let exponentiation2 = function (base, power) {
  if(power === 1) return base;
  if(power === 0) return 1;
  // debugger

  let exp1 = exponentiation2(base, Math.floor(power/2)) * exponentiation2(base, Math.floor(power/2));
  let exp2 = exponentiation2(base, Math.floor((power-1)/2)) * exponentiation2(base, Math.floor((power-1)/2));

  if (power % 2 === 0 ) {
    return exp1;
  } else if (power % 2 === 1){
    return base * exp2;
  }
};

// console.log(exponentiation2(4, 3));

let fib = function (n) {
  let fibs = [1, 2];

  for (let i = 0; i < n; i++) {
    fibs.push((fibs[fibs.length - 2] + fibs[fibs.length - 1]));
    i++;
  }

  return fibs;
};


let fibRec = function(n) {
  if (n === 1) return [1];
  if (n <= 0) return [];
  if (n === 2) return [1, 2];

  let fibs = fibRec(n-1);
  fibs.push(fibs[fibs.length-1] + fibs[fibs.length - 2]);
  return fibs;
};

// console.log(fibRec(6));

let bSearch = function(array, target) {
  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx);

  if (array[midIdx] === target) return midIdx;
  if ((array.length === 1) && (array[midIdx] !== target)) return null;
  // debugger
  if(target < array[midIdx]) {
      return bSearch(left, target);
  } else if (target > array[midIdx]) {
      let b = bSearch(right, target);
      if (b !== null) {
        return (midIdx + bSearch(right, target));
      } else {
        return null;
      }

  } else if ((array.length === 1) && (array[midIdx] !== target)) {
      return null;
  }
};
//
// console.log(bSearch([1, 2, 3], 1));
// console.log(bSearch([2, 3, 4, 5], 3));
// console.log(bSearch([2, 4, 6, 8, 10], 6));
// console.log(bSearch([1, 3, 4, 5, 9], 5));
// console.log(bSearch([1, 2, 3, 4, 5, 6], 6));
// console.log(bSearch([1, 2, 3, 4, 5, 6], 0));
// console.log(bSearch([1, 2, 3, 4, 5, 7], 6));

let makeChange = function(target, coins) {
  // let total = 0;
  // let change = [];
  //
  // let remainder = target - total;
  //
  // debugger
  //
  // while (total + coins[0] <= target) {
  //   total += coins[0];
  //   remainder -= coins[0];
  //   change.push(coins[0]);
  // }
  //
  // console.log(change)
  // if (target === total) return change;
  // let b = makeChange(remainder, coins.slice(1));
  // if (b !== null) {
  //     console.log(`coins: ${coins.slice(1)}`);
  //     console.log(`remainder: ${remainder}`);
  //     console.log(change.push(makeChange(remainder, coins.slice(1))));
  //     return change.push(makeChange(remainder, coins.slice(1)));
  // } else {
  //     return null;
  //   }

  if (target === 0) {
    return [];
  }

  let bestChange = null;

  coins.forEach((coin, index) => {
    if (coin > target) {
      return;
    }

    let remainder = target - coin;
    // remember the optimization where we don't try to use high coins
    // if we're already using a low one?
    let restChange = makeChange(remainder, coins.slice(index));

    let change = [coin].concat(restChange);
    if (!bestChange || (change.length < bestChange.length)) {
      bestChange = change;
    }
  });

  return bestChange;


};

console.log(makeChange(14, [10,7,1]));
