const data = "w3resource";
const data1 = [1, 2, 4, 0];
function check() {
  let a = Array.isArray(data);
  let b = Array.isArray(data1);
  console.log("data:", a);
  console.log("data1:", b);
}
check();
const data2 = ["w3resourse", "w3resourse", "w3resourse"];

function clone() {
  let cloned1 = [].concat(data2);
  let cloned2 = [].concat(data1);
  console.log("clone array1:", cloned1);
  console.log("clone array2:", cloned2);
}
clone();

const firstelement = (ar, n) => {
  if (ar == null) {
    return void 0;
  }
  if (n == null) {
    return ar[0];
  }

  if (n < 0) {
    return ar.slice(0, n);
  }
};
console.log("first element of array:", firstelement([7, 9, 0, -2]));

console.log("first element of array:", firstelement([data1]));
