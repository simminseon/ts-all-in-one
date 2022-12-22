const a: number = 5;
const b: string = "4";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("abc");
const g: any = "모든 타입 다 됨";

// 타입 추론
const a2 = "5"; // a2가 "5" 라는 것을 typescript가 추론함
const result = add(1, 2); // result는 number라는 것을 추론함

// 고정값
const h: true = true; // 무조건 true만 받을 때
const i: 5 = 5; // 무조건 5만 받을 때

// 표기법1
function add(x: number, y: number): number {
  return x + y;
}

//아래 방식도 가능
function add4(x: number, y: number): number;
function add4(x, y) {
  return x + y;
}

// 표기법2
type Add2 = (x: number, y: number) => number;
const add2: Add2 = (x, y) => x + y;

// 표기법3
interface Add3 {
  (x: number, y: number): number;
}
const add3: Add3 = (x, y) => x + y;

// 객체 표기법
const obj2: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// 배열 표기법
const arr: number[] = [1, 2, 3];
const arr2: string[] = ["1", "2", "3"];
const arr3: Array<number> = [1, 2, 3];
const arr4: Array<string> = ["1", "2", "3"];
const arr5: [number, number, string] = [1, 2, "3"]; // 개수가 정해져있을 때, 개수도 맞춰야함

// string을 number로 바꿔줌
let test = 123;
test = "hello" as unknown as number;

try {
  const array = []; // 빈배열일때 never라는 타입이 나옴
  array.push("hello");
} catch (error) {
  error;
}

type World = "world" | "hell";
const a4: World = "world";
const b4 = `hello ${a}`;

type Greeting = `hello ${World}`;
const c4: Greeting = "hello hell";

function rest(a, ...args: string[]) {
  console.log(a, args); // "1", ["2","3"]
}

rest("1", "2", "3");

// 속성들을 상수로 사용할 때
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const obj = { a: "1234", b: "hello", c: "world" } as const;
type Key = typeof obj[keyof typeof obj];

// type과 interface
type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

const sunny: Human = { breath: true, breed: true, think: true };

interface Animal2 {
  // interface는 같은 이름으로 여러번 선언할 수 있음
  breath: true;
}
interface Poyouryu2 extends Animal2 {
  breed: true;
}

const test2: Poyouryu2 = { breath: true, breed: true };
