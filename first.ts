const a: number = 5;
const b: string = "4";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("abc");
const g: any = "모든 타입 다 됨";

// 타입 추론
const a2 = "5"; // a2가 "5" 라는 것을 typescript가 추론함

// 고정값
const h: true = true; // 무조건 true만 받을 때
const i: 5 = 5; // 무조건 5만 받을 때

// 표기법1
function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 2); // result는 number라는 것을 추론함

// 표기법2
type Add2 = (x: number, y: number) => number;
const add2: Add2 = (x, y) => x + y;

// 표기법3
interface Add3 {
  (x: number, y: number): number;
}
const add3: Add3 = (x, y) => x + y;

// 객체 표기법
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// 배열 표기법
const arr: number[] = [1, 2, 3];
const arr2: string[] = ["1", "2", "3"];
const arr3: Array<number> = [1, 2, 3];
const arr4: Array<string> = ["1", "2", "3"];
const arr5: [number, number, string] = [1, 2, "3"]; // 개수가 정해져있을 때, 개수도 맞춰야함
