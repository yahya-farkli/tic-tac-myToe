# tic-tac-myToe
TOES 
Constructors and factory functions are both ways to create objects in JavaScript, but they have some key differences in how they work and how they are used.

Constructors:

Constructors are functions that are used with the new keyword to create instances of objects.
They are typically defined using a function declaration or expression.
Inside the constructor function, you use this to refer to the newly created object.
Constructors are often used to create multiple instances of similar objects with shared properties and methods.
Example:
look constructor.js


//////////////////////////////////////////////////////////////////////////////////////////


Factory Functions:

Factory functions are functions that return objects without the need for the new keyword.
They are regular functions that create and return objects based on the arguments passed to them.
Factory functions can be more flexible than constructors because they can return different objects based on conditions.
They are useful for creating objects with complex initialization logic or for implementing object creation patterns like the factory pattern.
Example:
look factory

//////////////////////////////////////////////////////////////////////////////////////////

In summary, constructors are used with the new keyword to create instances of objects with shared properties and methods, while factory functions are regular functions that return objects and can be more flexible in their implementation .