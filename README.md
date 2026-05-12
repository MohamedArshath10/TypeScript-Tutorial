# TypeScript Tutorial 📘

A structured reference repository covering core TypeScript concepts with definitions, syntax, and practical code examples.

---

## 📚 Table of Contents

1. [Types & Special Types](#1-types--special-types)
2. [Union & Intersection Types](#2-union--intersection-types)
3. [Interfaces](#3-interfaces)
4. [Enums](#4-enums)
5. [Generics](#5-generics)

---

## 1. Types & Special Types

TypeScript's type system allows you to explicitly annotate variables, parameters, and return values — catching errors at compile time rather than runtime.

### Primitive Types

| Type | Description | Example |
|------|-------------|---------|
| `string` | Textual data | `let name: string = "Arshath"` |
| `number` | Integer or floating-point | `let age: number = 22` |
| `boolean` | True or false value | `let isActive: boolean = true` |
| `bigint` | Large integer values | `let big: bigint = 100n` |
| `symbol` | Unique identifiers | `let id: symbol = Symbol("id")` |

### Special Types

| Type | Description |
|------|-------------|
| `any` | Disables type checking — use sparingly |
| `unknown` | Type-safe alternative to `any`; requires narrowing before use |
| `never` | Represents values that never occur (e.g., functions that always throw) |
| `void` | Used for functions that return no meaningful value |
| `null` | Represents intentional absence of a value |
| `undefined` | Variable declared but not yet assigned |

```typescript
// any - opts out of type safety
let data: any = "hello";
data = 42; // no error

// unknown - type-safe counterpart
let input: unknown = getUserInput();
if (typeof input === "string") {
  console.log(input.toUpperCase()); // safe after narrowing
}

// never - unreachable code
function throwError(message: string): never {
  throw new Error(message);
}

// void - no return value
function logMessage(msg: string): void {
  console.log(msg);
}
```

---

## 2. Union & Intersection Types

### Union Types (`|`)

A union type allows a value to be **one of several types**. TypeScript enforces that you handle all possible variants before operating on the value.

```typescript
type ID = string | number;

function printId(id: ID): void {
  if (typeof id === "string") {
    console.log(`String ID: ${id.toUpperCase()}`);
  } else {
    console.log(`Numeric ID: ${id}`);
  }
}

printId("abc-123"); // String ID: ABC-123
printId(101);       // Numeric ID: 101
```

### Intersection Types (`&`)

An intersection type combines **multiple types into one**, requiring a value to satisfy all constituent types simultaneously. Commonly used to compose complex object shapes.

```typescript
type Person = { name: string; age: number };
type Employee = { company: string; role: string };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Arshath",
  age: 22,
  company: "Ematix Solutions",
  role: "AI/ML Intern",
};
```

### Comparison

| Feature | Union (`\|`) | Intersection (`&`) |
|---------|-------------|-------------------|
| Logic | OR — one of the types | AND — all types combined |
| Use case | Flexible input values | Merging/composing object types |

---

## 3. Interfaces

An **Interface** defines a contract for the shape of an object — specifying required properties, optional fields, readonly values, and method signatures. Interfaces are extendable and support declaration merging.

### Basic Interface

```typescript
interface User {
  id: number;
  name: string;
  email?: string;       // optional property
  readonly createdAt: Date; // cannot be reassigned
}

const user: User = {
  id: 1,
  name: "Arshath",
  createdAt: new Date(),
};
```

### Extending Interfaces

```typescript
interface Animal {
  name: string;
  sound(): string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Buddy",
  breed: "Labrador",
  sound: () => "Woof!",
};
```

### Interface vs Type Alias

| Feature | `interface` | `type` |
|---------|-------------|--------|
| Extension | `extends` keyword | Intersection (`&`) |
| Declaration merging | ✅ Supported | ❌ Not supported |
| Use case | Object shapes, OOP contracts | Unions, primitives, complex types |

---

## 4. Enums

**Enums** define a named set of constant values, eliminating magic strings and numbers to improve code readability and maintainability.

### Numeric Enum (default)

```typescript
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

console.log(Direction.Up);    // 0
console.log(Direction[0]);    // "Up" (reverse mapping)
```

### String Enum

```typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

function updateStatus(status: Status): void {
  console.log(`User status updated to: ${status}`);
}

updateStatus(Status.Active); // User status updated to: ACTIVE
```

### Const Enum

```typescript
// Inlined at compile time — zero runtime overhead
const enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

const method: HttpMethod = HttpMethod.GET;
```

### When to Use Each

| Enum Type | Best For |
|-----------|----------|
| Numeric | Flags, bit masks, indexed values |
| String | API response codes, readable labels |
| Const | Performance-critical code, compile-time constants |

---

## 5. Generics

**Generics** allow you to write reusable, flexible components — functions, classes, and interfaces — that work across a variety of types while preserving full type safety. Instead of hardcoding a type, a type parameter (e.g., `<T>`) is resolved at the call site.

### Generic Function

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // "Hello"
console.log(identity<number>(42));      // 42
```

### Generic Interface

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Arshath", age: 22 },
  status: 200,
  message: "Success",
};
```

### Generic Class

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20
```

### Generic Constraints

```typescript
// Constrain T to types that have a 'length' property
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("Hello");        // 5
getLength([1, 2, 3]);      // 3
getLength({ length: 10 }); // 10
```

---

## 🛠️ Setup & Usage

```bash
# Install TypeScript globally
npm install -g typescript

# Compile a TypeScript file
tsc filename.ts

# Run with ts-node (no compilation step)
npx ts-node filename.ts
```

---

## 📁 Repository Structure

```
typescript-tutorial/
├── 01-types/
│   └── types.ts
├── 02-union-intersection/
│   └── union-intersection.ts
├── 03-interfaces/
│   └── interfaces.ts
├── 04-enums/
│   └── enums.ts
├── 05-generics/
│   └── generics.ts
└── README.md
```

---

## 📌 References

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
