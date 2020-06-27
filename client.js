const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let ratingBonus2Below = 0;
let ratingBonus3 = 4;
let ratingBonus4 = 6;
let ratingBonus5 = 10;
let longTermBonus = 5;
function extraBonus() {
  for (let employee of employees) {
    let extraBonus = employee.employeeNumber.length;
    if (extraBonus === 4) {
      let serviceBonus = parseInt(employee.annualSalary) * 0.05;
      // employee.extraBonus = serviceBonus + employee.totalBonus;
      employee.totalBonus = Math.round(serviceBonus + employee.totalBonus);
      employee.bonusPercentage =
        (employee.totalBonus / employee.annualSalary) * 100 + '%';
      compTotal();
    }
  }
}
//empoloyee.extraBonus needs to equal totalBonus * 0.05
function calculateBonus() {
  for (let employee of employees) {
    if (employee.reviewRating <= 2) {
      employee.totalBonus = 0;
      employee.bonusPercentage = '0%';
    } else if (employee.reviewRating === 3) {
      employee.totalBonus = employee.annualSalary * 0.04;
      employee.bonusPercentage = '4%';
    } else if (employee.reviewRating === 4) {
      employee.totalBonus = employee.annualSalary * 0.06;
      employee.bonusPercentage = '6%';
    } else if (employee.reviewRating === 5) {
      employee.totalBonus = employee.annualSalary * 0.1;
      employee.bonusPercentage = '10%';
    }
  }
  extraBonus();
}
function compTotal() {
  for (let employee of employees) {
    employee.totalCompensation = Math.round(
      employee.totalBonus + parseInt(employee.annualSalary)
    );
  }
}
calculateBonus();
console.table(employees);
