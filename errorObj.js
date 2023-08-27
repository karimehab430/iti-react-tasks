function validateParams(param1, param2) {
    if (arguments.length !== 2) {
      throw new Error('Exactly 2 parameters are required.');
    }
  }
  
  function addNumbers(...numbers) {
    if (numbers.length === 0) {
      throw new Error('At least one number must be provided.');
    }
  
    for (var num of numbers) {
      if (typeof num !== 'number') {
        throw new Error('Only numbers are allowed as parameters.');
      }
    }
  
    var sum = 0;
    for (const num of numbers) {
      sum += num;
    }
  
    return sum;
  }

  try {
    validateParams(1, 2, 3); 
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(addNumbers(1, 2, 3, 4, 5, '6')); 
  } catch (error) {
    console.error(error.message);
  }