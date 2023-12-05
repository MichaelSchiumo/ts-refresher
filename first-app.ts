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
