import React from 'react';
import { types, getSnapshot } from 'mobx-state-tree';

const Todo = types.model({
  name: types.optional(types.string, ""),
  done: types.optional(types.boolean, false),
})

const User = types.model({
  name: types.optional(types.string, ""),
})

const RootStore = types.model({
  users: types.map(User),
  todos: types.optional(types.map(Todo), {}),
})

const store = RootStore.create({
  users: {}
})

const john = User.create()
const eat = Todo.create({ name: "eat" })

console.log("john:", getSnapshot(john))
console.log("Eat TODO:", getSnapshot(eat))

function App() {
  return (
    <>
    </>
  );
}

export default App;
