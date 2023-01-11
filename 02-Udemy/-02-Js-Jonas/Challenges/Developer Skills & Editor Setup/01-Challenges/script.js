// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the x days? Answer: index + 1

// 2) Breaking up innto sub-problems
// - Transform array into string
// - Transform each element to string with ّC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start andend of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log("... " + str);
};
printForecast(data1);
