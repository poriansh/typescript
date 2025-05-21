const greeting = (name: string) => {
  return `Hello, ${name}!`;
};

console.log(greeting("2"));

let cours: boolean = true;
let cours1: string = "1";

let cours2; //any type

let number: number[] = [1, 2, 3, 4]; // array type numbers

let user: [string, number, boolean] = ["mohammad", 2, false]; // tuple type // طول ارایه مشخصه

// enum type
//  مجموعه ای از ثابت های مشخص
// پیش فرض به صورت عددی از 0 شروع میشه
const enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
const colorpiker = Color.Blue;
// object type
let employee: {
  name?: string;
  id: number;
  address: (date: Date) => void;
} = {
  name: "mohammad",
  id: 1,
  address: (date: Date) => {
    console.log(date);
  },
};
let color: Color = Color.Red;

//union type
let id: string | number; // id can be string or number

//literal type
const direction: "up" | "down" | "left" | "right" = "up";

// type alias

type UserType = {
  name: string;
  age: number;
};
const userType: UserType = {
  name: "mohammad",
  age: 2,
};

// function type
function add(x: number, y?: number): number {
  return x + (y || 0); // optional parameter
}
add(1);
// تایپ خروجی و ورودی رو باید مشخص کرد

function add1(x: number, y: number): void {
  console.log(x + y);
}
// وقتی چیزی  رو ریترن نمیکنیم از void استفاده میکنیم

// uknown type
let input2: unknown = 2; // unknown type
// هر چیزی ممکنه باشه، ولی باید قبل استفاده چک کنی	امن‌تر

// never type
function error(message: string): never {
  throw new Error(message); // never type
}
error("error");
// هیچ چیزی ریترن نمیکنه
// اما  void  undefind  یا  null هم ریترن میکنه

//anotation type
let userName: string = "mohammad"; // annotation type
// تایپ رو مشخص میکنیم

//interface type
interface User {
  name: string;
  age: number;
  address?: string; // optional property
}
// برای ابجکت ها و کلاس ها استفاده میشه

// extend interface
// ترکیب چندین اینترفیس
interface Person2 {
  name: string;
  age: number;
}

interface Employee3 extends Person2 {
  salary: number;
}

const emp: Employee3 = {
  name: "Ali",
  age: 30,
  salary: 5000,
};

// intersection type
// ترکیب چندین تایپ
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type FullInfo = Person & Employee;

const user5: FullInfo = {
  name: "Ali",
  salary: 5000,
};

// type guard
// عبارت value is string
// برای چک کردن نوع متغیرها استفاده میشه
// اگر تابع isString مقدار true برگردونه، TypeScript درک می‌کنه که value از نوع string هست.
type stringOrNumber = string | number;
function isString(value: stringOrNumber): value is string {
  if (typeof value === "string") {
    return true;
  }
  return false;
}

// type assertion
// من مطمئنم این مقدار، از این نوعه
let input = "hello";
let strLength: number = (input as string).length;

// type predicate
// برای چک کردن نوع متغیرها استفاده میشه
type Dog = {bark: () => void};
type Cat = {meow: () => void};
type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return "bark" in animal;
}

// index proprties

const user2: {
  [key: string]: string | number;
} = {
  name: "mohammad",
  age: 2,
};

// function overload
function addfun(x: number, y: number): number;
function addfun(x: string, y: string): string;
function addfun(x: any, y: any): any {
  return x + y;
}

// nullish coalescing
// برای چک کردن null و undefined استفاده میشه
const value = null;
const result = value ?? "default value";
// اگر value null یا undefined باشه، result برابر با "default value" میشه

// generic type
// برای ایجاد توابع و کلاس‌های عمومی استفاده میشه
function identity<T>(item: T): T {
  return item;
}
const result1 = identity<string>("hello");
const result2 = identity<number>(2);

// built-in generic types
const numbers: Array<number> = [1, 2, 3]; // array type
const names: Array<string> = ["mohammad", "ali"]; // array type

// constraint generic types
// محدود کردن نوع جنریک
// برای اینکه فقط از نوع خاصی استفاده بشه
function logLength<T extends string | number>(item: T): void {
  console.log(item);
}

// keyof constraint
// برای گرفتن کلیدهای یک نوع استفاده میشه
function getKey<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const user3 = { 
  name: "mohammad",
  age: 2,
};
const nameKey = getKey(user3, "name")






////////////////////////////////////////////

// const MyComponent: React.FC<{name: string}> = ({name}) => {
//   return <div>Hello, {name}</div>;
// };
// مزایای React.FC : تایپ خودکار children و تشخیص تایپ اسکریپت که کامپوننت ری اکته 



// useContext
// // تعریف نوع داده برای کانتکست
// type UserContextType = {
//   name: string;
//   age: number;
//   setUser: () => void;
// }


// const UserContext = createContext<UserContextType | undefined>(undefined);


// const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState({
//     name: "Mohammad",
//     age: 25,
//   });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };




// generic props 
// type ListProps<T> =  {
//   items: T[];
//   renderItem: (item: T) => React.ReactNode;
// }

// کامپوننت عمومی لیست
// const List = <T>({ items, renderItem }: ListProps<T>) => {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{renderItem(item)}</li>
//       ))}
//     </ul>
//   );
// };


