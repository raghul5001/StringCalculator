function add(numbers) {
  numbers = typeof numbers === 'string' ? numbers.trim() : String(numbers).trim();

  console.log('Received input:', numbers);


  if (numbers === '') {
    console.log('Empty input, returning 0');
    return 0;
  }

  let delimiter = /,|\n/;


  if (numbers.startsWith("//")) {
    const parts = numbers.split('\n');
    delimiter = new RegExp(parts[0].slice(2)); 
    numbers = parts[1]; 
  }


  const numArray = numbers.split(delimiter).map(num => {
    const trimmedNum = num.trim(); 


    if (trimmedNum === '') {
      console.log(`Empty value found, treating as 0`);
      return 0; 
    }

    const parsedNum = parseFloat(trimmedNum.replace(/["']/g, '')); 
    if (isNaN(parsedNum)) {
      console.log(`Invalid number: ${trimmedNum}`);
      return 0; 
    }

    console.log(`Parsing: ${trimmedNum} to ${parsedNum}`); 
    return parsedNum;
  });


  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }

 
  const sum = numArray.reduce((sum, num) => sum + num, 0);
  console.log('Sum:', sum);
  return sum;
}

export default add;
