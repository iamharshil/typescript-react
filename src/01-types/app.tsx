//! job of typescript is to define strict type and use it further as same type.
let variable = "hello";
variable = 4;

let testString: string;
testString = "hello";

let testBoolean: boolean;
testBoolean = true;

let testStringOrNumber: string | number;
testStringOrNumber = 10 || "10";

//* ARRAY

let names = ["jhon", "jane", "tom"];
names.push(3);
names.push("mikle");

let numbers = [11, 22, 33];

let testStringArray: string[];
testStringArray = ["one", "two", "three"];

let testNumberArray: number[];
testNumberArray = [true, "hi", 23];
testNumberArray = [12, 55, 23];

let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [1, "two", 3];

//* OBJECT

let user = {
	username: "john",
	age: 22,
	isAdmin: false,
};

user.username = "jane";
user.age = "eighteen";
user.age = 29;
user.isAdmin = true;

user.phone = "+12345678";

let userObj: {
	username: string;
	age: number;
	isAdmin: boolean;
	phone?: string; // not required
};

userObj = {
	username: "John",
	age: 23,
};
userObj = {
	username: "John",
	age: 23,
	isAdmin: true,
	phone: "+123456789",
};

//* ANY
let testAny; // default type is any here
testAny = 12;
testAny = "hello";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

//* FUNCTIONS

// when function return nothing it is (): void || let funcNane () => void;
let sayHi = () => {
	console.log("Hi, welcome");
};

sayHi = "hi";

// this must return string
let funcReturnString = (): string => {
	console.log("hi");
	return "lama dev";
};

const multiple = (num: number): number => {
	return num * 2;
};

const multiple2 = (num: number): void => {
  console.log(num);
  reutrn num * 2;
}

const sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2
}

sum(2, 3);


const func = (user: { username: string, age: number, phone?: number }) => {
  console.log(user.username);
}

//* TYPE ALIASES
type UserType = {
  username: string,
  age: number,
  phone?: string
}

const betterFunction = (user: UserType) => {
  console.log(user.username);
}

type myFunc = (a: number, b: string) => void;

const write : myFunc = (num, str) => {
  console.log(`${num} times${str}`);
}


type UserType2 = {
  username:string,
  age:number,
  phone?:string,
  theme: "dark" | "light"
}

const userWithTheme: UserType2 = {
  username: "John",
  age: 20,
  theme: "pink"
}


//* INTERFACES