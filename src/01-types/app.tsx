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
let testAny;
testAny = 12;
testAny = "hello";
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];
