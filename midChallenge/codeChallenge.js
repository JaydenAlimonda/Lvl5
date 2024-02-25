//1
const arrayOfStrings = ['apple', 'banana', 'cherry'];

const arrayOfCharacters = arrayOfStrings.map(str => str.split(''));

const flattenedArray = [].concat(...arrayOfCharacters);

const uniqueCharacters = [...new Set(flattenedArray)];

console.log(uniqueCharacters);

//2

function sortByProperty(objects, propertyName) {
    return objects.slice().sort((a, b) => a[propertyName] - b[propertyName]);
  }
  
  const people = [
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'Alice', age: 30 },
    { name: 'David', age: 28 },
  ];
  
  const sortedByAge = sortByProperty(people, 'age');
  console.log(sortedByAge);


  