//destructure the name and password from
let ob = {
  name: "masai",
  password: "admin@123",
  hostname: "masaischool",
  client: "chrome",
};
let { name, password } = ob;
console.log(name, password);

//destructure the pincode and rename to pin
let ob2 = { name: "masai", address: { pincode: 560095 } };
let {
  name: name_,
  address: { pincode: pin },
} = ob2;
console.log(pin);

//destructure the first value and second value of the array
let a1 = [100, 200, 500, 600];
let [fisrt, second, ...rest] = a1;
console.log(fisrt, second);

//destructure to get the value 50 from this array
let a2 = [100, [50, 60, 70]];
let [a, [val, ...rest1]] = a2;
console.log(val);

//destructure to get the value 2,3 into a new array
let input = [
  1,
  {
    arr: [1, 2, 3],
  },
];

let [
  aa,
  {
    arr: [one, two, three],
  },
] = input;

console.log(two, three);
