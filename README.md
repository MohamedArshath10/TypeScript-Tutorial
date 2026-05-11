# TypeScript-Tutorial

📘 Concepts Covered
1. Types & Special Types
Types in TypeScript enable static type checking by explicitly declaring the shape of data — primitives like string, number, boolean, and structured types like object and array.
Special Types extend this further:

any — opts out of type checking entirely
unknown — a type-safe alternative to any, requires narrowing before use
never — represents values that never occur (e.g., functions that always throw)
void — used for functions that return no meaningful value
null & undefined — represent the intentional absence of a value


2. Union & Intersection Types

Union (|) — allows a value to be one of several types. Useful when a variable can hold multiple possible forms (e.g., string | number).
Intersection (&) — combines multiple types into one, requiring a value to satisfy all constituent types simultaneously. Ideal for composing complex type structures.


3. Interfaces
An Interface defines a contract for the shape of an object — specifying required properties, optional fields, and method signatures. They are extendable via extends, support declaration merging, and serve as the primary tool for structuring object-oriented code in TypeScript.

4. Enums
Enums (Enumerations) define a named set of constant values, improving readability and reducing magic strings or numbers in code. TypeScript supports:

Numeric Enums — auto-incremented integer values
String Enums — explicit, human-readable string values
Const Enums — inlined at compile time for zero runtime overhead


5. Generics
Generics allow components, functions, and classes to operate over a variety of types while maintaining full type safety. Instead of hardcoding a specific type, you define a type parameter (e.g., <T>) that gets resolved at the call site — enabling reusable, flexible, and strongly-typed abstractions.
