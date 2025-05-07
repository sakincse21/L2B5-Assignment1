
## 1. What are some differences between interfaces and types in TypeScript?

We know TypeScript is a superset of JavaScript language. The main advantage of this language rests in type safety, where type safety means that variables should contain the type of data which was defined or assigned at first. This safety features can be implemented using interfaces and types in TypeScript. Here are some differences mentioned between them.

a. Types can be used as a primitive type but interface cannot. That means types can be used to declare any kind of variable but interfaces are only limited for object declaration.

```
type Roll = number;
interface RollObj{
	roll:number;
}

const myRoll : Roll = 123;
const myObj : RollObj = {
	roll:123
} 
```

b. Interfaces can be extended further to add more properties. But types cannot extend its properties, instead they can use intersection for object types.

```
type Roll = {roll: number};
type Name = {name: string};
type NameRoll = Roll & Name;
const nameRoll : NameRoll = {name: 'Sakin', roll: 123};

interface NameRollObj extends RollObj{
	name: string;
}
const studentObj : NameRollObj = {
	roll: 123,
	name: 'sakin'
}
```

c. Types can be converted to union type where one of the given types can be assigned to the variable. Interfaces can also be converted to union types which is not a common practice.

```
type Height = string | number | null;
let height : Height = 'Five feet Five inches';
height = 5.5;

interface IName {
	name: string;
}
interface IRoll {
	roll: number;
}
type NameOrRoll = IName | IRoll;
const nameOrRoll = {
	name: 'Sakin'
}
```

Talking about the use cases, interfaces can be used to bigger and scalable projects where classes needs to be extended. And types can be used in smaller projects for easier and faster implementation.


## 7. Provide an example of using **union** and **intersection** types in TypeScript.

Two types as well as interfaces can be converted to union and intersection types in TypeScript.

```
type Name = {name: string};
type Roll = {roll: number};
type  Id = number;
interface IName {name: string};
interface IRoll {roll: number};

type UnionType1 = Name | Roll | Id;
type UnionType2 = IName | IRoll;

type IntersectionType1 = Name & Roll;
type IntersectionType2 = IName & IRoll;
```

Through the example we can look into two points. First, we can use union type on object type as well as any primitive type like Id(number) which is not applicable for intersections. Intersection type must be used for object types. Second, because of assigning to the union and intersection type both the interfaces are converted to types and be implemented as type.
