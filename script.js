/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee => {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if (employee.profession === 'developer') {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let i = 0;
  while (i < arr.length) {
    if (arr[i].profession === 'admin') {
      arr.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const arr2 = [{ id: 5, name: "rock", age: "45", profession: "CEO" }, { id: 6, name: "david", age: "44", profession: "CTO" }, { id: 7, name: "kate", age: "43", profession: "manager" }];
  const combinedArr = arr.concat(arr2);
  console.log(combinedArr);
}
