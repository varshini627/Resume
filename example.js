// map method 
//     let name =["john","divya","harini","ram"]
//     const newName=name.map((name,index)=>{
//     return `index of this name ${name} = ${index}` // this (``)sign orginal value string satement la concat pana mudiyu

// })
//console.log(newName)
//console.log(name)



// filter method
//   let name =[1,2,3,4,5]
//   const num = name.filter((name , index)=>name%2==0)
//   console.log(num)
//   console.log(name)

  //find() syntax
  //Array.find(useCallback, thisarg)
  //Array.findIndex(useCallback, thisarg)
  //useCallback(Element, index, array)

//   const student = [
//   { reg: 1, name: "Alice", age: 22 },
//   { reg: 2, name: "Bob", age: 25 },
//   ];
//   const u = student.find(student => student.reg === 2);
//   console.log(u.age);
//   const i= student.findIndex(x => x.reg === 2)
//   console.log(i)
//   console.log(student.find(x => x.id === 9));
// const student = [
//   { reg: 1, name: "Alice"},
//   { reg: 2, name: "Bob"},
//   { reg: 3, name: "divya"},
//   { reg: 4, name: "harini"},
//   { reg: 5, name: "yamini"},
//   { reg: 6, name: "priya"},
//   { reg: 7, name: "madhu"},
//   { reg: 8, name: "rishi"},
//   { reg: 9, name: "sandy"},
//   { reg: 10, name: "ashwini"}
//   ];
//   const u = student.find(student => student.reg === 7);
//   const i = student.findIndex(student => student.reg === 11);
//   console.log("Value at Index 10:", student[7]);
//   console.log("Value at Index 11:", i);


// reduce()

// const cart =[120,80,300]
// const total = cart.reduce(
//     (acc,n)=> acc +n,0     // acc means accumulate and acc means addding the first 2 number and n means the next number
// );
// console.log(total);


// const alpha =['a','b','c']
// const result = alpha.reduce(
//     (acc,n)=> acc +n  // acc means accumulate and acc means addding the first 2 number and n means the next number
// );                      // 0 is only for num initial value is adding but in string value 0 is no need
// console.log(result);


