// function findShortestString(arr) {
//   let lengthArr = arr.map((element)=> element.length)
//   let smallest = arr[lengthArr.indexOf(Math.min(...lengthArr))]
//   return smallest
// }

function findShortestString(arr){
  let newArr = []
 let length = arr.forEach((a => newArr.push((a.length))))
 
 for (let i = 0; i < newArr; i ++){
   
 }
 return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaaa', 'a', 'bbbb', 'b']));
  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
