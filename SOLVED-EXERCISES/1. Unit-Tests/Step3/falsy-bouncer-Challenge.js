function bouncer(arr) {

  let result = []
  let falsyValues = [false, null, 0, "", undefined]

  arr.map(item => {
    if (falsyValues.filter(falsy => item == falsy || Number.isNaN(item)).length == 0) {
      result.push(item);
    }
  });
  
  return result;
}

bouncer([7, "ate", "", false, 9]);