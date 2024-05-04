export const array = [
  `const data = [
  { id: 1, name: 'Alice', age: 25 },
];

function findPersonById(id) {
  return data.find(person => person.id === id);
}

function updatePersonAge(id, newAge) {
  const person = findPersonById(id);
  if (person) {
    person.age = newAge;
    console.log(\`Updated \${person.name}'s age to \${newAge}\`);
  } else {
    console.log('Person not found');
  }
}

function listPeople() {
  console.log('Listing people:');
  data.forEach(person => {
    console.log(\`\${person.name}, age \${person.age}\`);
  });
}

updatePersonAge(2, 32);
listPeople();`,
  `function generateFibonacci(numTerms) {
    let fibonacciSequence = [0, 1];

    if (numTerms === 1) {
        return [0];
    } else if (numTerms === 2) {
        return [0, 1];
    } else {
        for (let i = 2; i < numTerms; i++) {
            let nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
            fibonacciSequence.push(nextTerm);
        }
        return fibonacciSequence;
    }
}

function printFibonacciSequence(sequence) {
    console.log("Fibonacci Sequence:");
    for (let i = 0; i < sequence.length; i++) {
        console.log(sequence[i]);
    }
}

const numTerms = 10;
const fibonacciSequence = generateFibonacci(numTerms);
printFibonacciSequence(fibonacciSequence);`
];
