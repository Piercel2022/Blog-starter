---
title: 'Immutable objects in  React'
excerpt: 'In this blog post, I will explain what immutable objects are and why they are useful in React. Immutable objects are objects that cannot be modified after they are created. They have many benefits '
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2023-07-15T05:35:07.322Z'
author:
  name: Piercel Moussa
  picture: '/assets/blog/authors/me.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

In this blog post, I will explain what immutable objects are and why they are useful in React. Immutable objects are objects that cannot be modified after they are created. They have many benefits, such as:

- Improving performance by avoiding unnecessary re-rendering of components
- Simplifying state management by avoiding side effects and mutations
- Enabling easy comparison of objects by reference equality
- Facilitating the use of functional programming techniques and libraries

To create immutable objects in JavaScript, we can use the Object.freeze() method, which prevents any changes to the properties of an object. For example:

const person = Object.freeze({
  name: "Alice",
  age: 25
});

// This will throw an error
person.name = "Bob";

// This will also throw an error
delete person.age;

However, Object.freeze() only works on the top level of the object. If the object has nested properties that are also objects, they will not be frozen. To make a deep freeze, we need to recursively apply Object.freeze() to all the nested objects. For example:

const person = Object.freeze({
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zip: "10001"
  }
});

// This will not throw an error
person.address.city = "Los Angeles";

// To prevent this, we need to do a deep freeze
function deepFreeze(obj) {
  // Get the names of all the properties of the object
  const propNames = Object.getOwnPropertyNames(obj);

  // Loop through each property
  for (let name of propNames) {
    // Get the value of the property
    let value = obj[name];

    // If the value is an object, recursively freeze it
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  // Freeze the object itself
  return Object.freeze(obj);
}

const person = deepFreeze({
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zip: "10001"
  }
});

// Now this will throw an error
person.address.city = "Los Angeles";
