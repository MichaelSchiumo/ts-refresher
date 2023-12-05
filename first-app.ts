function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

type StringOrNum = string | number;
type AddFn = (a: number, b: number) => number;
function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

interface Credentials {
  password: string;
  username: string;
  id: number;
}

let creds: Credentials;

creds = {
  password: 'abc',
  username: 'micahel',
  id: 1,
};

class AuthCredentials implements Credentials {
  password: string;
  username: string;
  id: number;
}

function login(credentials: Credentials) {}

//using creds object
login(creds);

//or

//using new instance of AuthCredentials class
login(new AuthCredentials());

type Admin = {
  permissions: string[];
};

type AppUser = {
  username: string;
};

//this is a combination of Admin and AppUser
//using & merges these types
type AppAdmin = Admin & AppUser;

//admin must have all types from these two
let admin: AppAdmin;

admin = {
  permissions: ['login'],
  username: 'michael',
};

//can also merge using interface
interface Admin2 {
  permissions: string[];
}

interface AppUser2 {
  username: string;
}

interface AppAdmin2 extends Admin, AppUser {}

let admin2: AppAdmin2;

admin2 = {
  permissions: ['login'],
  username: 'michael',
};

//using literal types
//ex when you only want the string value to be certain string literals
let role: 'admin' | 'user' | 'editor'; // 'admin', 'user', 'editor';

//role can only be one of the above values
role = 'm';
